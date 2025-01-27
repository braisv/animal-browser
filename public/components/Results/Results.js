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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const faker_1 = require("@faker-js/faker");
const ListItem_1 = __importDefault(require("@/components/Results/ListItem"));
const Loading_1 = __importDefault(require("@/components/Results/Loading"));
const NoResult_1 = __importDefault(require("@/components/Results/NoResult"));
const SelectedItem_1 = __importDefault(require("@/components/Results/SelectedItem"));
const getImage = (category) => faker_1.faker.image.avatarGitHub();
const getUrl = () => faker_1.faker.internet.url();
const getText = () => faker_1.faker.lorem.sentences();
const Results = () => {
    const params = (0, react_router_dom_1.useParams)();
    const { inputText } = params;
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [listItems, setListItems] = (0, react_1.useState)([]);
    const [selectedItem, setSelectedItem] = (0, react_1.useState)();
    const loadAnimalList = (0, react_1.useCallback)(() => {
        if (inputText && inputText in faker_1.faker.animal) {
            const fakerAnimal = faker_1.faker.animal;
            const animals = faker_1.faker.helpers.multiple(() => fakerAnimal[inputText](), { count: 20 });
            const data = animals.map((item, index) => {
                const animalData = {
                    id: index + 1,
                    url: getUrl(),
                    title: item,
                    description: getText(),
                    image: getImage(inputText),
                };
                return ({
                    ...animalData,
                    cb: () => setSelectedItem(animalData)
                });
            });
            setListItems(data || []);
        }
        else {
            setListItems([]);
        }
        setLoading(false);
    }, [inputText]);
    (0, react_1.useEffect)(() => {
        if (inputText) {
            setLoading(true);
            setTimeout(loadAnimalList, 3000);
        }
        else {
            setListItems([]);
            setLoading(false);
        }
        return () => {
            setSelectedItem(undefined);
        };
    }, [inputText]);
    if (loading) {
        return [...new Array(20)].map(Loading_1.default);
    }
    return (react_1.default.createElement("div", { className: 'results' },
        listItems.length ? react_1.default.createElement("ul", null, listItems.map(ListItem_1.default)) : react_1.default.createElement(NoResult_1.default, null),
        react_1.default.createElement(SelectedItem_1.default, { animalItem: selectedItem, setSelectedItem: setSelectedItem })));
};
exports.default = Results;
