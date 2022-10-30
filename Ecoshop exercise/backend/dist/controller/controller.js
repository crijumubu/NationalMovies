"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("../model/model"));
class Controller {
    constructor() {
        this.model = new model_1.default();
    }
    index(req, res) {
        res.send("Welcome to Ecoshop backend!");
    }
}
exports.default = Controller;
