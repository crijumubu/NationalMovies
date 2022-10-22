import { Router } from "express";
import BackendController from "../controller/BackendController"

class BackendRoute {

    public router: Router;
    private backendController: BackendController;

    constructor() {
        this.router = Router();
        this.backendController = new BackendController();
        this.config();
    }

    public config = (): void => {
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
    }

}

export default BackendRoute;