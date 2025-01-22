"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const Layout_1 = __importDefault(require("#/components/Layout/Layout"));
const Home_1 = __importDefault(require("#/pages/Home"));
const NotFound_1 = __importDefault(require("#/pages/NotFound"));
const Search_1 = __importDefault(require("#/pages/Search"));
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const routes = [
    {
        path: '/',
        element: react_1.default.createElement(Layout_1.default, null),
        children: [
            {
                index: true,
                element: react_1.default.createElement(Home_1.default, null),
            },
            {
                path: 'search',
                element: react_1.default.createElement(Search_1.default, null),
            },
            {
                path: 'search/:inputText',
                element: react_1.default.createElement(Search_1.default, null),
            }
        ]
    },
    {
        path: '/*',
        element: react_1.default.createElement(NotFound_1.default, null),
    }
];
exports.router = (0, react_router_dom_1.createHashRouter)(routes);
