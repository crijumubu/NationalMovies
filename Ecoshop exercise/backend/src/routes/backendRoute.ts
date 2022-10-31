import {Router} from "express";
import backendController from "../controller/backendController";

class Route{

    public router: Router;
    private controller: backendController;

    constructor(){

        this.router = Router();
        this.controller = new backendController();
        this.config();
    }

    public config(){
        
        this.router.get("/", this.controller.index);
        this.router.post("/products", this.controller.postProduct);
        this.router.get("/products", this.controller.getProducts)
    }

}

export default Route;