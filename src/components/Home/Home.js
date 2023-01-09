"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const Home2_1 = __importDefault(require("./Home2"));
const Type_1 = __importDefault(require("./Type"));
function Home() {
    return (react_1.default.createElement("section", null,
        react_1.default.createElement(react_bootstrap_1.Container, { fluid: true, className: "home-section", id: "home" },
            react_1.default.createElement(react_bootstrap_1.Container, { className: "home-content" },
                react_1.default.createElement(react_bootstrap_1.Row, null,
                    react_1.default.createElement(react_bootstrap_1.Col, { md: 12, className: "home-header" },
                        react_1.default.createElement("h1", { style: { paddingBottom: 15 }, className: "heading" },
                            "Hello There!",
                            " ",
                            react_1.default.createElement("span", { className: "wave", role: "img", "aria-labelledby": "wave" }, "\uD83D\uDC4B\uD83C\uDFFB")),
                        react_1.default.createElement("h1", { className: "heading-name" },
                            "I'm",
                            react_1.default.createElement("strong", { className: "main-name" }, " Brandon Alvarez ")),
                        react_1.default.createElement("div", { style: { padding: 50, textAlign: "left" } },
                            react_1.default.createElement(Type_1.default, null)))))),
        react_1.default.createElement(Home2_1.default, null)));
}
exports.default = Home;
