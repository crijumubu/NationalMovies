import { Request, Response } from "express";
import BackendModel from "../model/BackendModel";

class BackendController {

    private model: BackendModel;

    constructor() {
        this.model = new BackendModel();
    }

    public index = (req: Request, res: Response) => res.json({ 'error': 0, 'msg': 'API: node-express-ts' });
    
    public getPeople = (req: Request, res: Response) => {
        const { id } = req.params;
        const people = this.model.getPeopleByID(parseInt(id));
        if (people) {
            return res.send(people);
        }
        return res.json({ 'error': 1, 'msg': 'API: id no found' });
    }

    public getPlanets = (req: Request, res: Response) => {
        const { id } = req.params;
        const planet = this.model.getPlanetsByID(parseInt(id));
        if (planet) {
            return res.send(planet);
        }
        return res.json({ 'error': 1, 'msg': 'API: id no found' });
    }

    public getFilms = (req: Request, res: Response) => {
        const { id } = req.params;
        const film = this.model.getFilmsByID(parseInt(id));
        if (film) {
            return res.send(film);
        }
        return res.json({ 'error': 1, 'msg': 'API: id no found' });
    }

    public getSpecies = (req: Request, res: Response) => {
        const { id } = req.params;
        const species = this.model.getSpeciesByID(parseInt(id));
        if (species) {
            return res.send(species);
        }
        return res.json({ 'error': 1, 'msg': 'API: id no found' });
    }

    public getVehicles = (req: Request, res: Response) => {
        const { id } = req.params;
        const vehicles = this.model.getVehiclesByID(parseInt(id));
        if (vehicles) {
            return res.send(vehicles);
        }
        return res.json({ 'error': 1, 'msg': 'API: id no found' });
    }

    public getStarships = (req: Request, res: Response) => {
        const { id } = req.params;
        const starships = this.model.getStarshipsByID(parseInt(id));
        if (starships) {
            return res.send(starships);
        }
        return res.json({ 'error': 1, 'msg': 'API: id no found' });
    }

    // public insertPeople = (req: Request, res: Response) => { 
    //     this.model.insertPeople(req.body);
    //     return res.json({ 'error': 0, 'msg': 'API: insert' });
    // }

    // public updatePeople = (req: Request, res: Response) => { 
    //     this.model.updatePeople(req.body);
    //     return res.json({ 'error': 0, 'msg': 'API: update' });
    // }

    // public deletePeople = (req: Request, res: Response) => {
    //     const { id } = req.body;
    //     this.model.deletePeople(parseInt(id));
    //     return res.json({ 'error': 0, 'msg': `API: delete id: ${id}` });
    //  }

}

export default BackendController;