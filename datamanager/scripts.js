/**
 * @typedef {{nev:String, eletkor:Number}}Person
 * @callback UpdateCallback
 * @param {Person[]} Person - ez tartalmazza a listát
 * @returns {void}
 */
class Datamanager{
    /**
     * @type {Person[]}
     */
    #array
    /**
     * @type {UpdateCallback updateCallback} 
     */
    #updateCallback
    
    /**
     * 
     * @param {Person} array
     */
    constructor(array = []){
        this.#array = array;
        this.#updateCallback = () => {};
    }
    /**
     * 
     * @param {UpdateCallback} callback 
     */
    setUpdateCallback(callback){
        this.#updateCallback = callback;
        this.#updateCallback(this.#array)
        
    }
    /**
     * 
     * @param {Person} item
     */
    add(item){
        this.#array.push(item);
        this.#updateCallback(this.#array)
    }
    
    /**
     * 
     * @param {String} eletkor 
     */
    filterName(name){
        const name_result = [];
        for(const elem of this.#array){
            if(elem.nev.includes(name)){
                name_result.push(elem);
            }
        }
        this.#updateCallback(name_result);
    }
    /**
     * 
     * @param {function(Person): boolean} callback 
     * 
     */
    filter(callback){
        const age_result = [];
        for(const elem of this.#array){
            if(callback(elem)){
                age_result.push(elem);
            }
        }
        this.#updateCallback(age_result);
    }

    //orderByAge(){
    //    const result = []
    //    for(const i of this.#array){
    //        result.push(i);
    //    }
    //    for(let i =0; i < result.length-1; i++){
    //        for(let j = i + 1; j<result.length; j++){
    //            if(result[i].eletkor < result[j].eletkor){
    //                const tmp = result[i];
    //                result[i] = result[j];
    //                result[j] = tmp;
    //            }
    //        }
    //    }
    //    this.#updateCallback(result);
    //}
    //orderByName() {
    //    const result = []
    //    for(const i of this.#array){
    //        result.push(i);
    //    }
    //    for (let i =0; i < result.length - 1; i++) {
    //        for (let j = i + 1; j< result.length; j++) {
    //            if (result[i].nev.localeCompare(result[j].nev) < 0) {
    //                const tmp = result[i];
    //                result[i] = result[j];
    //                result[j] = tmp;
    //            }
    //        }
    //    }
    //    this.#updateCallback(result);
    //}

    orderBy(compareCallback) {
        const result = []
        for(const i of this.#array){
            result.push(i);
        }
        for(let i = 0; i < result.length - 1; i++){
            for(let j = i + 1; j < result.length; j++){
                if(compareCallback(result[i], result[j]) > 0){
                    const tmp = result[i];
                    result[i] = result[j];
                    result[j] = tmp;
                }
            }
        }
        this.#updateCallback(result);
    }
}


class Datatable{
    #tbody;//a tbody-nkat egy privát tulajdonságban eltároltuk
    /**
     * @param {Datamanager} datamanager
     */
    constructor(datamanager){
        const table = document.createElement('table');
        document.body.appendChild(table);

        // Létrehozzuk a thead elemet
        const thead = document.createElement('thead');
        table.appendChild(thead);

        const headerRow = document.createElement('tr');
        thead.appendChild(headerRow);
        //------------------------------------------------------------------
        const thName = document.createElement('th');//th html elem létrehozása
        thName.innerHTML = 'Név';//név stringet megadjuk a th elem belső tartalmának
        headerRow.appendChild(thName);//hozzáadjuk a fejléc sorához

        thName.addEventListener('click', () => {//eseménykezelőt csatolunk a név cellájára, kattintással aktiválódik
            datamanager.orderBy((a, b) => a.nev.localeCompare(b.nev));//meghívjuk a datamanager orderBy metódusát amely a tömböt név szerint rendezi, az "a.nev.localeCompare(b.nev)" összehasonlító függvénnyel.
        });

        const thAge = document.createElement('th');
        thAge.innerHTML = 'Életkor';
        headerRow.appendChild(thAge);

        thAge.addEventListener('click', () => {
            datamanager.orderBy((a, b) => b.eletkor - a.eletkor);
        });
        //------------------------------------------------------------------

        this.#tbody = document.createElement('tbody');
        table.appendChild(this.#tbody);

        datamanager.setUpdateCallback((persons) => {
            this.#renderTable(persons);
        })
    }
    
    #renderTable(persons){
        this.#tbody.innerHTML = '';
        for (const pers of persons){
            const tr = document.createElement('tr');
            this.#tbody.appendChild(tr);
            
            const td1 = document.createElement("td");
            td1.innerHTML = pers.nev;
            tr.appendChild(td1);

            const td2 = document.createElement("td");
            td2.innerHTML = pers.eletkor;
            tr.appendChild(td2);
        }
    }
}
const datamanager = new Datamanager([{eletkor:28, nev:"Gipszjakab"}, {eletkor:2, nev:"Gabika"},{eletkor:21, nev:"Celine"},{eletkor:23, nev:"Albert"}, {eletkor:32, nev:"Adél"},]);
const datatable = new Datatable(datamanager)

const input1 = document.createElement("input");
document.body.appendChild(input1);

const input2 = document.createElement("input");
document.body.appendChild(input2);

input1.addEventListener('input', (e) =>{
    datamanager.filterName(input1.value);
});

input2.addEventListener('input', (e) =>{
    const age_input = Number(input2.value);//meghívtuk a Number konstruktorát az input string értékével
    datamanager.filter((pers) => {
        return pers.eletkor === age_input;
    });
});


//------------Új órai--------------------
const input3 = document.createElement("input");
document.body.appendChild(input3);
input3.type = "file";

input3.addEventListener('change', (e) =>{
    const file = e.target.files[0];
    const reader = new FileReader(); //példányosítottuk a FileReader beépített osztályunkat
    reader.readAsText(file);
    reader.onload = (e) =>{//
        //e.currentTarget
        const fileContent = reader.result;
        console.log(fileContent);

        const splitting = fileContent.split("\n");
        for(const split of splitting){
            const split_by_coma = split.split(";");
            const pers = {
                nev: split_by_coma[0],
                eletkor: Number(split_by_coma[1])
            }
            datamanager.add(pers);
        }
    };
});

