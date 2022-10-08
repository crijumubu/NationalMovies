export class indexModel {

    private _generatedSequence : {[key : number] : number[]};
    private _iterativeSequence : {[key : number] : number[]};
    private _bingo : boolean;

    constructor() {
        this._generatedSequence = {0 : [], 1 : [], 2 : [], 3 : [], 4 : []};
        this._iterativeSequence = {0 : [], 1 : [], 2 : [], 3 : [], 4 : []};
        this._bingo = false;
    }

    public get generatedSequence(){
        return this._generatedSequence;
    }

    public set generatedSequence(obj : any){
        this._generatedSequence[obj.letter].push(obj.value);
    }

    public get iterativeSequence(){
        return this._iterativeSequence;
    }
    
    public set iterativeSequence(obj : any){
        this._iterativeSequence[obj.letter].push(obj.value);
    }

    public get bingo(){
        return this._bingo;
    }

    public set bingo(value : boolean){
        this._bingo = value;
    }
}