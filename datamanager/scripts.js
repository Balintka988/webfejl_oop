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
    }
    /**
     * 
     * @param {Number} age 
     */
    filterAge(age){
        const age_result = [];
        for(const elem of this.#array){
            if(elem.eletkor === age){
                age_result.push(elem);
            }
        }
        this.#updateCallback(age_result);
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
    
}


class Datatable{
    #tbody;//a tbody-nkat egy privát tulajdonságban eltároltuk
    /**
     * @param {Datamanager} datamanager
     */
    constructor(datamanager){
        const table = document.createElement('table');
        document.body.appendChild(table);

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
    datamanager.filterAge(age_input);
});