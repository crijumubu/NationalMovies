"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientController {
    constructor() {
        this.index = (req, res) => {
            res.send("Welcome to Ecoshop backend!");
        };
        this.error = (req, res) => {
            return res.status(404).json({ error: true, message: 'Path not found' });
        };
    }
}
exports.default = ClientController;
