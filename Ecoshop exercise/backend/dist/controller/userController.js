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
                    return res.json({ error: true, message: 'Upss, something went!' });
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
            this.model.signIn(email, password, (error, row) => {
                if (error) {
                    console.log(error);
                    return res.json({ error: true, message: 'Upss, something went!' });
                }
                if (Object.keys(row).length != 0) {
                    return res.json(row);
                }
                else {
                    return res.status(404).json({ error: false, message: 'Incorrect user or password!' });
                }
            });
        };
        this.signUp = (req, res) => {
            const { name, lastname, email, password } = req.body;
            this.model.signUp(name, lastname, email, password, (error, row) => {
                if (error) {
                    return res.json({ error: true, message: 'Upss, something went!' });
                }
                if (row.inUse) {
                    return res.json({ error: false, message: 'Email already in use!' });
                }
                if (Object.keys(row).length != 0) {
                    return res.json(row);
                }
                else {
                    return res.status(404).json({ error: false, message: 'Incorrect user or password!' });
                }
            });
        };
        this.model = new userModel_1.default();
    }
}
exports.default = userController;
