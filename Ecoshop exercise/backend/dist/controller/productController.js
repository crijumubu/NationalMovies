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
                if (Object.keys(row).length != 0) {
                    res.json(row);
                }
                else {
                    return res.status(404).json({ error: false, message: 'There are no products for that page!' });
                }
            });
        };
        this.getLimitPrice = (req, res) => {
            this.model.getLimitPrice((row) => {
                if (Object.keys(row).length != 0) {
                    res.json(row);
                }
                else {
                    return res.status(404).json({ error: false, message: 'There are no products in database!' });
                }
            });
        };
        this.getProductsByName = (req, res) => {
            const { name, page } = req.params;
            this.model.getProductsByName(name, parseInt(page), (row) => {
                if (Object.keys(row).length != 0) {
                    res.json(row);
                }
                else {
                    return res.status(404).json({ error: false, message: 'There are no products that match with your search in that page!' });
                }
            });
        };
        this.getProductsByPrice = (req, res) => {
            const { low, upper, page } = req.params;
            this.model.getProductsByPrice(parseInt(low), parseInt(upper), parseInt(page), (row) => {
                if (Object.keys(row).length != 0) {
                    res.json(row);
                }
                else {
                    return res.status(404).json({ error: false, message: 'Products not found in that price range in that page' });
                }
            });
        };
        this.getProductById = (req, res) => {
            const { id } = req.params;
            this.model.getProductById(parseInt(id), (row) => {
                if (row != null) {
                    res.json(row);
                }
                else {
                    return res.status(404).json({ error: false, message: 'Product not found by id!' });
                }
            });
        };
        this.getProductImage = (req, res) => {
            const { id } = req.params;
            this.model.getProductImage(parseInt(id), (row) => {
                if (row != '') {
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
