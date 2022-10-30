import {Router} from "express";
import Controller from "../controller/controller";

class Route{

    public router: Router;
    private controller: Controller;

    constructor(){

        this.router = Router();
        this.controller = new Controller();
        this.config();
    }

    public config(){
        
        this.router.get("/", this.controller.index);
    }

}

export default Route;