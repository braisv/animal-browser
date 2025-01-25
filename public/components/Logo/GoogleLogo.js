"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const googleLogo_svg_1 = require("../../assets/svg/googleLogo.svg");
const utils_1 = require("#/helpers/utils");
const GoogleLogo = () => {
    const className = `logo ${(0, utils_1.isHome)() ? '' : 'logo--small'}`;
    const viewBox = (0, utils_1.isHome)() ? '' : '0 0 285 75';
    const height = (0, utils_1.isHome)() ? 92 : 32;
    const width = (0, utils_1.isHome)() ? 272 : 92;
    const props = { className, viewBox, height, width };
    return (react_1.default.createElement(googleLogo_svg_1.ReactComponent, { ...props }));
};
exports.default = GoogleLogo;
