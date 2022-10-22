"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BackendController_1 = __importDefault(require("../controller/BackendController"));
class BackendRoute {
    constructor() {
        this.config = () => {
            this.router.get('/', this.backendController.index);
            this.router.get('/people/:id', this.backendController.getPeople);
            this.router.get('/planets/:id', this.backendController.getPlanets);
            this.router.get('/films/:id', this.backendController.getFilms);
            this.router.get('/species/:id', this.backendController.getSpecies);
            this.router.get('/vehicles/:id', this.backendController.getVehicles);
            this.router.get('/starships/:id', this.backendController.getStarships);
            // this.router.post('/people/', this.backendController.insertPeople);
            // this.router.put('/people/', this.backendController.updatePeople);
            // this.router.delete('/people/', this.backendController.deletePeople);
        };
        this.router = (0, express_1.Router)();
        this.backendController = new BackendController_1.default();
        this.config();
    }
}
exports.default = BackendRoute;
