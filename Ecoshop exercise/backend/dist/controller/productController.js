"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productModel_1 = __importDefault(require("../model/productModel"));
class productController {
    constructor() {
        this.getProducts = (req, res) => {
            const { page } = req.params;
            this.model.getProducts(parseInt(page), (row) => {
                res.json(row);
            });
        };
        this.getProductById = (req, res) => {
            const { id } = req.params;
            this.model.getProductById(parseInt(id), (row) => {
                res.json(row);
            });
        };
        this.getProductByName = (req, res) => {
            const { name } = req.params;
            this.model.getProductByName(name, (row) => {
                if (row) {
                    res.json(row);
                }
                else {
                    return res.status(404).json({ error: false, message: 'Product not found!' });
                }
            });
        };
        this.getProductByPrice = (req, res) => {
            const { low, upper } = req.params;
            this.model.getProductByPrice(parseFloat(low), parseFloat(upper), (row) => {
                if (row) {
                    res.json(row);
                }
                else {
                    return res.status(404).json({ error: false, message: 'Products not found in that range!' });
                }
            });
        };
        this.getProductImage = (req, res) => {
            const { id } = req.params;
            this.model.getProductImage(parseInt(id), (row) => {
                if (row) {
                    res.send(row);
                }
                else {
                    return res.status(404).json({ error: false, message: 'Product not found by id!' });
                }
            });
        };
        this.model = new productModel_1.default();
    }
}
exports.default = productController;
