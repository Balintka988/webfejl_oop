class ArrayList{
    /**
     * Ez tárolja el az array list hosszát
     * @type{Number}
     */
    #length //privát tulajdonság a classnak
    #state
    #arrayTable

    get Count(){
        return this.#length;
    }

    constructor(array = undefined){
        this.#length = 0;
        this.#state = {};
        this.#arrayTable = array;
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
            get: () => {
                return this.#state[index];
            },
            set: (value) => {
                this.#state[index] = value;
            },
            //writable: true,
            enumerable: true
        })
        //11.pont
        if(this.#arrayTable) {
            this.#arrayTable.addPersonRow(item)
        }

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

class ArrayHTMLElement extends HTMLElement{
    #tbody
    constructor(){
        super(); 
    }
    connectedCallback(){
        const table = document.createElement('table');
        this.appendChild(table);

        const thead = document.createElement('thead');
        table.appendChild(thead);

        this.#tbody = document.createElement('tbody');
        table.appendChild(this.#tbody);
    }

    /**
     * 
     * @param {{nev:string, eletkor:Number}} item 
     */
    addPersonRow(item){
        const tr = document.createElement('tr')
        this.#tbody.appendChild(tr)

        const td1 = document.createElement('td');
        td1.innerHTML = item.nev;
        tr.appendChild(td1);

        const td2 = document.createElement('td');
        td2.innerHTML = item.eletkor;
        tr.appendChild(td2);
    }
}
customElements.define('array-table', ArrayHTMLElement)
const arrayTable = new ArrayHTMLElement();
document.body.appendChild(arrayTable);


arrayTable.addPersonRow({nev: "geza", eletkor:14})

const arraylist = new ArrayList(arrayTable);
arraylist.Add({nev:"Karoly", eletkor: 21})

//12.pont
const button = document.createElement("button");
button.innerHTML = "Hozzáadás"
document.body.appendChild(button)

button.addEventListener("click", () => {
    const newPerson = {nev: "János", eletkor:64}
    arraylist.Add(newPerson);
})
