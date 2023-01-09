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
const react_bootstrap_1 = require("react-bootstrap");
const Button_1 = __importDefault(require("react-bootstrap/Button"));
const Brandon_Alvarez_Resume_pdf_1 = __importDefault(require("../../assets/Brandon_Alvarez_Resume.pdf"));
const ai_1 = require("react-icons/ai");
const react_pdf_1 = require("react-pdf");
require("react-pdf/dist/esm/Page/AnnotationLayer.css");
react_pdf_1.pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${react_pdf_1.pdfjs.version}/pdf.worker.min.js`;
const resumeLink = "https://github.com/Brandon-Alvarez-03/Brandon-Alvarez-03.github.io/blob/main/my-portfolio/src/assets/Resume_Brandon_Alvarez.pdf";
const Resume = () => {
    const [width, setWidth] = (0, react_1.useState)(1200);
    (0, react_1.useEffect)(() => {
        setWidth(window.innerWidth);
    }, []);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_bootstrap_1.Container, { fluid: true, className: "resume-section" },
            react_1.default.createElement(react_bootstrap_1.Row, { style: { justifyContent: "center", position: "relative" } },
                react_1.default.createElement(Button_1.default, { variant: "primary", href: Brandon_Alvarez_Resume_pdf_1.default, target: "_blank", style: { maxWidth: "250px" } },
                    react_1.default.createElement(ai_1.AiOutlineDownload, null),
                    "\u00A0Download Resume")),
            react_1.default.createElement(react_bootstrap_1.Row, { className: "resume" },
                react_1.default.createElement(react_pdf_1.Document, { file: Brandon_Alvarez_Resume_pdf_1.default, className: "d-flex justify-content-center" },
                    react_1.default.createElement(react_pdf_1.Page, { pageNumber: 1, scale: width > 786 ? 1.4 : 0.6 }))),
            react_1.default.createElement(react_bootstrap_1.Row, { style: { justifyContent: "center", position: "relative" } },
                react_1.default.createElement(Button_1.default, { variant: "primary", href: Brandon_Alvarez_Resume_pdf_1.default, target: "_blank", style: { maxWidth: "250px", textDecoration: "none" } },
                    react_1.default.createElement(ai_1.AiOutlineDownload, null),
                    "\u00A0Download Resume")))));
};
exports.default = Resume;
