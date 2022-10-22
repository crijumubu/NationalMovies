export class FrontendModel {

    public url: string;

    constructor () {
        /* Opcion 1 - Solicitar la informacion directamente desde la API online */
        this.url = 'https://swapi.dev/api/'; 

        /* Opcion 2 - Solicitar la informacion a traves del backend el cual para este caso se encuentra alojado en una maquina virtual con una direccion ip dentro de mi red */
        //this.url = 'http://192.168.12.22:5500/api/';
    }

    public getPeopleByID(id: number, fn: Function): void {
        this.httpPeople(`${this.url}people/${id}/`, 'get', fn);
    }

    public httpPeople = async (url: string, method: string, fn: Function) => {
        const response = await fetch(url, {method: method});
        const data = await response.json();

        const numberPattern = /\d+/g;

        let id = data.homeworld.match(numberPattern);
        const homeworldUrl = `${this.url}planets/${id}/`;
        const responseHomeworld = await fetch(homeworldUrl, {method: 'get'})
        const dataHomeworld = await responseHomeworld.json();
        data.homeworld = dataHomeworld;

        if (Array.isArray(data.films)){

            for (let i = 0; i < data.films.length; i++){

                id = data.films[i].match(numberPattern);
                
                const filmUrl = `${this.url}films/${id}/`;
                const responseFilm = await fetch(filmUrl, {method: 'get'})
                const dataFilm = await responseFilm.json();
                data.films[i] = dataFilm;
            }
        }
        if (Array.isArray(data.species)){

            for (let i = 0; i < data.species.length; i++){

                id = data.species[i].match(numberPattern);
                
                const speciesUrl = `${this.url}species/${id}/`;
                const responseSpecies = await fetch(speciesUrl, {method: 'get'})
                const dataSpecies = await responseSpecies.json();
                data.species[i] = dataSpecies;
            }
        }
        if (Array.isArray(data.vehicles)){

            for (let i = 0; i < data.vehicles.length; i++){

                id = data.vehicles[i].match(numberPattern);
                
                const vehicleUrl = `${this.url}vehicles/${id}/`;
                const responseVehicle = await fetch(vehicleUrl, {method: 'get'})
                const dataVehicle = await responseVehicle.json();
                data.vehicles[i] = dataVehicle;

                console.log(vehicleUrl);
            }

        }
        if (Array.isArray(data.starships)){

            for (let i = 0; i < data.starships.length; i++){

                id = data.starships[i].match(numberPattern);
                
                const starshipUrl = `${this.url}starships/${id}/`;
                const responseStarship = await fetch(starshipUrl, {method: 'get'})
                const dataStarship = await responseStarship.json();
                data.starships[i] = dataStarship;
            }
        }
        fn(data);
    }
}
