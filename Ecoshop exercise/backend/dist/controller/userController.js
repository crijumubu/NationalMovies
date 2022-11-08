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
const userModel_1 = __importDefault(require("../model/userModel"));
const productModel_1 = __importDefault(require("../model/productModel"));
class userController {
    constructor() {
        this.getUser = (req, res) => {
            const { id } = req.params;
            this.usermodel.getUser(id, (error, row) => {
                if (error) {
                    return res.json({ error: true, message: 'Upss, algo ha salido mal!' });
                }
                if (Object.keys(row).length != 0) {
                    return res.json(row);
                }
                else {
                    return res.status(404).json({ error: false, message: 'El usuario no fue encontrado!' });
                }
            });
        };
        this.signIn = (req, res) => {
            const { email, password } = req.body;
            this.usermodel.signIn(email, password, (error, status, row) => {
                if (error) {
                    return res.json({ error: true, message: 'Upss, algo ha salido mal!' });
                }
                if (status == 1) {
                    return res.json({ message: 'Inicio de sesión exitóso!', row });
                }
                else if (status == 0) {
                    return res.json({ message: 'COntraseña incorrecta!' });
                }
                else {
                    return res.status(404).json({ error: false, message: 'Upss, no pudimos encontrar tu cuenta!' });
                }
            });
        };
        this.signUp = (req, res) => {
            const { name, lastname, email, password } = req.body;
            this.usermodel.signUp(name, lastname, email, password, (error, status) => {
                if (error) {
                    return res.json({ error: true, message: 'Upss, algo ha salido mal!' });
                }
                if (status == 1) {
                    return res.json({ error: false, message: 'Registro exitóso!' });
                }
                else {
                    return res.json({ error: false, message: 'El correo ya se encuentra en uso!' });
                }
            });
        };
        this.getFavorites = (req, res) => {
            const { page, email } = req.params;
            this.usermodel.getFavorites(parseInt(page), email, (error, status, rows) => __awaiter(this, void 0, void 0, function* () {
                if (error) {
                    return res.json({ error: true, message: 'Upss, algo ha salido mal!' });
                }
                if (status == 1) {
                    let favoritesJson = [];
                    for (let i = 0; i < rows.length; i++) {
                        let id = rows[i].Id_product;
                        yield this.productmodel.getProductById(id, (row) => {
                            favoritesJson.push(row);
                        });
                    }
                    return res.json(favoritesJson);
                }
                else if (status == 0) {
                    return res.json({ error: false, message: 'Todavía no hay productos favoritos!' });
                }
                else {
                    return res.status(404).json({ error: false, message: 'Upss, algo ha salido mal. No existe un usuario con ese correo!' });
                }
            }));
        };
        this.addFavorite = (req, res) => {
            const { email, id_product } = req.body;
            this.usermodel.addFavorite(email, id_product, (error, status) => {
                if (error) {
                    return res.json({ error: true, message: 'Upss, algo ha salido mal. El producto puede que no exista!' });
                }
                if (status == 1) {
                    return res.json({ error: false, message: 'El producto fue agregado correctamente a la lista de favoritos!' });
                }
                else if (status == 0) {
                    return res.json({ error: false, message: 'El producto ya se encuentra agregado a la lista de favoritos!' });
                }
                else {
                    return res.status(404).json({ error: false, message: 'Upss, algo ha salido mal. No existe un usuario con ese correo!' });
                }
            });
        };
        this.removeFavorite = (req, res) => {
            const { email, id_product } = req.body;
            this.usermodel.removeFavorite(email, id_product, (error, status) => {
                if (error) {
                    return res.json({ error: true, message: 'Upss, algo ha salido mal!' });
                }
                if (status == 1) {
                    return res.json({ error: false, message: 'El producto fue eliminado correctamente de la lista de favoritos!' });
                }
                else if (status == 0) {
                    return res.json({ error: false, message: 'El producto que está intentando eliminar no se encuentra marcado como favorito!' });
                }
                else {
                    return res.status(404).json({ error: false, message: 'Upss, algo ha salido mal. No existe un usuario con ese correo!' });
                }
            });
        };
        this.addToCart = (req, res) => {
            const { email, id_product } = req.body;
            this.usermodel.addToCart(email, id_product, (error, status) => {
                if (error) {
                    return res.json({ error: true, message: 'Upss, algo ha salido mal. El producto puede que no exista!' });
                }
                if (status == 1) {
                    return res.json({ error: false, message: 'El producto fue agregado correctamente al carrito de compras!' });
                }
                else {
                    return res.status(404).json({ error: false, message: 'Upss, algo ha salido mal. No hay usuarios o carritos de compras asociados con ese correo electrónico!' });
                }
            });
        };
        this.removeToCart = (req, res) => {
        };
        this.usermodel = new userModel_1.default();
        this.productmodel = new productModel_1.default();
    }
}
exports.default = userController;
