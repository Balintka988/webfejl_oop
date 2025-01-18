class ArrayList{
    /**
     * Ez tárolja el az array list hosszát
     * @type{Number}
     */
    #length //privát tulajdonság a classnak
    #state

    get Count(){
        return this.#length;
    }

    constructor(){
        this.#length = 0;
        this.#state = {};
    }

    Contains(item){
        for(const variable in this.#state){
            if(this.#state[variable] === item){
                return true;
            }
        }
        return false;
        
    }

    Add (item){
        //hossz megnövelése
        //objektum beletétele 

        //1.példány aktuális hosszának eltárolása egy változóba
        const index = this.#length;

        //2.belső objektum index tulajdonságának megadjuk a bemeneti értékét
        this.#state[index] = item;

        //az aktuális indexel szeretnénék elérni (pl.:array[0]) az aktális elemet a hozzáadott példányon keresztül
        Object.defineProperty(this, index, {
            get: function(){
                return this.#state[index];
            },
            set: function(value){
                this.#state[index] = value;
            },
            //writable: true,
            enumerable: true
        })


        //3.inkrementáljuk a length tulajdonságot
        this.#length++;
    }

    Clear(){
        this.#length = 0;
        this.#state = {};
        for (const kulcs in this){
            delete this[kulcs];
        }
    }


}
const list = new ArrayList();

const nev1 = {nev: "péter"};
const nev2 = {nev: "Lajos"};
const szam1 = {szam: 5};
const szam2 = {szam: 3};

list.Add(nev1);
list.Add(nev2);
list.Add(szam1);

console.log(list.Contains(nev1)); // true
console.log(list.Contains(nev2)); // true
console.log(list.Contains(szam1)); // true
console.log(list.Contains(szam2)); // false


//const kakas = {};
//Object.defineProperty(kakas, "nev", {
//    value: "Géza",
//    writable: true
//})
//kakas.nev = 'asd';
//console.log(kakas);
//
//const pers = {};
//pers.a = 'Ferenc';
//pers['a'] = 'józsi';
//pers[0] = 'tojás';
//console.log(pers);