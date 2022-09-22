export class indexModel {

    private _onGame : boolean;
    private _loose : boolean;
    private _transitionTime : number;
    private _sequence: HTMLElement[];
    private _userSequence : string[];
    private _score: any[];

    constructor() {

        this._onGame = false;
        this._loose = false;
        this._transitionTime = -1;
        this._sequence = [];
        this._userSequence = [];
        this._score = [];
    }

    public get onGame(){

        return this._onGame;
    }

    public set onGame(value : boolean){

        this._onGame = value;
    }

    public get loose(){

        return this._loose;
    }

    public set loose(value : boolean){

        this._loose = value;
    }

    public get transitionTime(){

        return this._transitionTime;
    }

    public set transitionTime(value : number){

        this._transitionTime = value;
    }

    public get sequence() {

        return this._sequence;
    }

    public pushToSequence(value : HTMLElement){

        this._sequence.push(value);
    }

    public get userSequence() {

        return this._userSequence;
    }

    public pushToUserSequence(value : string){

        this._userSequence.push(value);
    }

    public clearSequences(){

        this._sequence = [];
    }

    public get score(){

        return this._score;
    }

    public pushToScore(value : any){

        this._score.push(value)
    }
}