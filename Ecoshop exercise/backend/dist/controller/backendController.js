"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const backendModel_1 = __importDefault(require("../model/backendModel"));
const productsModel = require("../model/productModel");
class Controller {
    constructor() {
        this.model = new backendModel_1.default();
    }
    index(req, res) {
        res.send("Welcome to Ecoshop backend!");
    }
    getProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield productsModel.find();
            res.json(products);
        });
    }
    getProductByTitle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title } = req.params;
            const products = yield productsModel.find({ $text: { $search: title } });
            res.json(products);
        });
    }
    getProductByPrice(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { low, upper } = req.params;
            const products = yield productsModel.find({ 'price': { $gte: low, $lte: upper } });
            res.json(products);
        });
    }
    getImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const product = yield productsModel.findOne({ 'id': id });
            res.json(product['image']);
        });
    }
    postProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = productsModel(req.body);
            product.save().then((data) => res.json(data));
        });
    }
}
exports.default = Controller;
