const reRequire = require("./re-require"),
    ROOT_PATH = process.cwd(),
    fs = require("fs-extra"),
    path = require("path");

/**
 * A function to read user-defined config and bundle it into single config
 * @param options options provided by developer when call this method
 */
const loadvormirConfig = options => {
    const defaultAlias = reRequire("../../alias"),
        env = process.env.NODE_ENV || "development",
        configPath = path.resolve(ROOT_PATH, "./vormir.config.js"),
        configPathTypescript = path.resolve(ROOT_PATH, "./vormir.config.ts"),
        serverWebpackConfigGenerator = require(`../config/webpack.config.server.${
            env === "development" ? "development" : "build"
        }`),
        clientWebpackConfigGenerator = require(`../config/webpack.config.client.${
            env === "development" ? "development" : "build"
        }`);

    let customConfig = {},
        webpack,
        alias = defaultAlias;

    //Initialize customConfig with user-defined vormir config
    if (fs.pathExistsSync(configPath)) {
        customConfig = reRequire(configPath);
    } else if (fs.pathExistsSync(configPathTypescript)) {
        //Initialize customConfig with vormir.config.ts if exists
        customConfig = reRequire(configPathTypescript);
    }

    //Add alias if defined in options
    if (!options || options.alias !== false) {
        alias = {
            ...customConfig.alias,
            ...defaultAlias
        };
    }

    //Init webpack for client and server
    if (!options || options.webpack !== false) {
        webpack = {
            client: clientWebpackConfigGenerator({ ...customConfig, alias }),
            server: serverWebpackConfigGenerator({ ...customConfig, alias })
        };
    }

    const config = {
        ...customConfig,
        alias,
        webpack
    };
    return config;
};

module.exports = loadvormirConfig;
