"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const ai_1 = require("react-icons/ai");
const fa_1 = require("react-icons/fa");
function Home2() {
    return (react_1.default.createElement(react_bootstrap_1.Container, { fluid: true, className: "home-about-section", id: "about" },
        react_1.default.createElement(react_bootstrap_1.Container, null,
            react_1.default.createElement(react_bootstrap_1.Row, null,
                react_1.default.createElement(react_bootstrap_1.Col, { md: 12, className: "home-about-description" },
                    react_1.default.createElement("p", { className: "home-about-body" },
                        "As a software engineer with a strong foundation in technology and engineering, I have a passion for programming that was ignited during my computer solutions course in college. Although I wasn't initially the top performer in the class, I used that as motivation to push myself harder and improve my skills. Now, I am confident in my abilities and eager to continue learning and growing in my career.",
                        react_1.default.createElement("br", null),
                        react_1.default.createElement("br", null),
                        "I currently work with",
                        react_1.default.createElement("i", null,
                            react_1.default.createElement("b", { className: "gray" },
                                " ",
                                "Javascript, Python, Java, React.js, HTML, CSS",
                                " "))))),
            react_1.default.createElement(react_bootstrap_1.Row, null,
                react_1.default.createElement(react_bootstrap_1.Col, { md: 12, className: "home-about-social" },
                    react_1.default.createElement("h2", null, "CONNECT WITH ME"),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("ul", { className: "home-about-social-links" },
                        react_1.default.createElement("li", { className: "social-icons" },
                            react_1.default.createElement("a", { href: "https://github.com/Brandon-Alvarez-03", target: "_blank", rel: "noreferrer", className: "icon-color  home-social-icons" },
                                react_1.default.createElement(ai_1.AiFillGithub, null))),
                        react_1.default.createElement("li", { className: "social-icons" },
                            react_1.default.createElement("a", { href: "https://www.linkedin.com/in/brandon-alvarez-03balv/", target: "_blank", rel: "noreferrer", className: "icon-color  home-social-icons" },
                                react_1.default.createElement(fa_1.FaLinkedinIn, null)))))))));
}
exports.default = Home2;
