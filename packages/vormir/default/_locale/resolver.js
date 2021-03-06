const resolver = lang => {
    switch (lang) {
        case "id":
            return Promise.all([
                import(/* webpackChunkName: "locale-id" */ "@vormir/locale-data/id"),
                import(/* webpackChunkName: "message-id" */ "@@BUILD_LOCALE_PATH@@/id.json")
            ]);
        case "en":
        default:
            return Promise.all([
                import(/* webpackChunkName: "locale-en" */ "@vormir/locale-data/en"),
                import(/* webpackChunkName: "message-en" */ "@@BUILD_LOCALE_PATH@@/en.json")
            ]);
    }
};

export default resolver;
