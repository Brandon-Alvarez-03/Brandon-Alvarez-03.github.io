"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Nav_1 = __importDefault(require("react-bootstrap/Nav"));
const cg_1 = require("react-icons/cg");
const full_name_png_1 = __importDefault(require("../../assets/full_name.png"));
const Button_1 = __importDefault(require("react-bootstrap/Button"));
const ai_1 = require("react-icons/ai");
require("./Nav.css");
const cg_2 = require("react-icons/cg");
function NavBar() {
    return (react_1.default.createElement("div", { className: "navbar" },
        react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
            react_1.default.createElement("img", { src: full_name_png_1.default, className: "logo initials", alt: "logo", width: "100px" })),
        react_1.default.createElement("div", { className: "links-container" },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: "link" },
                react_1.default.createElement(ai_1.AiOutlineHome, { style: { marginBottom: "2px" } }),
                react_1.default.createElement("p", null, "Home")),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/about", className: "link" },
                react_1.default.createElement(ai_1.AiOutlineUser, { style: { marginBottom: "2px" } }),
                react_1.default.createElement("p", null, "About")),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/projects", className: "link" },
                react_1.default.createElement(ai_1.AiTwotoneThunderbolt, { style: { marginBottom: "2px" } }),
                react_1.default.createElement("p", null, "Projects")),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/resume", className: "link" },
                react_1.default.createElement(cg_2.CgFileDocument, { style: { marginBottom: "2px" } }),
                react_1.default.createElement("p", null, "Resume")),
            react_1.default.createElement(Nav_1.default.Link, { href: "https://github.com/Brandon-Alvarez-03", target: "_blank", rel: "noreferrer", className: "git-btn" },
                react_1.default.createElement(Button_1.default, { className: "git-btn-inner" },
                    react_1.default.createElement(ai_1.AiFillStar, { style: { marginTop: "3px" } }),
                    react_1.default.createElement(cg_1.CgGitFork, { style: { marginTop: "3px" } }))))));
}
exports.default = NavBar;
