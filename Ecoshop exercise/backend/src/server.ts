import express, {Application, json, urlencoded} from "express";
import dotenv from "dotenv";
import cors from "cors";

import productsRoute from "./routes/productsRoute";
import clientRoute from "./routes/clientRoute";

class Server {

    private backend: Application; 
    private productsRouter: productsRoute;
    private clientRouter: clientRoute;

    constructor(){

        this.backend = express();
        this.productsRouter = new productsRoute();
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
        dotenv.config();
    }

    public route = () => {

        this.backend.use(`${process.env.ROOT}`, this.productsRouter.router);

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