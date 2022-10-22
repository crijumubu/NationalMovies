"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const backendController_1 = __importDefault(require("../controller/backendController"));
class BackendRoute {
    constructor() {
        this.config = () => {
            this.router.post('/newscore', this.backendController.newScore);
            this.router.get('/score', this.backendController.score);
        };
        this.router = (0, express_1.Router)();
        this.backendController = new backendController_1.default();
        this.config();
    }
}
exports.default = BackendRoute;
