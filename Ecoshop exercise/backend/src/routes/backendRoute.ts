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
        this.router.get("/products", this.controller.getProducts);
        this.router.get("/products/:low&:upper", this.controller.getProductByPrice);
        this.router.get("/products/:title", this.controller.getProductByTitle);
        this.router.get("/images/:id", this.controller.getImage);
        this.router.post("/products", this.controller.postProduct);
    }

}

export default Route;