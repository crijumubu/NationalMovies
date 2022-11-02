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
        this.getProductsByName = (req, res) => {
            const { name } = req.params;
            this.model.getProductsByName(name, (row) => {
                if (row) {
                    res.json(row);
                }
                else {
                    return res.status(404).json({ error: false, message: 'Product not found!' });
                }
            });
        };
        this.getProductsByPrice = (req, res) => {
            const { low, upper } = req.params;
            this.model.getProductsByPrice(parseFloat(low), parseFloat(upper), (row) => {
                if (row) {
                    res.json(row);
                }
                else {
                    return res.status(404).json({ error: false, message: 'Products not found in that range!' });
                }
            });
        };
        this.getProductById = (req, res) => {
            const { id } = req.params;
            this.model.getProductById(parseInt(id), (row) => {
                res.json(row);
            });
        };
        this.getProductImage = (req, res) => {
            const { id } = req.params;
            this.model.getProductImage(parseInt(id), (row) => {
                if (row) {
                    res.download(row);
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
