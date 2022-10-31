import express, {Application, json, urlencoded} from "express";
import mongoDatabase from "./database/mongoDatabase";
import backendRoute from "./routes/backendRoute";
import dotenv from "dotenv";

class Server {

    private backend: Application;
    private router: backendRoute;
    private mongo: mongoDatabase; 

    constructor(){

        this.backend = express();
        this.router = new backendRoute();
        this.mongo = new mongoDatabase();
        this.config();
        this.route();
        this.start();

    }

    public config(){

        const cors = require("cors");
        this.backend.set("port", 1802);
        this.backend.use(urlencoded({extended: true}));
        this.backend.use(json());
        this.backend.use(cors());
        dotenv.config();

    }

    public route(){

        this.backend.use("/", this.router.router);
    }

    public start(){

        this.backend.listen(this.backend.get("port"), () => {
            console.log("Server on port:", this.backend.get("port"));
        });

        this.mongo.connect();
    }
}

const server = new Server();