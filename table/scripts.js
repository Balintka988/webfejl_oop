const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]
//1.lépés
class Person{
    constructor(obj){
        this.firstname1 = obj.firstname1;
        this.firstname2 = obj.firstname2;
        this.lastname = obj.lastname;
    }
    render(parentElement){
        const row = document.createElement('tr');
        parentElement.appendChild(row);

        const td3 = document.createElement('td');
        td3.innerHTML = this.lastname;
        row.appendChild(td3);

        const td1 = document.createElement('td');
        td1.innerHTML = this.firstname1;
        row.appendChild(td1);

        if(this.firstname2 !== undefined){
            const td2 = document.createElement('td');
            td2.innerHTML = this.firstname2;
            row.appendChild(td2);
        }
        else{
            td1.colSpan = 2;
        }
    }
}

//2.lépés
function init(){
    for(const pers of array){
        const per = new Person(pers);
        per.render(document.getElementById('tbodyId'));
    }
}
init();


class formController{
    #form
    constructor(form){
        this.#form = form;
    }
    #getInputById(id){
        return this.#form.querySelector('#' + id);
    }
    get lastname(){
        const getId = this.#getInputById('lastname');
        return getId.value;
    }
    get firstname1(){
        const getId = this.#getInputById('firstname1');
        return getId.value;
    }
    get firstname2(){
        const getId = this.#getInputById('firstname2');
        return getId.value;
    }
}