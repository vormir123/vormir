/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference types="react-helmet" />
/// <reference types="react-intl" />
/// <reference types="react-redux" />
/// <reference types="react-router" />
/// <reference types="react-router-dom" />
/// <reference types="redux" />
/// <reference types="enzyme" />

declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: "development" | "staging" | "production" | "test",
        PUBLIC_URL: string
    }
}

declare module "*.bmp" {
    const src: string;
    export default src;
}

declare module "*.gif" {
    const src: string;
    export default src;
}

declare module "*.jpg" {
    const src: string;
    export default src;
}

declare module "*.jpeg" {
    const src: string;
    export default src;
}

declare module "*.png" {
    const src: string;
    export default src;
}

declare module "*.svg" {
    import * as React from "react";

    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;

    const src: string;
    export default src;
}

declare module '*.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.sass' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.less" {
    const classes: { [key: string]: string };
    export default classes;
}

//vormir Jest Global Function Declaration
declare const shallow: Function;
declare const render: Function;
declare const mount: Function;
declare const mountWithIntl: Function;
declare const shallowWithIntl: Function;
declare const renderWithIntl: Function;
declare const shallowToJson: Function;
declare const renderToJson: Function;
declare const mountToJson: Function;

//vormir Core Declaration
declare module "@vormir/intl" {
    import reactIntl = ReactIntl;
    export = reactIntl;
}

declare module "@vormir/helmet" {
    import reactHelmet from "react-helmet";

    export default reactHelmet;
}

declare module "@vormir/router" {
    export {
        BrowserRouter,
        HashRouter,
        NavLink,
        Prompt,
        MemoryRouter,
        Route,
        Router,
        StaticRouter,
        Switch,
        withRouter,
        matchPath
    } from "react-router-dom";
    export { default as Redirect } from "@vormir/component/redirect";
    export { default as Link } from "@vormir/component/link";    
}

declare module "@vormir/route" {
    type ModuleType = { [key: string]: string }
    type RouteType = {
        name: string,
        path: string,
        exact?: boolean,
        disabled?: boolean
        component: ModuleType
    }

    const routes: Array<RouteType>
    export default routes
}

declare module "@vormir/client" {
    const initClient: Function;
    export default initClient;
}

declare module "@vormir/server" {
    const initServer: Function;
    export default initServer;
}

declare module "@vormir/redux" {
    export * from "redux";
    export * from "react-redux";
}

//vormir Util Declaration
declare module "@vormir/util/cookie" {
    export const getCookie: Function;
}

declare module "@vormir/util/graphql" {
    export const mergeApolloConfig: Function;
    export const combineLinkStates: Function;
}

declare module "@vormir/util/json" {
    export const injectParam: Function;
    export const bindParams: Function;
}

declare module "@vormir/util/location" {
    export const findActiveRoute: Function;
    export const isPushEnabled: Function;
    export const getURLfromLocation: Function;
}

declare module "@vormir/util/redux" {
    export const mergeReduxState: Function;
    export const typeGenerator: Function;
    export const reducerGenerator: Function;
    export const actionCreatorGenerator: Function;
}

declare module "@vormir/util/security" {
    export const deserializeJSON: Function;
    export const serializeJSON: Function;
    export const escapeHtml: Function;
    export const escapeHtmlQueryObject: Function;
}

declare module "@vormir/util/string" {
    export const camelToKebabCase: Function;
}

declare module "@vormir/util/typecheck" {
    export const isArray: Function;
    export const isString: Function;
    export const isObject: Function;
    export const isNumber: Function;
    export const isFunction: Function;
}


//vormir Component declaration
declare module "@vormir/component/async-component" {
    const component: Function;
    export default component;
}

declare module "@vormir/component/async-loader" {
    const component: Function;
    export default component;
}

declare module "@vormir/component/error-boundary" {
    import * as React from "react";

    export const withErrorBoundary: Function;
    const component: React.ReactNode;
    export default component;
}

declare module "@vormir/component/http-status" {
    import * as React from "react";

    const component: React.ReactNode;
    export default component;
}

declare module "@vormir/component/link" {
    import * as React from "react";

    const component: React.ReactNode;
    export default component;
}

declare module "@vormir/component/provider" {
    import * as React from "react";

    const component: React.ReactNode;
    export default component;
}

declare module "@vormir/component/redirect" {
    const component: Route;
    export default component;
}

// These modules is an alias from react-intl/locale-data
declare module "@vormir/locale-data/af" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/agq" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ak" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/am" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ar" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/as" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/asa" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ast" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/az" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/bas" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/be" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/bem" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/bez" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/bg" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/bh" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/bm" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/bn" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/bo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/br" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/brx" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/bs" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ca" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ce" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/cgg" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/chr" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ckb" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/cs" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/cu" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/cy" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/da" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/dav" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/de" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/dje" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/dsb" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/dua" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/dv" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/dyo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/dz" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ebu" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ee" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/el" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/en" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/eo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/es" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/et" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/eu" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ewo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/fa" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ff" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/fi" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/fil" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/fo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/fr" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/fur" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/fy" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ga" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/gd" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/gl" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/gsw" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/gu" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/guw" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/guz" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/gv" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ha" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/haw" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/he" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/hi" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/hr" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/hsb" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/hu" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/hy" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/id" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ig" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ii" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/in" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/is" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/it" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/iu" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/iw" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ja" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/jbo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/jgo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ji" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/jmc" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/jv" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/jw" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ka" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/kab" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/kaj" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/kam" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/kcg" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/kde" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/kea" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/khq" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ki" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/kk" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/kkj" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/kl" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/kln" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/km" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/kn" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ko" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/kok" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ks" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ksb" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ksf" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ksh" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ku" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/kw" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ky" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/lag" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/lb" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/lg" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/lkt" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ln" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/lo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/lrc" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/lt" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/lu" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/luo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/luy" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/lv" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/mas" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/mer" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/mfe" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/mg" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/mgh" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/mgo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/mk" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ml" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/mn" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/mo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/mr" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ms" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/mt" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/mua" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/my" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/mzn" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/nah" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/naq" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/nb" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/nd" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ne" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/nl" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/nmg" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/nn" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/nnh" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/no" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/nqo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/nr" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/nso" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/nus" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ny" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/nyn" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/om" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/or" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/os" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/pa" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/pap" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/pl" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/prg" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ps" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/pt" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/qu" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/rm" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/rn" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ro" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/rof" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ru" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/rw" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/rwk" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/sah" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/saq" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/sbp" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/sdh" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/se" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/seh" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ses" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/sg" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/sh" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/shi" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/si" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/sk" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/sl" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/sma" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/smi" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/smj" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/smn" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/sms" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/sn" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/so" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/sq" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/sr" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ss" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ssy" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/st" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/sv" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/sw" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/syr" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ta" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/te" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/teo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/th" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ti" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/tig" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/tk" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/tl" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/tn" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/to" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/tr" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ts" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/twq" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/tzm" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ug" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/uk" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ur" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/uz" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/vai" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/ve" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/vi" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/vo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/vun" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/wa" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/wae" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/wo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/xh" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/xog" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/yav" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/yi" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/yo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/zgh" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/zh" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "@vormir/locale-data/zu" {
    const data: ReactIntl.LocaleData;
    export = data;
}
