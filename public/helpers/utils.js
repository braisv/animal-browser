"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHome = void 0;
const react_router_dom_1 = require("react-router-dom");
const isHome = () => {
    const { pathname } = (0, react_router_dom_1.useLocation)();
    return pathname === '/';
};
exports.isHome = isHome;
