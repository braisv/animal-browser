"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NavBar_1 = __importDefault(require("@/components/Header/NavBar/NavBar"));
const react_1 = __importDefault(require("react"));
const Header = () => {
    return (react_1.default.createElement("header", { className: 'header' },
        react_1.default.createElement(NavBar_1.default, null)));
};
exports.default = Header;
