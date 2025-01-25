"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const search_svg_1 = require("../../assets/svg/search.svg");
const clear_svg_1 = require("../../assets/svg/clear.svg");
const react_router_dom_1 = require("react-router-dom");
const utils_1 = require("#/helpers/utils");
const Form = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { inputText } = (0, react_router_dom_1.useParams)();
    const [inputValue, setInputValue] = (0, react_1.useState)(inputText ?? '');
    const inputRef = (0, react_1.useRef)(null);
    const onSubmit = (event) => {
        event.preventDefault();
        navigate(`/search/${inputValue}`);
    };
    const onChange = () => {
        setInputValue(inputRef.current?.value ?? inputValue);
    };
    (0, react_1.useEffect)(() => {
        if ((0, utils_1.isHome)()) {
            inputRef.current?.focus();
        }
    }, []);
    return (react_1.default.createElement("form", { className: `form ${(0, utils_1.isHome)() ? '' : 'form--small'}`, onSubmit: onSubmit },
        react_1.default.createElement("div", { className: "input" },
            react_1.default.createElement(search_svg_1.ReactComponent, { className: "input--icon" }),
            react_1.default.createElement("input", { className: 'input--box', type: "text", ref: inputRef, defaultValue: inputValue, onChange: onChange }),
            inputRef.current?.value && react_1.default.createElement(clear_svg_1.ReactComponent, { className: "input--icon" })),
        (0, utils_1.isHome)() && react_1.default.createElement("button", { className: "button", type: "submit" }, "Buscar")));
};
exports.default = Form;
