const webpack = require("webpack"),
    path = require("path"),
    fs = require("fs-extra"),
    CircularDependencyPlugin = require("circular-dependency-plugin"),
    ExtractCSSChunks = require("extract-css-chunks-webpack-plugin"),
    babelOptions = require("./babel.config"),
    webpackMerge = require("webpack-merge"),
    babelMerge = require("babel-merge"),
    extractEnv = require("./util/extract-env"),
    useTypescript = fs.pathExistsSync(path.resolve(process.cwd(), "./tsconfig.json")),
    { configureWorkbox, getSWFilename } = require("./util/workbox");

module.exports = ({
    alias,
    build: buildEnv,
    webpack: webpackConfig = {},
    postcss: postcssConfig = {},
    babel: babelConfig = {}
}) => {
    const {
            env,
            wdsPort,
            webpack: { define: webpackDefineEnv }
        } = extractEnv(process.env),
        { workbox: workboxConfig } = webpackConfig,
        publicPath = webpackConfig.publicPath || "/__vormir_WDS__/",
        assetsOutputPath = webpackConfig.assetsOutputPath || "public",
        resolve = {
            extensions: [".ts", ".tsx", ".js", ".css", ".json", ".wasm", ".mjs"]
        };

    let workboxPlugin = [];
    if (workboxConfig) {
        workboxPlugin = configureWorkbox(workboxConfig);
    }
    const defaultConfig = {
        name: "client",
        target: "web",
        mode: "development",
        devtool: "cheap-eval-source-map",
        optimization: {
            splitChunks: {
                maxInitialRequests: Infinity,
                minSize: 0,
                automaticNameDelimiter: "-",
                cacheGroups: {
                    default: false,
                    vendors: false,
                    vendor: {
                        test: /node_modules/,
                        chunks: "all",
                        name: "vendor"
                    }
                }
            },
            runtimeChunk: {
                name: "manifest"
            },
            noEmitOnErrors: true,
            namedModules: true,
            namedChunks: true
        },
        entry: [
            "react-hot-loader/patch",
            `webpack-dev-server/client?${publicPath}`,
            "webpack/hot/only-dev-server",
            alias["@@BUILD_CLIENT_APP_PATH@@"]
        ],
        resolve: {
            ...resolve,
            alias
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)?$/,
                    use: [
                        {
                            loader: "thread-loader",
                            options: {
                                poolTimeout: Infinity // keep workers alive for more effective watch mode
                            }
                        },
                        {
                            loader: "babel-loader",
                            options: babelMerge(babelConfig, babelOptions)
                        }
                    ],
                    exclude: /node_modules\/(?!(vormir|@vormir)\/).*/
                },
                {
                    test: /\.(ts|tsx)?$/,
                    use: [
                        "cache-loader",
                        {
                            loader: "thread-loader",
                            options: {
                                poolTimeout: Infinity // keep workers alive for more effective watch mode
                            }
                        },
                        {
                            loader: "ts-loader",
                            options: {
                                // IMPORTANT! use happyPackMode mode to speed-up compilation and reduce errors reported to webpack
                                happyPackMode: true
                            }
                        },
                        {
                            loader: "babel-loader",
                            options: babelMerge(babelConfig, babelOptions)
                        }
                    ],
                    exclude: /node_modules\/(?!(vormir|@vormir)\/).*/
                },
                {
                    test: /\.(graphql|gql)$/,
                    exclude: /node_modules\/(?!(vormir|@vormir)\/).*/,
                    loader: "graphql-tag/loader"
                },
                {
                    test: /\.(scss|sass)$/,
                    use: [
                        ExtractCSSChunks.loader,
                        {
                            loader: "css-loader",
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                                sourceMap: true
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                config: {
                                    path: __dirname,
                                    ctx: {
                                        ...postcssConfig,
                                        alias
                                    }
                                }
                            }
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                },
                {
                    test: /\.(less)$/,
                    use: [
                        ExtractCSSChunks.loader,
                        {
                            loader: "css-loader",
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                                sourceMap: true
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                config: {
                                    path: __dirname,
                                    ctx: {
                                        ...postcssConfig,
                                        alias
                                    }
                                }
                            }
                        },
                        {
                            loader: "less-loader"
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        ExtractCSSChunks.loader,
                        {
                            loader: "css-loader",
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                                sourceMap: true
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                config: {
                                    path: __dirname,
                                    ctx: {
                                        ...postcssConfig,
                                        alias
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.(jpg|jpeg|png|svg|gif)?$/,
                    use: {
                        loader: "file-loader",
                        options: {
                            name: "img/[name]-[hash].[ext]",
                            publicPath
                        }
                    }
                },
                {
                    test: /\.(mp3|wav|ogg|mp4|webm|mpg|mpeg|mov|wmv|swf|flv)?$/,
                    use: {
                        loader: "file-loader",
                        options: {
                            name: "media/[name]-[hash].[ext]",
                            publicPath
                        }
                    }
                },
                {
                    test: /\.(ttf|eot|woff|woff2)$/,
                    use: {
                        loader: "file-loader",
                        options: {
                            name: "font/[name]-[hash].[ext]",
                            publicPath
                        }
                    }
                }
            ]
        },
        plugins: [
            new CircularDependencyPlugin({
                exclude: /a\.js|node_modules/,
                failOnError: true,
                cwd: process.cwd()
            }),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin({
                "process.env.vormir_BUILD_ENV": {
                    ...buildEnv
                },
                "process.env.BUILD_TARGET": JSON.stringify("client"),
                ...webpackDefineEnv
            }),
            new ExtractCSSChunks({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: "[name].css",
                chunkFilename: "[name].css",
                hot: true, // if you want HMR - we try to automatically inject hot reloading but if it's not working, add it to the config
                orderWarning: true, // Disable to remove warnings about conflicting order between imports
                reloadAll: true, // when desperation kicks in - this is a brute force HMR flag
                cssModules: true // if you use cssModules, this can help.
            }),
            ...workboxPlugin,
            {
                apply: compiler => {
                    compiler.plugin("after-emit", (compilation, done) => {
                        const stats = compilation.getStats().toJson({
                            // node_modules/webpack/lib/Stats.js
                            hash: true,
                            version: true,
                            timings: false,
                            assets: true,
                            chunks: false,
                            chunkModules: false,
                            chunkOrigins: false,
                            modules: false,
                            cached: false,
                            reasons: false,
                            children: false,
                            source: false,
                            errors: false,
                            errorDetails: false,
                            warnings: false,
                            publicPath: true
                        });
                        delete stats.assets;
                        if (workboxPlugin.length > 0) {
                            stats.assetsByChunkName = {
                                ...stats.assetsByChunkName,
                                "service-worker": workboxPlugin[0].config.swDest
                            };
                        }
                        fs.outputFile("stats/stats.json", JSON.stringify(stats), done);
                    });
                }
            }
        ],
        devServer: {
            host: "0.0.0.0",
            port: wdsPort,
            historyApiFallback: true,
            clientLogLevel: "none",
            hot: true,
            open: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Service-Worker-Allowed": "/"
            },
            stats: { colors: true, children: false },
            overlay: true,
            disableHostCheck: true
        },
        output: {
            path: path.join(__dirname, assetsOutputPath),
            publicPath,
            chunkFilename: "[name].chunk.js",
            filename: "[name].js"
        }
    };
    let finalConfig = defaultConfig;
    if (useTypescript) {
        const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
        finalConfig.plugins.push(new ForkTsCheckerWebpackPlugin({ checkSyntacticError: true }));
    }
    if (webpackConfig.client) {
        finalConfig = webpackMerge.smart(defaultConfig, webpackConfig.client);
    }
    return finalConfig;
};
