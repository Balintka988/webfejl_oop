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
    /**
     * @param {Datamanager} datamanager
     */
    constructor(datamanager){
        const table = document.createElement('table');
        document.body.appendChild(table);

        const tbody = document.createElement('tbody');
        table.appendChild(tbody);

        datamanager.setUpdateCallback((persons) => {

            tbody.innerHTML = '';

            for (const pers of persons){
                const tr = document.createElement('tr');
                tbody.appendChild(tr);
                
                const td1 = document.createElement("td");
                td1.innerHTML = pers.nev;
                tr.appendChild(td1);

                const td2 = document.createElement("td");
                td2.innerHTML = pers.eletkor;
                tr.appendChild(td2);
            }

        })
    }
}
const datamanager = new Datamanager([{eletkor:14, nev:"Gipszjakab"}]);
const datatable = new Datatable(datamanager)

const input = document.createElement("input");
document.body.appendChild(input);

input.addEventListener('input', function(e){
    
})