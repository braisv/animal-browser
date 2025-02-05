"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const apps_svg_1 = require("../../../assets/svg/apps.svg");
const Title_1 = __importDefault(require("@/components/Header/NavBar/Title"));
const SearchForm_1 = __importDefault(require("@/components/SearchForm/SearchForm"));
const utils_1 = require("@/helpers/utils");
const faker_1 = require("@faker-js/faker");
const randomAvatar = faker_1.faker.image.avatar();
const NavBar = () => {
    return (react_1.default.createElement("nav", { className: 'navbar' },
        react_1.default.createElement("div", { className: 'navbar--left' }, (0, utils_1.isHome)() ? react_1.default.createElement(Title_1.default, null) : react_1.default.createElement(SearchForm_1.default, null)),
        react_1.default.createElement("div", { className: 'navbar--right' },
            react_1.default.createElement(apps_svg_1.ReactComponent, { className: 'icon', height: '24px', width: '24px' }),
            react_1.default.createElement("img", { src: randomAvatar, alt: 'Avatar', className: 'avatar' }))));
};
exports.default = NavBar;
