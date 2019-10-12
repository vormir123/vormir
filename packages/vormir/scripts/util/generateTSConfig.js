const ROOT_PATH = process.cwd(),
    fs = require("fs-extra"),
    path = require("path"),
    logger = require("./logger"),
    merge = require("lodash.merge"),
    defaultTSConfig = {
        compilerOptions: {
            target: "es5",
            allowJs: true,
            skipLibCheck: true,
            allowSyntheticDefaultImports: true,
            strict: true,
            forceConsistentCasingInFileNames: true,
            module: "esnext",
            moduleResolution: "node",
            resolveJsonModule: true,
            isolatedModules: true,
            jsx: "preserve",
            outDir: "./dist/",
            esModuleInterop: true,
            lib: ["esnext", "dom"],
            baseUrl: ".",
            paths: {
                "@vormir/server": ["./node_modules/vormir/server"],
                "@vormir/client": ["./node_modules/vormir/client"],
                "@vormir/component": ["./node_modules/vormir/shared/component"],
                "@vormir/util": ["./node_modules/vormir/shared/util"],
                "@vormir/route": ["./node_modules/vormir/shared/route"],
                "@vormir/alias": ["./node_modules/vormir/shared/alias"],
                "@vormir/redux": ["./node_modules/vormir/shared/proxy/redux.js"],
                "@vormir/router": ["./node_modules/vormir/shared/proxy/router.js"],
                "@vormir/intl": ["./node_modules/react-intl"],
                "@vormir/helmet": ["./node_modules/react-helmet"],
                "@vormir/graphql": ["./node_modules/react-apollo"],
                "@vormir/locale-data": ["./node_modules/react-intl/locale-data"]
            }
        },
        include: ["src"],
        exclude: ["node_modules"]
    };

/**
 * A function to copy user typescript configurations in vormir.config.(js|ts) to tsconfig.json
 * @param configPath path to vormir.config.(js|ts)
 */
const generateTSConfig = configPath => {
    const vormirConfig = require(configPath),
        userTSConfig = vormirConfig.typescript,
        tsConfigJsonPath = path.resolve(ROOT_PATH, "./tsconfig.json");
    let tsConfigJSON = {};

    const userAlias = Object.keys(vormirConfig.alias).reduce((result, key) => {
        result[`${key}/*`] = [`./${path.relative(ROOT_PATH, vormirConfig.alias[key])}/*`];
        return result;
    }, {});

    tsConfigJSON = merge(defaultTSConfig, userTSConfig);

    //Override path from user alias in vormir config
    tsConfigJSON.compilerOptions.paths = {
        ...tsConfigJSON.compilerOptions.paths,
        ...userAlias
    };

    //Writing alias to tsconfig.json
    logger("log", "Writing your typescript config into tsconfig.json...");
    fs.writeFileSync(
        tsConfigJsonPath,
        JSON.stringify(tsConfigJSON, (key, value) => value, 4),
        err => {
            logger("error", "Error when writing your tsconfig.json");
            logger("error", err.stack || err);
        }
    );
    logger("log", "tsconfig.json successfully generated!");
};

module.exports = generateTSConfig;
