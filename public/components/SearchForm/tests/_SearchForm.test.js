"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const Home_1 = __importDefault(require("@/pages/Home"));
const react_router_dom_1 = require("react-router-dom");
describe('SearchForm', () => {
    it('renders in homepage', () => {
        (0, react_2.render)(react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(Home_1.default, null)));
        const buscarButton = react_2.screen.getByText(/'Buscar'/i);
        expect(buscarButton).toBeInTheDocument();
    });
});
