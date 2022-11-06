"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controller/userController"));
class usersRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new userController_1.default();
        this.config();
    }
    config() {
        this.router.get('/:id', this.controller.getUser);
        this.router.post('/login', this.controller.signIn);
        this.router.post('/register', this.controller.signUp);
    }
}
exports.default = usersRoute;
