export class indexModel {
    constructor() {
        this._generatedSequence = { 0: [], 1: [], 2: [], 3: [], 4: [] };
        this._iterativeSequence = { 0: [], 1: [], 2: [], 3: [], 4: [] };
        this._bingo = false;
    }
    get generatedSequence() {
        return this._generatedSequence;
    }
    set generatedSequence(obj) {
        this._generatedSequence[obj.letter].push(obj.value);
    }
    get iterativeSequence() {
        return this._iterativeSequence;
    }
    set iterativeSequence(obj) {
        this._iterativeSequence[obj.letter].push(obj.value);
    }
    get bingo() {
        return this._bingo;
    }
    set bingo(value) {
        this._bingo = value;
    }
}
