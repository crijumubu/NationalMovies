export class indexView{

    public getElement = (selector: string): HTMLElement | null => document.getElementsByClassName(selector)[0]! as HTMLElement;

    public getElements = (selector: string): any => document.getElementsByClassName(selector)!;

    public addElementClass(element : HTMLElement, classElement : string){ element.classList.add(classElement);}

    public removeElementClass(element : HTMLElement, classElement : string){ element.classList.add(classElement);}

    public displayTableNumbers(objs : []) : void{

        let divContents = this.getElements('content');
        let letterCount = 0;
        let valueCount = 0;

        for (let i=0; i<24; i++){

            if (letterCount == 5){
                
                letterCount = 0
                valueCount ++;
            }

            if (objs[letterCount][valueCount] == -1){
                letterCount ++;       
            }

            divContents[i].innerHTML = objs[letterCount][valueCount];
            letterCount ++;
        }
    }

    public changeColorDiv(element : HTMLElement, whiteToGrey : boolean){

        if (whiteToGrey){
            element.style.background = '#E6E6E6';
        }else{
            element.style.background = 'white';
        }
    }

    public addNewSquare(newOnSequence : any){

        let pSequence = this.getElement('pSequence')!;

        let letter = '';
        let value = '';
        
        switch (newOnSequence.letter){
            case(0):
                letter = 'B';
                break;
            case(1):
                letter = 'I';
                break;
            case(2):
                letter = 'N';
                break;
            case(3):
                letter = 'G';
                break;
            case(4):
                letter = 'O';
                break;
        }

        if (pSequence.textContent != ''){
            value = " | Letter: " + letter + ", value: " + newOnSequence.value;
        }else{
            value = "Letter: " + letter + ", value: " + newOnSequence.value;
        }

        pSequence.innerHTML += value;
    }
}