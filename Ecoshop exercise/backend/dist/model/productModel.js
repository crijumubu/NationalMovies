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
const mongo_1 = __importDefault(require("../database/mongo/mongo"));
class productModel {
    constructor() {
        this.getProducts = (page, fn) => __awaiter(this, void 0, void 0, function* () {
            let initItem = (page - 1) * this.itemsPerPage;
            this.mongo.connect();
            const products = yield this.mongo.model.find({}).skip(initItem).limit(this.itemsPerPage);
            fn(products);
        });
        this.getProductsByName = (name, page, fn) => __awaiter(this, void 0, void 0, function* () {
            let initItem = (page - 1) * this.itemsPerPage;
            this.mongo.connect();
            const products = yield this.mongo.model.find({ $text: { $search: name } }).skip(initItem).limit(this.itemsPerPage);
            fn(products);
        });
        this.getProductsByPrice = (low, upper, page, fn) => __awaiter(this, void 0, void 0, function* () {
            let initItem = (page - 1) * this.itemsPerPage;
            this.mongo.connect();
            const products = yield this.mongo.model.find({ 'price': { $gte: low, $lte: upper } }).skip(initItem).limit(this.itemsPerPage);
            fn(products);
        });
        this.getProductById = (id, fn) => __awaiter(this, void 0, void 0, function* () {
            this.mongo.connect();
            const product = yield this.mongo.model.findOne({ 'id': id });
            fn(product);
        });
        this.getProductImage = (id, fn) => __awaiter(this, void 0, void 0, function* () {
            this.mongo.connect();
            const product = yield this.mongo.model.findOne({ 'id': id });
            let imagePath = '';
            if (product != null) {
                imagePath = `./src/resources/${id}.jpg`;
            }
            fn(imagePath);
        });
        this.mongo = new mongo_1.default();
        this.itemsPerPage = 12;
    }
}
exports.default = productModel;
