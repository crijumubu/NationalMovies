"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productModel_1 = __importDefault(require("../model/productModel"));
class productController {
    constructor() {
        this.getTotalProducts = (req, res) => {
            this.model.getTotalPages((row) => {
                res.json(row);
            });
        };
        this.getProducts = (req, res) => {
            const { page } = req.params;
            this.model.getProducts(parseInt(page), (row) => {
                if (Object.keys(row).length != 0) {
                    res.json(row);
                }
                else {
                    return res.status(404).json({ error: false, message: 'No hay productos para esta página!' });
                }
            });
        };
        this.getLimitPrice = (req, res) => {
            this.model.getLimitPrice((row) => {
                if (Object.keys(row).length != 0) {
                    res.json(row);
                }
                else {
                    return res.status(404).json({ error: false, message: 'No hay productos en la base de datos!' });
                }
            });
        };
        this.getTotalProductsByName = (req, res) => {
            const { name } = req.params;
            this.model.getTotalProductsByName(name, (row) => {
                res.json(row);
            });
        };
        this.getProductsByName = (req, res) => {
            const { name, page } = req.params;
            this.model.getProductsByName(name, parseInt(page), (row) => {
                if (Object.keys(row).length != 0) {
                    res.json(row);
                }
                else {
                    return res.status(404).json({ error: false, message: 'No hay productos que coincidan con su búsqueda en esta página!' });
                }
            });
        };
        this.getTotalProductsByPrice = (req, res) => {
            const { low, upper } = req.params;
            this.model.getTotalProductsByPrice(parseInt(low), parseInt(upper), (row) => {
                res.json(row);
            });
        };
        this.getProductsByPrice = (req, res) => {
            const { low, upper, page } = req.params;
            this.model.getProductsByPrice(parseInt(low), parseInt(upper), parseInt(page), (row) => {
                if (Object.keys(row).length != 0) {
                    res.json(row);
                }
                else {
                    return res.status(404).json({ error: false, message: 'No se encuentraron productos en ese rango de precios en esta página!' });
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
                    return res.status(404).json({ error: false, message: 'No hubo coincidencias de productos con ese id!' });
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
                    return res.status(404).json({ error: false, message: 'No hubo coincidencias de productos con ese id!' });
                }
            });
        };
        this.model = new productModel_1.default();
    }
}
exports.default = productController;
