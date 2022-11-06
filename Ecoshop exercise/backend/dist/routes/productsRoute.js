"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controller/productController"));
class productsRoute {
    constructor() {
        this.config = () => {
            this.router.get("/:page", this.controller.getProducts);
            this.router.get("/limit/price", this.controller.getLimitPrice);
            this.router.get("/name/:name/:page", this.controller.getProductsByName);
            this.router.get("/price/lower=:low&upper=:upper/:page", this.controller.getProductsByPrice);
            this.router.get("/specific/:id", this.controller.getProductById);
            this.router.get("/image/:id", this.controller.getProductImage);
        };
        this.router = (0, express_1.Router)();
        this.controller = new productController_1.default();
        this.config();
    }
}
exports.default = productsRoute;
