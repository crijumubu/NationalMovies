export class FrontendView {
    constructor() {
        this.getElement = (selector) => document.querySelector(selector);
        this.createElement = (tag, classNames) => {
            const element = document.createElement(tag);
            if (classNames)
                element.classList.add(...classNames);
            return element;
        };
        this.fillPeopleTable = (person) => {
            let field;
            this.fillRow('Name', person.name);
            this.fillRow('Height', person.height);
            this.fillRow('Mass', person.mass);
            this.fillRow('Hair color', person.hair_color);
            this.fillRow('Eye color', person.eye_color);
            this.fillRow('Skin color', person.skin_color);
            this.fillRow('Birth year', person.birth_year);
            this.fillRow('Gender', person.gender);
            this.fillRow('Homeworld', person.homeworld);
            field = document.getElementsByClassName('Homeworld');
            this.HTMLTable = field[0];
            this.fillHomeworldTable(person.homeworld);
            this.HTMLTable = this.getElement('#people');
            this.fillRow('Films', person.films);
            if (Array.isArray(person.films)) {
                field = document.getElementsByClassName('Films');
                for (let i = 0; i < person.films.length; i++) {
                    this.HTMLTable = field[i];
                    this.fillFilmTable(person.films[i]);
                }
                this.HTMLTable = this.getElement('#people');
            }
            this.fillRow('Species', person.species);
            if (Array.isArray(person.species)) {
                field = document.getElementsByClassName('Species');
                for (let i = 0; i < person.species.length; i++) {
                    this.HTMLTable = field[i];
                    this.fillSpeciesTable(person.species[i]);
                }
                this.HTMLTable = this.getElement('#people');
            }
            this.fillRow('Vehicles', person.vehicles);
            if (Array.isArray(person.vehicles)) {
                field = document.getElementsByClassName('Vehicles');
                for (let i = 0; i < person.vehicles.length; i++) {
                    this.HTMLTable = field[i];
                    this.fillVehicleTable(person.vehicles[i]);
                }
                this.HTMLTable = this.getElement('#people');
            }
            this.fillRow('Starships', person.starships);
            if (Array.isArray(person.starships)) {
                field = document.getElementsByClassName('Starships');
                for (let i = 0; i < person.starships.length; i++) {
                    this.HTMLTable = field[i];
                    this.fillStartshipTable(person.starships[i]);
                }
                this.HTMLTable = this.getElement('#people');
            }
            this.fillRow('Created', person.created);
            this.fillRow('Edited', person.edited);
            this.fillRow('Url', person.url);
        };
        this.fillHomeworldTable = (homeworld) => {
            this.fillRow('Name', homeworld.name);
            this.fillRow('Rotation period', homeworld.rotation_period);
            this.fillRow('Orbital period', homeworld.orbital_period);
            this.fillRow('Diameter', homeworld.diameter);
            this.fillRow('Climate', homeworld.climate);
            this.fillRow('Gravity', homeworld.gravity);
            this.fillRow('Terrain', homeworld.terrain);
            this.fillRow('Surface water', homeworld.surface_water);
            this.fillRow('Population', homeworld.population);
            //this.fillRow('Residents', homeworld.residents);
            //this.fillRow('Films', homeworld.films);
            this.fillRow('Created', homeworld.created);
            this.fillRow('Edited', homeworld.edited);
            this.fillRow('Url', homeworld.url);
        };
        this.fillFilmTable = (film) => {
            this.fillRow('Name', film.title);
            this.fillRow('Episode id', film.episode_id);
            this.fillRow('Opening crawl', film.opening_crawl);
            this.fillRow('Director', film.director);
            this.fillRow('Producer', film.producer);
            this.fillRow('Release date', film.release_date);
            //this.fillRow('Characters', film.characters);
            //this.fillRow('Planets', film.planets);
            //this.fillRow('Starships', film.starships);
            //this.fillRow('Vehicles', film.vehicles);
            //this.fillRow('Species', film.species);
            this.fillRow('Created', film.created);
            this.fillRow('Edited', film.edited);
            this.fillRow('Url', film.url);
        };
        this.fillSpeciesTable = (species) => {
            this.fillRow('Name', species.name);
            this.fillRow('Classification', species.classification);
            this.fillRow('Designation', species.designation);
            this.fillRow('Average height', species.average_height);
            this.fillRow('Skin color', species.skin_color);
            this.fillRow('Hair colors', species.hair_colors);
            this.fillRow('Eye colors', species.eye_colors);
            this.fillRow('Average lifespan', species.average_lifespan);
            //this.fillRow('Homeworld', species.homeworld);
            this.fillRow('Language', species.language);
            //this.fillRow('People', species.people);
            //this.fillRow('Films', species.films);
            this.fillRow('Created', species.created);
            this.fillRow('Edited', species.edited);
            this.fillRow('Url', species.url);
        };
        this.fillVehicleTable = (vehicle) => {
            this.fillRow('Name', vehicle.name);
            this.fillRow('Model', vehicle.model);
            this.fillRow('Manufacturer', vehicle.manufacturer);
            this.fillRow('Cost in credits', vehicle.cost_in_credits);
            this.fillRow('Length', vehicle.length);
            this.fillRow('Max atmosphering speed', vehicle.max_atmosphering_speed);
            this.fillRow('Crew', vehicle.crew);
            this.fillRow('Passengers', vehicle.passengers);
            this.fillRow('Cargo capacity', vehicle.cargo_capacity);
            this.fillRow('Consumables', vehicle.consumables);
            this.fillRow('Vehicle class', vehicle.vehicle_class);
            //this.fillRow('Pilots', vehicle.pilots);
            //this.fillRow('Films', vehicle.films);
            this.fillRow('Created', vehicle.created);
            this.fillRow('Edited', vehicle.edited);
            this.fillRow('Url', vehicle.url);
        };
        this.fillStartshipTable = (starship) => {
            this.fillRow('Name', starship.name);
            this.fillRow('Model', starship.model);
            this.fillRow('Manufacturer', starship.manufacturer);
            this.fillRow('Cost in credits', starship.cost_in_credits);
            this.fillRow('Length', starship.length);
            this.fillRow('Max atmosphering speed', starship.max_atmosphering_speed);
            this.fillRow('Crew', starship.crew);
            this.fillRow('Passengers', starship.passengers);
            this.fillRow('Cargo capacity', starship.cargo_capacity);
            this.fillRow('Consumables', starship.consumables);
            this.fillRow('Hyperdrive rating', starship.hyperdrive_rating);
            this.fillRow('MGLT', starship.MGLT);
            this.fillRow('Starship class', starship.starship_class);
            //this.fillRow('Pilots', starship.pilots);
            //this.fillRow('Films', starship.films);
            this.fillRow('Created', starship.created);
            this.fillRow('Edited', starship.edited);
            this.fillRow('Url', starship.url);
        };
        this.HTMLTable = this.getElement('#people');
    }
    fillRow(key, value) {
        if (this.HTMLTable) {
            let row = this.createElement('tr', []);
            let td = this.createElement('td', []);
            td.innerHTML = key + ': ';
            row.appendChild(td);
            td = this.createElement('td', []);
            if (Array.isArray(value)) {
                let ul = this.createElement('ul', ['list-group', 'm-1']);
                let li;
                value.forEach(() => {
                    li = this.createElement('li', ['list-group-item', key]);
                    //li.innerHTML = item;
                    ul.appendChild(li);
                });
                td.appendChild(ul);
            }
            else {
                if (key != 'Homeworld' && key != 'Films' && key != 'Vehicles' && key != 'Starships') {
                    td.innerHTML = value;
                }
                else {
                    let ul = this.createElement('ul', ['list-group', 'm-1']);
                    let li = this.createElement('li', ['list-group-item', key]);
                    ul.appendChild(li);
                    td.appendChild(ul);
                }
            }
            row.appendChild(td);
            this.HTMLTable.appendChild(row);
        }
    }
}
