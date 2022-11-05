import express, {Application, json, urlencoded} from "express";
import dotenv from "dotenv";
import cors from "cors";

import productsRoute from "./routes/productsRoute";
import usersRoute from "./routes/usersRoute";
import clientRoute from "./routes/clientsRoute";

class Server {

    private backend: Application; 
    private productsRouter: productsRoute;
    private userRouter: usersRoute;
    private clientRouter: clientRoute;

    constructor(){

        dotenv.config();
        this.backend = express();
        this.productsRouter = new productsRoute();
        this.userRouter = new usersRoute();
        this.clientRouter = new clientRoute();
        this.config();
        this.route();
        this.start();
    }

    public config = () => {

        this.backend.set("port", process.env.PORT);
        this.backend.use(urlencoded({extended: true}));
        this.backend.use(json());
        this.backend.use(cors());
    }

    public route = () => {

        this.backend.use(`${process.env.PRODUCTSROUTE}`, this.productsRouter.router);
        this.backend.use(`${process.env.USERSROUTE}`, this.userRouter.router);

        this.backend.use('/', this.clientRouter.router);
        this.backend.use('*', this.clientRouter.router);
    }

    public start = () => {

        this.backend.listen(process.env.PORT, () => {
            
            console.log("Server on port:", process.env.PORT);
        });
    }
}

const server = new Server();