"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GoogleLogo_1 = __importDefault(require("#/components/Logo/GoogleLogo"));
const Form_1 = __importDefault(require("#/components/SearchForm/Form"));
const react_1 = __importDefault(require("react"));
const SearchForm = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(GoogleLogo_1.default, null),
        react_1.default.createElement(Form_1.default, null)));
};
exports.default = SearchForm;
