"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("#/components/Typography/Text"));
const react_1 = __importDefault(require("react"));
const ListItem = ({ id, title, description, url, cb }) => {
    return (react_1.default.createElement("li", { key: id, className: 'list-item' },
        react_1.default.createElement(Text_1.default, { size: 'small', text: url }),
        react_1.default.createElement("div", { onClick: cb },
            react_1.default.createElement(Text_1.default, { size: 'big', bold: true, title: true, text: title })),
        react_1.default.createElement(Text_1.default, { text: description })));
};
exports.default = ListItem;
