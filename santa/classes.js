
class Factory {
 // TODO 1, 2, 3, 4, 9, 10
    constructor(){
        this.manoList = [] //factory példányának lesz manoList tulajdonsága
    }
    addMano(mano){//bemeneti paraméterként manót vár amit majd hozzátesz a manolist tulajdonsághoz
        this.manoList.push(mano);//a pushnak azért van mano paramétere mert azt töltjük fel a listába
        createRow(mano);
        appendToSelector(mano);
    }
    generateId(){
        return this.manoList.length;// Az uj id a manoList aktualis hosszaval lesz egyenlo 
    }
    showProducts(id){
        for(let i = 0; i < this.manoList.length; i++){// Végigmegyünk a manoList összes elemén
            if(this.manoList[i].id == id){// Ha a jelenlegi elem id-je megegyezik a megadott id-vel akkor:
                refreshProductList(this.manoList[i]);// Meghívjuk a refreshProductList függvényt, hogy frissítse az adott companion terméklistáját
            }
        }
    }
    productsToMano(product, id){
        for(let i = 0; i < this.manoList.length; i++){// Végigmegyünk a manoList összes elemén
            if(this.manoList[i].id == id){
                this.manoList[i].addProduct(product);// Hozzáadjuk a megadott terméket a companion terméklistájához
                this.showProducts(this.manoList[i].id);// Frissítjük a terméklistát a companion azonosítójával
            }
        }
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
        return this.vezeteknev + " " + this.keresztnev;
    }

    addProduct(product){
        this.productList.push(product);
    }
}