export class indexModel {

    private _onGame : boolean;
    private _round : number;
    private _level : any;
    private _transitionTime : number;
    private _sequence: HTMLElement[];
    private _userContSequence : number;
    private _score: any[];
    private _sounds : any;

    constructor() {

        this._onGame = false;
        this._round = 0;
        this._level = {'Easy' : 1000, 'Intermediate' : 700, 'Hard' : 400};
        this._transitionTime = -1;
        this._sequence = [];
        this._userContSequence = 0;
        this._score = JSON.parse(localStorage.getItem("score") || "[]");
        this._sounds = {
            'G' : new Audio('./../../public/resources/greenSound.mp3'),
            'R' : new Audio('./../../public/resources/redSound.mp3'),
            'B' : new Audio('./../../public/resources/blueSound.mp3'),
            'Y' : new Audio('./../../public/resources/yellowSound.mp3'),
            'E' : new Audio('./../../public/resources/errorSound.mp3')
        };
    }

    public get onGame(){

        return this._onGame;
    }

    public set onGame(value : boolean){

        this._onGame = value;
    }

    public get round(){

        return this._round;
    }

    public set round(value : number){

        this._round = value;
    }

    public get level(){

        return this._level;
    }

    // public set level(value : string){

    //     this._level = value;
    // }

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

    public get userContSequence() {

        return this._userContSequence;
    }

    public set userContSequence(value : number){

        this._userContSequence = value;
    }

    public pushToScore(value : any){

        this._score.push(value);
        localStorage.setItem("score", JSON.stringify(this._score));
    }

    public get sounds(){

        return this._sounds;
    }

    public reset(){

        this._onGame = false;
        this._round = 0;
        this._transitionTime = -1;
        this._sequence = [];
        this._userContSequence = 0;
    }
}