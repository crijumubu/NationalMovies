import { Router } from "express";
import userController from "../controller/userController";

class usersRoute{

    public router: Router;
    public controller: userController;

    constructor() {

        this.router = Router();
        this.controller = new userController();
        this.config();
    }

    public config(){
        
        this.router.get('/:id', this.controller.getUser);
        this.router.get('/favorites/:email/:page', this.controller.getFavorites);
        this.router.post('/login', this.controller.signIn);
        this.router.post('/register', this.controller.signUp);
        this.router.post('/addFavorite', this.controller.addFavorite);
        this.router.post('/removeFavorite', this.controller.removeFavorite);
        this.router.post('/addToCart', this.controller.addToCart);
        this.router.post('/removeToCart', this.controller.removeToCart);

    }

}

export default usersRoute;