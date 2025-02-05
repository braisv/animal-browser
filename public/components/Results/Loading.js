"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Loading = () => {
    return (react_1.default.createElement("div", { className: 'loading' },
        react_1.default.createElement("div", { className: 'loading--bar-1' }),
        react_1.default.createElement("div", { className: 'loading--bar-2' }),
        react_1.default.createElement("div", { className: 'loading--bar-3' })));
};
exports.default = Loading;
