"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Text = ({ bold, text, title, size = 'regular' }) => {
    return (react_1.default.createElement("span", { className: `typography--${size}`, style: { fontWeight: bold ? 'bold' : '400', color: title ? 'blue' : '' } }, text));
};
exports.default = Text;
