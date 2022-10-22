import { Router } from "express";
import BackendController from "../controller/backendController"

class BackendRoute {

    public router: Router;
    private backendController: BackendController;

    constructor() {
        this.router = Router();
        this.backendController = new BackendController();
        this.config();
    }

    public config = (): void => {
        this.router.post('/newscore', this.backendController.newScore);
        this.router.get('/score', this.backendController.score);
    }

}

export default BackendRoute;