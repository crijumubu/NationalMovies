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
                INSERT INTO USERS (USER_NAME, USER_LASTNAME, USER_EMAIL, USER_PASSWORD) VALUES (?, ?, ?, ?);`, [name, lastname, email, encryptPassword]);
                    this.mysqld.pool.query(statement, (error) => {
                        statement = this.mysqld.statement(`
                    INSERT INTO SHOPPING_CART (SUBTOTAL, TOTAL, USERS_ID_USER) SELECT 0, 0, ID_USER FROM USERS WHERE USER_EMAIL = ?;`, [email]);
                        this.mysqld.pool.query(statement, (error) => {
                            fn(error, 1);
                        });
                    });
                }
                else {
                    fn(error, 0);
                }
            }));
        };
        this.getTotalFavorites = (email, fn) => {
            let statement = this.mysqld.statement(`
        SELECT ID_USER AS Id FROM USERS WHERE USER_EMAIL = ?;`, [email]);
            this.mysqld.pool.query(statement, (error, rows) => {
                if (rows.length == 1) {
                    const id_user = rows[0].Id;
                    statement = this.mysqld.statement(`
                SELECT COUNT(USER_ID_USER) AS Total FROM FAVORITES WHERE USER_ID_USER = ?;`, [id_user]);
                    this.mysqld.pool.query(statement, (error, rows) => {
                        fn(error, 1, Math.ceil(rows[0].Total / 12));
                    });
                }
                else {
                    fn(error, -1);
                }
            });
        };
        this.getFavorites = (page, email, fn) => {
            let initItem = (page - 1) * parseInt(process.env.DATABASEPAGINATION || '12');
            let finalItem = (initItem + 12);
            this.mysqld.connection();
            let statement = this.mysqld.statement(`
        SELECT ID_USER AS Id FROM USERS WHERE USER_EMAIL = ?;`, [email]);
            this.mysqld.pool.query(statement, (error, rows) => {
                if (rows.length == 1) {
                    const id_user = rows[0].Id;
                    statement = this.mysqld.statement(`
                SELECT PRODUCT_ID_PRODUCT AS Id_product FROM FAVORITES WHERE USER_ID_USER = ? LIMIT ?, ?;`, [id_user, initItem, finalItem]);
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
                        INSERT INTO FAVORITES (USER_ID_USER, PRODUCT_ID_PRODUCT) VALUES (?, ?);`, [id_user, id_product]);
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
        this.getShoppingCart = (email, fn) => {
            this.mysqld.connection();
            let statement = this.mysqld.statement(`
        SELECT ID_USER AS Id FROM USERS WHERE USER_EMAIL = ?;`, [email]);
            this.mysqld.pool.query(statement, (error, row) => {
                if (row.length == 1) {
                    const id_user = row[0].Id;
                    statement = this.mysqld.statement(`
                SELECT PRODUCTS_ID_PRODUCT AS Id_product, UNITS_PRODUCTS_CART AS Units FROM SHOPPING_CART_has_PRODUCTS WHERE SHOPPING_CART_ID_CART = ?;`, [id_user]);
                    this.mysqld.pool.query(statement, (error, rows) => {
                        if (rows.length > 0) {
                            statement = this.mysqld.statement(`
                        SELECT SUBTOTAL, TOTAL FROM SHOPPING_CART WHERE USERS_ID_USER = ?;`, id_user);
                            this.mysqld.pool.query(statement, (error, totalRow) => {
                                fn(error, 1, rows, totalRow);
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
        this.updateCartPrice = (id_user, price) => {
            this.mysqld.connection();
            let statement = this.mysqld.statement(`
        UPDATE SHOPPING_CART SET SUBTOTAL = SUBTOTAL + ?, TOTAL = SUBTOTAL * 1.19 WHERE ID_CART = ?;`, [price, id_user]);
            this.mysqld.pool.query(statement, (error) => {
                console.log(error);
            });
        };
        this.addToCart = (email, id_product, productPrice, units, fn) => {
            this.mysqld.connection();
            let statement = this.mysqld.statement(`
        SELECT ID_USER AS Id FROM USERS WHERE USER_EMAIL = ?;`, [email]);
            this.mysqld.pool.query(statement, (error, row) => {
                if (row.length == 1) {
                    const id_user = row[0].Id;
                    statement = this.mysqld.statement(`
                SELECT UNITS_PRODUCTS_CART AS 'CNT' FROM SHOPPING_CART_has_PRODUCTS WHERE SHOPPING_CART_ID_CART = ? AND PRODUCTS_ID_PRODUCT = ?;`, [id_user, id_product]);
                    this.mysqld.pool.query(statement, (error, rows) => {
                        let product_units = 0;
                        if (rows[0] != undefined) {
                            product_units = parseInt(rows[0].CNT);
                        }
                        const price = (parseFloat(productPrice) * parseFloat(units)).toString();
                        if (error) {
                            fn(error, -1);
                        }
                        if (product_units == 0) {
                            statement = this.mysqld.statement(`
                        INSERT INTO SHOPPING_CART_has_PRODUCTS (SHOPPING_CART_ID_CART, PRODUCTS_ID_PRODUCT, UNITS_PRODUCTS_CART) VALUES (?, ?, ?);`, [id_user, id_product, units]);
                            this.mysqld.pool.query(statement, (error) => {
                                if (!error) {
                                    this.updateCartPrice(id_user, price);
                                }
                                fn(error, 1);
                            });
                        }
                        else if (product_units > 0) {
                            statement = this.mysqld.statement(`
                        UPDATE SHOPPING_CART_has_PRODUCTS SET UNITS_PRODUCTS_CART = UNITS_PRODUCTS_CART + ? WHERE SHOPPING_CART_ID_CART = ? AND PRODUCTS_ID_PRODUCT = ?;`, [units, id_user, id_product]);
                            this.mysqld.pool.query(statement, (error) => {
                                if (!error) {
                                    this.updateCartPrice(id_user, price);
                                }
                                fn(error, 1);
                            });
                        }
                    });
                }
                else {
                    fn(error, -1);
                }
            });
        };
        this.removeToCart = (email, id_product, productPrice, units, fn) => {
            this.mysqld.connection();
            let statement = this.mysqld.statement(`
        SELECT ID_USER AS Id FROM USERS WHERE USER_EMAIL = ?;`, [email]);
            this.mysqld.pool.query(statement, (error, row) => {
                if (row.length == 1) {
                    const id_user = row[0].Id;
                    statement = this.mysqld.statement(`
                SELECT UNITS_PRODUCTS_CART AS CNT FROM SHOPPING_CART_has_PRODUCTS WHERE SHOPPING_CART_ID_CART = ? AND PRODUCTS_ID_PRODUCT = ?;`, [id_user, id_product]);
                    this.mysqld.pool.query(statement, (error, rows) => {
                        const product_units = parseInt(rows[0].CNT);
                        const delete_units = product_units - parseInt(units);
                        const price = (parseFloat(productPrice) * parseFloat(units) * -1).toString();
                        if (error) {
                            fn(error, -1);
                        }
                        if (delete_units >= 1) {
                            statement = this.mysqld.statement(`
                        UPDATE SHOPPING_CART_has_PRODUCTS SET UNITS_PRODUCTS_CART = UNITS_PRODUCTS_CART - ? WHERE SHOPPING_CART_ID_CART = ? AND PRODUCTS_ID_PRODUCT = ?;`, [units, id_user, id_product]);
                            this.mysqld.pool.query(statement, (error) => {
                                this.updateCartPrice(id_user, price);
                                fn(error, 1);
                            });
                        }
                        else if (delete_units == 0) {
                            statement = this.mysqld.statement(`
                        DELETE FROM SHOPPING_CART_has_PRODUCTS WHERE SHOPPING_CART_ID_CART = ? AND PRODUCTS_ID_PRODUCT = ?;`, [id_user, id_product]);
                            this.mysqld.pool.query(statement, (error) => {
                                this.updateCartPrice(id_user, price);
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
