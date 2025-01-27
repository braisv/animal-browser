"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("@/components/Typography/Text"));
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const NoResult = () => {
    const params = (0, react_router_dom_1.useParams)();
    const { inputText } = params;
    return (react_1.default.createElement("div", { className: 'no-result' },
        inputText && react_1.default.createElement("div", { className: "no-result--line" },
            react_1.default.createElement(Text_1.default, { text: 'No results found for' }),
            react_1.default.createElement(Text_1.default, { bold: true, text: ` '${inputText}'` })),
        react_1.default.createElement("div", { className: "no-result--line" },
            react_1.default.createElement(Text_1.default, { text: 'Try looking for: ' }),
            react_1.default.createElement(Text_1.default, { bold: true, text: 'insect, fish, horse, crocodilia, bear, cetacean, cow, lion rabbit, cat, snake, dog, bird.' }))));
};
exports.default = NoResult;
