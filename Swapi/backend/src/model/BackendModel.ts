import peoples from "../db/people.json";
import planets from "../db/planets.json";
import films from "../db/films.json";
import species from "../db/species.json";
import vehicles from "../db/vehicles.json";
import starships from "../db/starships.json";

import { IPeople } from "interface/IPeople";

import fs from "fs";
import path from "path";

class BackendModel {

    public getPeopleByID = (id: number) => peoples[--id];
    
    public getPlanetsByID = (id: number) => planets[--id];

    public getFilmsByID = (id: number) => films[--id];
    
    public getSpeciesByID = (id: number) => species[--id];

    public getVehiclesByID = (id: number) => vehicles[--id];
    
    public getStarshipsByID = (id: number) => starships[--id];

    // public insertPeople = (people: IPeople): boolean => {
    //     console.log(path.join(__dirname, 'db'));
    //     let data = fs.readFileSync('dist/db/people.json', 'utf8');
    //     let peopleData: IPeople[] = JSON.parse(data);
    //     peopleData.push(people);
    //     data = JSON.stringify(peopleData);
    //     fs.writeFile('dist/db/people.json', data, (err) => {
    //         if (err) throw err;
    //         return false;
    //     });
    //     return true;
    // }

    // public updatePeople = (people: IPeople): boolean => {
    //     console.log('UPDATE');
    //     return true;
    // }

    // public deletePeople = (id: number): boolean => {
    //     console.log('DELETE');
    //     return true;
    // }
}

export default BackendModel;