"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Search = () => {
    const { inputText } = (0, react_router_dom_1.useParams)();
    return (react_1.default.createElement("div", null,
        "Search: ",
        inputText));
};
exports.default = Search;
