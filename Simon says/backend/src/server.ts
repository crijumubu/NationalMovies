import express, { Application, json, urlencoded } from "express";
import BackendRoute from "./routes/backendRoute"

class Server {

    private backend: Application;
    private backendRoute: BackendRoute;

    constructor() {
        this.backend = express();
        this.backendRoute = new BackendRoute();
        this.config();
        this.route();
        this.start();
    }

    public config = (): void => {
        this.backend.set('port', 1802);
        this.backend.use(urlencoded({extended: true}));
        this.backend.use(json());  

        const path = require('path');

        this.backend.use(express.static(path.join(__dirname, '../../frontend/public')));

        this.backend.set('views', path.join(__dirname, '../../frontend/public/views'));
        this.backend.set('view engine', 'ejs');
        this.backend.engine('html', require('ejs').renderFile);
    }

    public route = (): void => {
        this.backend.use('/api', this.backendRoute.router);
    }

    public start = (): void => {
        this.backend.listen(this.backend.get('port'), () => {
            console.log('Server on port:', this.backend.get('port'));
        });
    }

}

const server = new Server();