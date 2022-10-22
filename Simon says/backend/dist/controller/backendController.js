"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const backendModel_1 = __importDefault(require("../model/backendModel"));
class BackendController {
    constructor() {
        this.score = (req, res) => { res.send(this.model.score); };
        this.newScore = (req, res) => {
            const score = req.body;
            this.model.newScore(score);
            res.send('Success!');
        };
        this.model = new backendModel_1.default();
    }
}
exports.default = BackendController;
