import path from "path";

/**
 * Default vormir server environment.
 */
export const DEFAULT_ENV = {
    env: process.env.NODE_ENV || "development",
    port: process.env.vormir_PORT || 3000,
    logLevel:
        process.env.vormir_LOG_LEVEL || process.env.NODE_ENV === "development" ? "silly" : "info",
    configDir: process.env.vormir_CONFIG_DIR || "../vormir.runtime-config.json",
    serveAssets: process.env.vormir_SERVE_ASSET || false,
    serveAssetsURL: process.env.vormir_SERVER_ASSET_URL || "/static"
};

/**
 * vormir assets path.
 */
export const ASSETS_PATH = path.join(__dirname, "../public");

export const JS_TAG_TEMPLATE = {
    "service-worker": filepath =>
        `<link rel="preconnect" data-vormir-sw-script src="${filepath}" />`,
    default: filepath => `<script type="text/javascript" src="${filepath}"></script>`
};
