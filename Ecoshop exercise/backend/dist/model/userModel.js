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
const mysql_1 = __importDefault(require("../database/mysql/mysql"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class userModel {
    constructor() {
        this.getUser = (id, fn) => {
            this.mysqld.connection();
            const statement = this.mysqld.statement(`
        SELECT USER_NAME AS Name, USER_LASTNAME AS Lastname, USER_EMAIL AS Email FROM USERS WHERE ID_USER = ?;`, [id]);
            this.mysqld.pool.query(statement, (error, rows) => {
                fn(error, rows);
            });
        };
        this.encryptPassword = (password) => __awaiter(this, void 0, void 0, function* () {
            const salt = yield bcrypt_1.default.genSalt(10);
            const hash = yield bcrypt_1.default.hash(password, salt);
            return hash;
        });
        this.validatePassword = (password, hash) => __awaiter(this, void 0, void 0, function* () {
            const validation = yield bcrypt_1.default.compare(password, hash);
            return validation;
        });
        this.signIn = (email, password, fn) => __awaiter(this, void 0, void 0, function* () {
            this.mysqld.connection();
            const statement = this.mysqld.statement(`
        SELECT USER_NAME AS Name, USER_LASTNAME AS Lastname, USER_PASSWORD AS Password FROM USERS WHERE USER_EMAIL = ?;`, [email]);
            this.mysqld.pool.query(statement, (error, rows) => __awaiter(this, void 0, void 0, function* () {
                if (rows.length > 0) {
                    const user = rows[0];
                    const validPassword = yield this.validatePassword(password, user.Password);
                    if (validPassword) {
                        fn(error, 1, { name: user.Name, lastname: user.Lastname, email: email });
                    }
                    else {
                        fn(error, 0);
                    }
                }
                else {
                    fn(error, -1);
                }
            }));
        });
        this.signUp = (name, lastname, email, password, fn) => {
            this.mysqld.connection();
            let statement = this.mysqld.statement(`
        SELECT COUNT(*) AS Count FROM USERS WHERE USER_EMAIL = ?;`, [email]);
            this.mysqld.pool.query(statement, (error, rows) => __awaiter(this, void 0, void 0, function* () {
                if (rows[0].Count == 0) {
                    const encryptPassword = yield this.encryptPassword(password);
                    statement = this.mysqld.statement(`
                INSERT INTO USERS (USER_NAME, USER_LASTNAME, USER_EMAIL, USER_PASSWORD)
                VALUES (?, ?, ?, ?);`, [name, lastname, email, encryptPassword]);
                    this.mysqld.pool.query(statement, (error) => {
                        fn(error, 1);
                    });
                }
                else {
                    fn(error, 0);
                }
            }));
        };
        this.getFavorites = (email, fn) => {
            this.mysqld.connection();
            let statement = this.mysqld.statement(`
        SELECT ID_USER AS Id FROM USERS WHERE USER_EMAIL = ?;`, [email]);
            this.mysqld.pool.query(statement, (error, rows) => {
                if (rows.length == 1) {
                    const id_user = rows[0].Id;
                    statement = this.mysqld.statement(`
                SELECT PRODUCT_ID_PRODUCT AS Id_product FROM FAVORITES WHERE USER_ID_USER = ?;`, [id_user]);
                    this.mysqld.pool.query(statement, (error, rows) => {
                        if (rows.length > 0) {
                            fn(error, 1, rows);
                        }
                        else {
                            fn(error, 0);
                        }
                    });
                }
                else {
                    fn(error, -1);
                }
            });
        };
        this.addFavorite = (email, id_product, fn) => {
            this.mysqld.connection();
            let statement = this.mysqld.statement(`
        SELECT ID_USER AS Id FROM USERS WHERE USER_EMAIL = ?;`, [email]);
            this.mysqld.pool.query(statement, (error, rows) => {
                if (rows.length == 1) {
                    const id_user = rows[0].Id;
                    statement = this.mysqld.statement(`
                SELECT COUNT(*) AS Count FROM FAVORITES WHERE USER_ID_USER = ? AND PRODUCT_ID_PRODUCT = ?;`, [id_user, id_product]);
                    this.mysqld.pool.query(statement, (error, rows) => {
                        if (rows[0].Count == 0) {
                            statement = this.mysqld.statement(`
                        INSERT  INTO FAVORITES VALUES (?, ?);`, [id_user, id_product]);
                            this.mysqld.pool.query(statement, (error) => {
                                fn(error, 1);
                            });
                        }
                        else {
                            fn(error, 0);
                        }
                    });
                }
                else {
                    fn(error, -1);
                }
            });
        };
        this.removeFavorite = (email, id_product, fn) => {
            this.mysqld.connection();
            let statement = this.mysqld.statement(`
        SELECT ID_USER AS Id FROM USERS WHERE USER_EMAIL = ?;`, [email]);
            this.mysqld.pool.query(statement, (error, rows) => {
                if (rows.length == 1) {
                    const id_user = rows[0].Id;
                    statement = this.mysqld.statement(`
                SELECT COUNT(*) AS Count FROM FAVORITES WHERE USER_ID_USER = ? AND PRODUCT_ID_PRODUCT = ?;`, [id_user, id_product]);
                    this.mysqld.pool.query(statement, (error, rows) => {
                        if (rows[0].Count == 1) {
                            statement = this.mysqld.statement(`
                        DELETE FROM FAVORITES WHERE USER_ID_USER = ? AND PRODUCT_ID_PRODUCT = ?;`, [id_user, id_product]);
                            this.mysqld.pool.query(statement, (error) => {
                                fn(error, 1);
                            });
                        }
                        else {
                            fn(error, 0);
                        }
                    });
                }
                else {
                    fn(error, -1);
                }
            });
        };
        this.mysqld = new mysql_1.default();
    }
}
exports.default = userModel;
