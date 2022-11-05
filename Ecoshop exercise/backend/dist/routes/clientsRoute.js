"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientController_1 = __importDefault(require("../controller/clientController"));
class ClientRoute {
    constructor() {
        this.config = () => {
            this.router.get('/', this.clientController.index);
            this.router.get('*', this.clientController.error);
        };
        this.router = (0, express_1.Router)();
        this.clientController = new clientController_1.default();
        this.config();
    }
}
exports.default = ClientRoute;
