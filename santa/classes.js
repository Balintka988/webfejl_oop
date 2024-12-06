
class Factory {
 // TODO 1, 2, 3, 4, 9, 10
    constructor(){
        this.manoList = [] //factory példányának lesz manolist tulajdonsága
    }
    addMano(mano){//bemeneti paraméterként manót vár amit majd hozzátesz a manolist tulajdonsághoz
        this.manoList.push(mano);//a pushnak azért van mano paramétere mert azt töltjük fel a listába
    }
}

class Companion{
 // TODO 5
    constructor(id, keresztnev, vezeteknev, reszleg){//azért kellenek ezek mert ezek nélkül nem lehet a példát értelmezni
        this.id = id;
        this.keresztnev = keresztnev;
        this.vezeteknev = vezeteknev;
        this.reszleg = reszleg;
        this.productList = [];//azért kell ez az üres tömb mert amikor beregisztrál akkor még nem rendelkezik productokkal
    }

    getName(){//nem kell neki parameter mert látja a példány paraméterét

    }
}