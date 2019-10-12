import React from "react";
import Helmet from "@vormir/helmet";
import { FormattedMessage, injectIntl } from "@vormir/intl";
import AsyncComponent from "@vormir/component/async-component";

import style from "./welcome.css";
import vormir from "./vormir.png";

const Welcome = ({ intl }) => (
    <div className={style.welcome_page}>
        <Helmet>
            <title>Welcome to vormir!</title>
        </Helmet>
        <div className={style.welcome_page__content}>
            <img className={style.welcome_page__toped} src={vormir} alt="vormir" />
            <h1>Welcome, let&#39;s have some vormir!</h1>
            <FormattedMessage
                id="welcome_page__description1"
                values={{
                    React: (
                        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                            React
                        </a>
                    ),
                    Redux: (
                        <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
                            Redux
                        </a>
                    ),
                    GraphQL: (
                        <a href="https://graphql.org/" target="_blank" rel="noopener noreferrer">
                            GraphQL
                        </a>
                    )
                }}
            />
            <p>
                <FormattedMessage
                    id="welcome_page__description2"
                    values={{
                        Source: <b>src/page/welcome.js</b>,
                        Documentation: (
                            <a
                                href="https://vormir.io"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                documentation
                            </a>
                        )
                    }}
                />
            </p>
            <div className={style.welcome_page__locale_switcher_container}>
                <a
                    className={`${style.welcome_page__locale_switcher}${
                        intl.locale === "en" ? " active" : ""
                    }`}
                    href="/?lang=en"
                >
                    English
                </a>
                <a
                    className={`${style.welcome_page__locale_switcher}${
                        intl.locale === "id" ? " active" : ""
                    }`}
                    href="/?lang=id"
                >
                    Indonesian
                </a>
            </div>
        </div>
    </div>
);

export default AsyncComponent(module, injectIntl(Welcome));
