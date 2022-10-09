"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const backendModel_1 = __importDefault(require("../model/backendModel"));
class BackendController {
    constructor() {
        this.index = (req, res) => { res.render('index.html'); };
        this.model = new backendModel_1.default();
    }
}
exports.default = BackendController;
