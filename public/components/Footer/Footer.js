"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("@/components/Typography/Text"));
const react_1 = __importDefault(require("react"));
const Footer = () => {
    return (react_1.default.createElement("div", { className: 'footer' },
        react_1.default.createElement(Text_1.default, { text: '\u24D2 Google 2021' }),
        react_1.default.createElement(Text_1.default, { text: 'version: 0.1.0' })));
};
exports.default = Footer;
