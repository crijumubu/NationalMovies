import {Router} from "express";
import productController from "../controller/productController";

class productsRoute{

    public router: Router;
    private controller: productController;

    constructor(){

        this.router = Router();
        this.controller = new productController();
        this.config();
    }

    public config = () => {
        
        this.router.get("/", this.controller.getTotalProducts);
        this.router.get("/:page", this.controller.getProducts);
        this.router.get("/limit/price", this.controller.getLimitPrice);
        this.router.get("/name/:name/pages", this.controller.getTotalProductsByName);
        this.router.get("/name/:name/:page", this.controller.getProductsByName);
        this.router.get("/price/lower=:low&upper=:upper/pages", this.controller.getTotalProductsByPrice);
        this.router.get("/price/lower=:low&upper=:upper/:page", this.controller.getProductsByPrice);
        this.router.get("/specific/:id", this.controller.getProductById);
        this.router.get("/image/:id", this.controller.getProductImage);
    }
}

export default productsRoute;