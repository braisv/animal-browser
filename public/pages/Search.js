"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Results_1 = __importDefault(require("@/components/Results/Results"));
const Search = () => {
    return (react_1.default.createElement("div", { className: 'search' },
        react_1.default.createElement(Results_1.default, null)));
};
exports.default = Search;
