"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Search = () => {
    const params = (0, react_router_dom_1.useParams)();
    const { inputText } = params;
    console.log({ params });
    return (react_1.default.createElement("div", { className: 'search' },
        "Search: ",
        inputText));
};
exports.default = Search;
