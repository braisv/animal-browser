"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("@/components/Typography/Text"));
const react_1 = __importDefault(require("react"));
const Title = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Text_1.default, { text: 'Agile Content', bold: true }),
        react_1.default.createElement(Text_1.default, { text: 'Frontend Test' })));
};
exports.default = Title;
