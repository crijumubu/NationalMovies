"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const people_json_1 = __importDefault(require("../database/people.json"));
class BackendModel {
    get score() {
        return people_json_1.default;
    }
    newScore(score) {
        people_json_1.default.push(score);
    }
}
exports.default = BackendModel;
