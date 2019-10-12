import AsyncLoader from "@vormir/component/async-loader";

const Welcome = AsyncLoader({ component: import("./welcome") });

export default Welcome;
