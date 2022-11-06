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
        this.router.post('/login', this.controller.signIn);
        this.router.post('/register', this.controller.signUp);
    }

}

export default usersRoute;