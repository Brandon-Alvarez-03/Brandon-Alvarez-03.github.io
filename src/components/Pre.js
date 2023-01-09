"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Pre = (props) => {
    return react_1.default.createElement("div", { id: props.load ? "preloader" : "preloader-none" });
};
exports.default = Pre;
