import { IPlanet } from "./IPlanet";
import { IFilm } from "./IFilm";
import { ISpecies } from "./ISpecies";
import { IStarship } from "./IStarship";
import { IVehicle } from "./IVehicle";

export interface IPerson {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: IPlanet;
    films: IFilm;
    species: ISpecies;
    vehicles: IVehicle;
    starships: IStarship;
    created: Date;
    edited: Date;
    url: string;
}