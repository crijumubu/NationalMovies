"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("../database/mysql/mysql"));
class userModel {
    constructor() {
        this.limit = (start, step) => {
            return this.mysqld.limit(start, step);
        };
        this.getUser = (id, fn) => {
            this.mysqld.connection();
            const statement = this.mysqld.statement(`
        SELECT * FROM USERS;`, [id.toString()]);
            this.mysqld.pool.query(statement, (error, rows) => {
                fn(error, rows);
            });
        };
        this.mysqld = new mysql_1.default();
    }
}
exports.default = userModel;
