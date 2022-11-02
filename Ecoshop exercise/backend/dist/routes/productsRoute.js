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
            this.router.get("/products/:page", this.controller.getProducts);
            this.router.get("/products/:id", this.controller.getProductById);
            this.router.get("/products/:name", this.controller.getProductByName);
            this.router.get("/products/:low&:upper", this.controller.getProductByPrice);
            this.router.get("/images/:id", this.controller.getProductImage);
            this.router.post("/products", this.controller.postProduct);
        };
        this.router = (0, express_1.Router)();
        this.controller = new productController_1.default();
        this.config();
    }
}
exports.default = productsRoute;
