"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SearchForm_1 = __importDefault(require("@/components/SearchForm/SearchForm"));
const Home = () => {
    return (react_1.default.createElement("div", { className: 'home' },
        react_1.default.createElement(SearchForm_1.default, null)));
};
exports.default = Home;
