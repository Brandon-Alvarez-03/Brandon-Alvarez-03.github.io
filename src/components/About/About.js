"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const Github_1 = __importDefault(require("./Github"));
const Techstack_1 = __importDefault(require("./Techstack"));
const AboutCard_1 = __importDefault(require("./AboutCard"));
const About = () => {
    return (react_1.default.createElement(react_bootstrap_1.Container, { fluid: true, className: "about-section" },
        react_1.default.createElement(react_bootstrap_1.Container, null,
            react_1.default.createElement(react_bootstrap_1.Row, { style: { justifyContent: "center", padding: "10px" } },
                react_1.default.createElement(react_bootstrap_1.Col, { md: 12, style: {
                        justifyContent: "center",
                        paddingTop: "30px",
                        paddingBottom: "50px",
                    } },
                    react_1.default.createElement("h1", { style: { fontSize: "2.1em", paddingBottom: "20px" } }, "About Me!"),
                    react_1.default.createElement(AboutCard_1.default, null))),
            react_1.default.createElement("h1", { className: "project-heading" },
                "Professional ",
                react_1.default.createElement("strong", { className: "purple" }, "Skillset ")),
            react_1.default.createElement(Techstack_1.default, null),
            react_1.default.createElement(Github_1.default, null))));
};
exports.default = About;
