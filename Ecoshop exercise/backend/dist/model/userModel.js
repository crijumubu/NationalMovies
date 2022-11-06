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
        SELECT * FROM USERS WHERE ID_USER = ?;`, [id]);
            this.mysqld.pool.query(statement, (error, rows) => {
                fn(error, rows);
            });
        };
        this.signIn = (email, password, fn) => {
            this.mysqld.connection();
            const statement = this.mysqld.statement(`
        SELECT USER_NAME FROM USERS WHERE USER_EMAIL = ? AND USER_PASSWORD = ?;`, [email, password]);
            this.mysqld.pool.query(statement, (error, rows) => {
                fn(error, rows);
            });
        };
        this.signUp = (name, lastname, email, password, fn) => {
            this.mysqld.connection();
            let statement = this.mysqld.statement(`
        SELECT COUNT(*) as cnt FROM USERS WHERE USER_EMAIL = ?`, [email]);
            this.mysqld.pool.query(statement, (error, rows) => {
                if (rows[0].cnt <= 0) {
                    statement = this.mysqld.statement(`
                INSERT INTO USERS (USER_NAME, USER_LASTNAME, USER_EMAIL, USER_PASSWORD)
                VALUES (?, ?, ?, ?);`, [name, lastname, email, password]);
                    this.mysqld.pool.query(statement, (error, rows) => {
                        fn(error, rows);
                    });
                }
                else {
                    fn(false, { inUse: true });
                }
            });
        };
        this.mysqld = new mysql_1.default();
    }
}
exports.default = userModel;
