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
        this.router.get('/', this.backendController.index);
    }

}

export default BackendRoute;