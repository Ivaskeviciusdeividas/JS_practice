class Cup {
    //3 properties. talpa, spalva, currentFill. 2 methods : atsigerti(kiek isgerti) , pripilti(kiek pripilti). Privatus props ir getteriai setteriai
    //if atsigerti > current fill, error = bandoma atsigerti per daug
    constructor(talpa, spalva, currentFill){
        this._talpa = talpa;
        this._spalva = spalva;
        this._currentFill = currentFill;
    }

    get currentFill() {
        return this._currentFill;
    }

    set currentFill(currentFill) {
        if(this.talpa < currentFill){
            throw new Error("cup is overflowing")
        }
       this._currentFill = currentFill;
    }
    get talpa(){
        return this._talpa;
    }
    set talpa(talpa){
        this._talpa = talpa;
    }
    atsigerti(kiek_isgerti){
        if(this.currentFill < kiek_isgerti){
            console.log("bandoma atsigerti per daug");
            return ;
        }
        this.currentFill -= kiek_isgerti;
    }
    //jei pripilti per daug, mest errrora kad persipilde ir track kiek perisipilde ir pilnas puodelis.
    prisipilti(kiek_prisipilti){
        const totalFill= this.currentFill + kiek_prisipilti;
        if(totalFill > this.talpa){
            this.currentFill = this.talpa;
            const overflow = totalFill - this.talpa;
            console.log(`persipilde ${overflow}`);
            return;
        }
        this.currentFill += kiek_prisipilti;
    }
}
const cup = new Cup (3, "juoda", 1.5);
//console.log(cup);
//cup.atsigerti(4);
//console.log(cup);
cup.prisipilti(15)
console.log(cup);
