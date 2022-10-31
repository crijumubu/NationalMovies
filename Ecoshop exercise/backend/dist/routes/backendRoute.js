"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const backendController_1 = __importDefault(require("../controller/backendController"));
class Route {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new backendController_1.default();
        this.config();
    }
    config() {
        this.router.get("/", this.controller.index);
        this.router.post("/products", this.controller.postProduct);
        this.router.get("/products", this.controller.getProducts);
    }
}
exports.default = Route;
