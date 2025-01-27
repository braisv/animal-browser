"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Footer_1 = __importDefault(require("@/components/Footer/Footer"));
const Header_1 = __importDefault(require("@/components/Header/Header"));
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Layout = () => {
    return (react_1.default.createElement("div", { className: "app-container" },
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement(react_router_dom_1.Outlet, null),
        react_1.default.createElement(Footer_1.default, null)));
};
exports.default = Layout;
