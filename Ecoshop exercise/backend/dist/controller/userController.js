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
        this.model = new userModel_1.default();
    }
}
exports.default = userController;
