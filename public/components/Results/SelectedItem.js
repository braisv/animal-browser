"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("@/components/Typography/Text"));
const react_1 = __importDefault(require("react"));
const SelectedItem = ({ animalItem, setSelectedItem, }) => {
    const onClick = () => {
        setSelectedItem(undefined);
    };
    return animalItem ? (react_1.default.createElement("div", { className: 'selected-item--container', onClick: onClick },
        react_1.default.createElement("div", { className: 'selected-item' },
            react_1.default.createElement("img", { src: animalItem.image, alt: '' }),
            react_1.default.createElement(Text_1.default, { size: 'small', text: animalItem.url }),
            react_1.default.createElement(Text_1.default, { size: 'big', bold: true, text: animalItem.title }),
            react_1.default.createElement(Text_1.default, { text: animalItem.description })))) : (react_1.default.createElement("div", { className: 'no-selected-item' }));
};
exports.default = SelectedItem;
