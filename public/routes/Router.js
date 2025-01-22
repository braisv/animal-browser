"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const Layout_1 = __importDefault(require("#/components/Layout/Layout"));
const Home_1 = __importDefault(require("#/pages/Home"));
const Result_1 = __importDefault(require("#/pages/Result"));
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const element = (0, react_router_dom_1.createRoutesFromElements)(react_1.default.createElement(react_router_dom_1.Routes, null,
    react_1.default.createElement(react_router_dom_1.Route, { path: "/homepage", element: react_1.default.createElement(Layout_1.default, null) },
        react_1.default.createElement(react_router_dom_1.Route, { index: true, element: react_1.default.createElement(Home_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/search/:id", element: react_1.default.createElement(Result_1.default, null) }))));
exports.router = (0, react_router_dom_1.createBrowserRouter)(element);
