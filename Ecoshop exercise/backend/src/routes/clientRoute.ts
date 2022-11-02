import { Router } from "express";
import clientController from "../controller/clientController";

export default class ClientRoute {

    public router: Router;
    private clientController: clientController;

    constructor() {

        this.router = Router();
        this.clientController = new clientController();
        this.config();
    }

    public config = (): void => {
        
        this.router.get('/', this.clientController.index);
        this.router.get('*', this.clientController.error);
    }

}