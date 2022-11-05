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
                    console.error(error);
                    return res.json({ error: true, message: 'e101' });
                }
                if (row) {
                    return res.json(row);
                }
                else {
                    return res.status(404).json({ error: false, message: 'User not found' });
                }
            });
        };
        this.model = new userModel_1.default();
    }
}
exports.default = userController;
