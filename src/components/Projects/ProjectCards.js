"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Card_1 = __importDefault(require("react-bootstrap/Card"));
const Button_1 = __importDefault(require("react-bootstrap/Button"));
const cg_1 = require("react-icons/cg");
const bs_1 = require("react-icons/bs");
const ProjectCards = (props) => {
    return (react_1.default.createElement(Card_1.default, { className: "project-card-view" },
        react_1.default.createElement(Card_1.default.Img, { variant: "top", src: props.imgPath, alt: "card-img", style: { minHeight: "158px" } }),
        react_1.default.createElement(Card_1.default.Body, null,
            react_1.default.createElement(Card_1.default.Title, null, props.title),
            react_1.default.createElement(Card_1.default.Text, { style: { textAlign: "justify", minHeight: "180px" } }, props.description),
            react_1.default.createElement(Button_1.default, { variant: "primary", href: props.ghLink, target: "_blank" },
                react_1.default.createElement(bs_1.BsGithub, null),
                " \u00A0",
                props.isBlog ? "Blog" : "GitHub"),
            "\n",
            "\n",
            !props.isBlog && props.demoLink && (react_1.default.createElement(Button_1.default, { className: "demo-btn", variant: "primary", href: props.demoLink, target: "_blank" },
                react_1.default.createElement(cg_1.CgWebsite, null),
                " \u00A0",
                "Demo")))));
};
exports.default = ProjectCards;
