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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Navbar_1 = __importDefault(require("react-bootstrap/Navbar"));
const Nav_1 = __importDefault(require("react-bootstrap/Nav"));
const Container_1 = __importDefault(require("react-bootstrap/Container"));
const full_name_png_1 = __importDefault(require("../../assets/full_name.png"));
const Button_1 = __importDefault(require("react-bootstrap/Button"));
const react_router_dom_1 = require("react-router-dom");
const cg_1 = require("react-icons/cg");
const ai_1 = require("react-icons/ai");
const cg_2 = require("react-icons/cg");
function NavBar() {
    const [expand, updateExpanded] = (0, react_1.useState)(false);
    const [navColour, updateNavbar] = (0, react_1.useState)(false);
    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        }
        else {
            updateNavbar(false);
        }
    }
    window.addEventListener("scroll", scrollHandler);
    return (react_1.default.createElement(Navbar_1.default, { expanded: expand, fixed: "top", expand: "md", className: navColour ? "sticky" : "navbar" },
        react_1.default.createElement(Container_1.default, null,
            react_1.default.createElement(Navbar_1.default.Brand, { href: "/", className: "d-flex" },
                react_1.default.createElement("img", { src: full_name_png_1.default, className: "img-fluid logo", alt: "brand" })),
            react_1.default.createElement(Navbar_1.default.Toggle, { "aria-controls": "responsive-navbar-nav", onClick: () => {
                    updateExpanded(expand ? false : "expanded");
                } },
                react_1.default.createElement("span", null),
                react_1.default.createElement("span", null),
                react_1.default.createElement("span", null)),
            react_1.default.createElement(Navbar_1.default.Collapse, { id: "responsive-navbar-nav" },
                react_1.default.createElement(Nav_1.default, { className: "ms-auto", defaultActiveKey: "#home" },
                    react_1.default.createElement(Nav_1.default.Item, null,
                        react_1.default.createElement(Nav_1.default.Link, { as: react_router_dom_1.Link, to: "/", onClick: () => updateExpanded(false) },
                            react_1.default.createElement(ai_1.AiOutlineHome, { style: { marginBottom: "2px" } }),
                            " Home")),
                    react_1.default.createElement(Nav_1.default.Item, null,
                        react_1.default.createElement(Nav_1.default.Link, { as: react_router_dom_1.Link, to: "/about", onClick: () => updateExpanded(false) },
                            react_1.default.createElement(ai_1.AiOutlineUser, { style: { marginBottom: "2px" } }),
                            " About")),
                    react_1.default.createElement(Nav_1.default.Item, null,
                        react_1.default.createElement(Nav_1.default.Link, { as: react_router_dom_1.Link, to: "/project", onClick: () => updateExpanded(false) },
                            react_1.default.createElement(ai_1.AiOutlineFundProjectionScreen, { style: { marginBottom: "2px" } }),
                            " ",
                            "Projects")),
                    react_1.default.createElement(Nav_1.default.Item, null,
                        react_1.default.createElement(Nav_1.default.Link, { as: react_router_dom_1.Link, to: "/resume", onClick: () => updateExpanded(false) },
                            react_1.default.createElement(cg_2.CgFileDocument, { style: { marginBottom: "2px" } }),
                            " Resume")),
                    react_1.default.createElement(Nav_1.default.Item, { className: "fork-btn" },
                        react_1.default.createElement(Button_1.default, { href: "https://github.com/Brandon-Alvarez-03", target: "_blank", className: "fork-btn-inner" },
                            react_1.default.createElement(cg_1.CgGitFork, { style: { fontSize: "1.2em" } }),
                            " ",
                            react_1.default.createElement(ai_1.AiFillStar, { style: { fontSize: "1.1em" } }))))))));
}
exports.default = NavBar;
