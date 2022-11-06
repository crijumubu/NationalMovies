"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../model/userModel"));
class userController {
    constructor() {
        this.getUser = (req, res) => {
            const { id } = req.params;
            this.model.getUser(id, (error, row) => {
                if (error) {
                    return res.json({ error: true, message: 'Upss, something went wrong!' });
                }
                if (Object.keys(row).length != 0) {
                    return res.json(row);
                }
                else {
                    return res.status(404).json({ error: false, message: 'User not found!' });
                }
            });
        };
        this.signIn = (req, res) => {
            const { email, password } = req.body;
            this.model.signIn(email, password, (error, status, row) => {
                if (error) {
                    return res.json({ error: true, message: 'Upss, something went wrong!' });
                }
                if (status == 1) {
                    return res.json({ message: 'Login succesfull!', row });
                }
                else if (status == 0) {
                    return res.json({ message: 'Incorrect password!' });
                }
                else {
                    return res.status(404).json({ error: false, message: 'Couldn\'t found your account!' });
                }
            });
        };
        this.signUp = (req, res) => {
            const { name, lastname, email, password } = req.body;
            this.model.signUp(name, lastname, email, password, (error, status) => {
                if (error) {
                    return res.json({ error: true, message: 'Upss, something went wrong!' });
                }
                if (status == 1) {
                    return res.json({ error: false, message: 'Successfull sign up!' });
                }
                else {
                    return res.json({ error: false, message: 'Email already in use!' });
                }
            });
        };
        this.getFavorites = (req, res) => {
            const { email } = req.params;
            this.model.getFavorites(email, (error, status, rows) => {
                if (error) {
                    return res.json({ error: true, message: 'Upss, something went wrong!' });
                }
                if (status == 1) {
                    return res.json(rows);
                }
                else if (status == 0) {
                    return res.json({ error: false, message: 'There are no favorites products yet!' });
                }
                else {
                    return res.status(404).json({ error: false, message: 'Upss, something went wrong. The are no users with that email!' });
                }
            });
        };
        this.addFavorite = (req, res) => {
            const { email, id_product } = req.body;
            this.model.addFavorite(email, id_product, (error, status) => {
                if (error) {
                    return res.json({ error: true, message: 'Upss, something went wrong. The product may not exist!' });
                }
                if (status == 1) {
                    return res.json({ error: false, message: 'Product successfully added to favorites list!' });
                }
                else if (status == 0) {
                    return res.json({ error: false, message: 'Product already add to favorites list!' });
                }
                else {
                    return res.status(404).json({ error: false, message: 'Upss, something went wrong. The are no users with that email!' });
                }
            });
        };
        this.removeFavorite = (req, res) => {
            const { email, id_product } = req.body;
            this.model.removeFavorite(email, id_product, (error, status) => {
                if (error) {
                    return res.json({ error: true, message: 'Upss, something went wrong!' });
                }
                if (status == 1) {
                    return res.json({ error: false, message: 'Product successfully removed from favorites list!' });
                }
                else if (status == 0) {
                    return res.json({ error: false, message: 'The product you are trying to remove is not marked as a favorite!' });
                }
                else {
                    return res.status(404).json({ error: false, message: 'Upss, something went wrong. The are no users with that email!' });
                }
            });
        };
        this.model = new userModel_1.default();
    }
}
exports.default = userController;
