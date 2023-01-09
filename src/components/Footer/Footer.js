"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const ai_1 = require("react-icons/ai");
const fa_1 = require("react-icons/fa");
function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (react_1.default.createElement(react_bootstrap_1.Container, { fluid: true, className: "footer" },
        react_1.default.createElement(react_bootstrap_1.Row, null,
            react_1.default.createElement(react_bootstrap_1.Col, { md: "4", className: "footer-copywright" },
                react_1.default.createElement("h3", null,
                    "Copyright \u00A9 ",
                    year,
                    " Brandon Alvarez")),
            react_1.default.createElement(react_bootstrap_1.Col, { md: "4", className: "footer-body" },
                react_1.default.createElement("ul", { className: "footer-icons" },
                    react_1.default.createElement("li", { className: "social-icons" },
                        react_1.default.createElement("a", { href: "https://github.com/Brandon-Alvarez-03", style: { color: "white" }, target: "_blank", rel: "noopener noreferrer" },
                            react_1.default.createElement(ai_1.AiFillGithub, null))),
                    react_1.default.createElement("li", { className: "social-icons" },
                        react_1.default.createElement("a", { href: "https://www.linkedin.com/in/brandon-alvarez-03balv/", style: { color: "white" }, target: "_blank", rel: "noopener noreferrer" },
                            react_1.default.createElement(fa_1.FaLinkedinIn, null))))))));
}
exports.default = Footer;
