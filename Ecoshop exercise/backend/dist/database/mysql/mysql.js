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
const mysql_1 = __importDefault(require("mysql"));
class mysqld {
    constructor() {
        this.connection = () => __awaiter(this, void 0, void 0, function* () {
            yield this.pool.getConnection((error, connection) => {
                if (error)
                    throw error;
                connection.release();
                console.log('Connected to Mysql');
            });
        });
        this.statement = (statement, data) => {
            return mysql_1.default.format(statement, data);
        };
        this.limit = (start, step = parseInt(process.env.DATABASEPAGINATION || '10')) => {
            let limit = [1, 12];
            if (start) {
                start = (start > 0) ? (start - 1) * step : 1;
                limit = [start, step];
            }
            return limit;
        };
        this.pool = mysql_1.default.createPool({
            connectionLimit: parseInt(process.env.MYSQLCONNECTIONLIMIT || '10'),
            database: process.env.MYSQLNAME,
            user: process.env.MYSQLUSER,
            host: process.env.MYSQL,
            password: process.env.MYSQLPASSWORD,
            ssl: {
                rejectUnauthorized: false
            }
        });
    }
}
exports.default = mysqld;
