"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const people_json_1 = __importDefault(require("../db/people.json"));
const planets_json_1 = __importDefault(require("../db/planets.json"));
const films_json_1 = __importDefault(require("../db/films.json"));
const species_json_1 = __importDefault(require("../db/species.json"));
const vehicles_json_1 = __importDefault(require("../db/vehicles.json"));
const starships_json_1 = __importDefault(require("../db/starships.json"));
class BackendModel {
    constructor() {
        this.getPeopleByID = (id) => people_json_1.default[--id];
        this.getPlanetsByID = (id) => planets_json_1.default[--id];
        this.getFilmsByID = (id) => films_json_1.default[--id];
        this.getSpeciesByID = (id) => species_json_1.default[--id];
        this.getVehiclesByID = (id) => vehicles_json_1.default[--id];
        this.getStarshipsByID = (id) => starships_json_1.default[--id];
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
}
exports.default = BackendModel;
