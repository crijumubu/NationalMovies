"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("../controller/controller"));
class Route {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new controller_1.default();
        this.config();
    }
    config() {
        this.router.get("/", this.controller.index);
    }
}
exports.default = Route;
