"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const typewriter_effect_1 = __importDefault(require("typewriter-effect"));
function Type() {
    return (react_1.default.createElement(typewriter_effect_1.default, { options: {
            strings: [
                "Full Stack Software Engineer",
                "U.S. Army Veteran",
                "Licensed Drone Pilot",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
        } }));
}
exports.default = Type;
