"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const ScrollToTop = () => {
    const { pathname } = (0, react_router_dom_1.useLocation)();
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};
exports.default = ScrollToTop;
