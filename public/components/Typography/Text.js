"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Text = ({ bold, text }) => {
    return (react_1.default.createElement("span", { className: 'typography--regular', style: { fontWeight: bold ? 'bold' : '400' } }, text));
};
exports.default = Text;
