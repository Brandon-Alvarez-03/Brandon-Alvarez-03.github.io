"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const ProjectCards_1 = __importDefault(require("./ProjectCards"));
const boogeyman_png_1 = __importDefault(require("../../assets/boogeyman.png"));
const Breddit_png_1 = __importDefault(require("../../assets/Breddit.png"));
const PetLyfe_png_1 = __importDefault(require("../../assets/PetLyfe.png"));
const Projects = () => {
    return (react_1.default.createElement(react_bootstrap_1.Container, { fluid: true, className: "project-section" },
        react_1.default.createElement(react_bootstrap_1.Container, null,
            react_1.default.createElement("h1", { className: "project-heading" },
                "My Recent ",
                react_1.default.createElement("strong", { className: "purple" }, "Works ")),
            react_1.default.createElement("p", { style: { color: "grey" } }, "Here are my recent projects."),
            react_1.default.createElement(react_bootstrap_1.Row, { style: { justifyContent: "center", paddingBottom: "10px" } },
                react_1.default.createElement(react_bootstrap_1.Col, { md: 4, className: "project-card" },
                    react_1.default.createElement(ProjectCards_1.default, { imgPath: boogeyman_png_1.default, isBlog: false, title: "The Boogeyman", description: "A visually stunning and highly engaging front-end game built with Vanilla JavaScript, HTML, CSS, and Canvas. The combination of these technologies allows for smooth gameplay and visually impressive graphics, making it a truly enjoyable experience for players", ghLink: "https://github.com/Brandon-Alvarez-03/The-Boogeyman-Front-End-Game", demoLink: "https://the-boogeyman.netlify.app/" })),
                react_1.default.createElement(react_bootstrap_1.Col, { md: 4, className: "project-card" },
                    react_1.default.createElement(ProjectCards_1.default, { imgPath: Breddit_png_1.default, isBlog: false, title: "Breddit: the Better Reddit", description: "Social media platform inspired by Reddit and given a unique, bread-themed twist! This full-featured site was developed using React.js and React-Bootstrap on the front-end, and a Python/Django back-end to enable complete CRUD functionality", ghLink: "https://github.com/SEI-Buffleheads/reddit-clone", demoLink: "https://breddit.netlify.app/" })),
                react_1.default.createElement(react_bootstrap_1.Col, { md: 4, className: "project-card" },
                    react_1.default.createElement(ProjectCards_1.default, { imgPath: PetLyfe_png_1.default, isBlog: false, title: "PetLyfe: Pet Style Ecommerce Site", description: "Ecommerce site for stylish pet products! Built with React.js for the front-end, Express.js, MongoDB, and Restful APIs for the back-end, to create a user-friendly and efficient shopping experience. Whether you're looking to spoil your furry friend or simply browse our selection", ghLink: "https://github.com/Brandon-Alvarez-03/pet-style-mern", demoLink: "https://pet-lyfe.netlify.app/" }))))));
};
exports.default = Projects;
