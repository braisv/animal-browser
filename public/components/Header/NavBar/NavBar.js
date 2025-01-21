"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const apps_svg_1 = require("../../../assets/icons/apps.svg");
const Text_1 = __importDefault(require("#/components/Typography/Text"));
const NavBar = () => {
    return (react_1.default.createElement("nav", { className: 'navbar' },
        react_1.default.createElement("div", { className: 'navbar--left' },
            react_1.default.createElement(Text_1.default, { text: 'Agile Content', bold: true }),
            react_1.default.createElement(Text_1.default, { text: 'Frontend Test' })),
        react_1.default.createElement("div", { className: 'navbar--right' },
            react_1.default.createElement(apps_svg_1.ReactComponent, { className: 'icon', height: '24px', width: '24px' }),
            react_1.default.createElement("div", { className: "avatar" }))));
};
exports.default = NavBar;
