var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class FrontendModel {
    constructor() {
        this.httpPeople = (url, method, fn) => __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url, { method: method });
            const data = yield response.json();
            const numberPattern = /\d+/g;
            let id = data.homeworld.match(numberPattern);
            const homeworldUrl = `${this.url}planets/${id}/`;
            const responseHomeworld = yield fetch(homeworldUrl, { method: 'get' });
            const dataHomeworld = yield responseHomeworld.json();
            data.homeworld = dataHomeworld;
            if (Array.isArray(data.films)) {
                for (let i = 0; i < data.films.length; i++) {
                    id = data.films[i].match(numberPattern);
                    const filmUrl = `${this.url}films/${id}/`;
                    const responseFilm = yield fetch(filmUrl, { method: 'get' });
                    const dataFilm = yield responseFilm.json();
                    data.films[i] = dataFilm;
                }
            }
            if (Array.isArray(data.species)) {
                for (let i = 0; i < data.species.length; i++) {
                    id = data.species[i].match(numberPattern);
                    const speciesUrl = `${this.url}species/${id}/`;
                    const responseSpecies = yield fetch(speciesUrl, { method: 'get' });
                    const dataSpecies = yield responseSpecies.json();
                    data.species[i] = dataSpecies;
                }
            }
            if (Array.isArray(data.vehicles)) {
                for (let i = 0; i < data.vehicles.length; i++) {
                    id = data.vehicles[i].match(numberPattern);
                    const vehicleUrl = `${this.url}vehicles/${id}/`;
                    const responseVehicle = yield fetch(vehicleUrl, { method: 'get' });
                    const dataVehicle = yield responseVehicle.json();
                    data.vehicles[i] = dataVehicle;
                    console.log(vehicleUrl);
                }
            }
            if (Array.isArray(data.starships)) {
                for (let i = 0; i < data.starships.length; i++) {
                    id = data.starships[i].match(numberPattern);
                    const starshipUrl = `${this.url}starships/${id}/`;
                    const responseStarship = yield fetch(starshipUrl, { method: 'get' });
                    const dataStarship = yield responseStarship.json();
                    data.starships[i] = dataStarship;
                }
            }
            fn(data);
        });
        this.url = 'http://localhost:1802/api/';
    }
    getPeopleByID(id, fn) {
        this.httpPeople(`${this.url}people/${id}/`, 'get', fn);
    }
}
