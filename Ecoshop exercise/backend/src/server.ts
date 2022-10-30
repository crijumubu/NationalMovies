import express, {Application, json, urlencoded} from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Route from "./routes/route";

class Server {

    private backend: Application;
    private router: Route;

    constructor(){

        this.backend = express();
        this.router = new Route();
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

        mongoose.connect(process.env.MongoDB!).then(() => {
            console.log("Connected to MongoDB Atlas");
        });
    }
}

const server = new Server();