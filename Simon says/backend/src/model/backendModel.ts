import database from '../database/people.json';

class BackendModel {

    public get score() {

        return database;
    }

    public newScore(score: {name: string, level: string, score: number}){

        database.push(score);

    }
}

export default BackendModel;