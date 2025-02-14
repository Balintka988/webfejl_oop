class Area{
    /**
     * @type {HTMLDivElement} az adott area peldany teruletenek az eleme
     */
    #div;

    get div(){
        return this.#div
    }

    /**
     * 
     * @param {string} cssclass beallitja az adott terulet css osztalyat
     * @param {Manager} manager
     */
    constructor(cssclass, manager){
        const container = this.#getContainer();
        this.#div = document.createElement('div');//ezen a területen fogunk dolgozni a leszármazottaknál
        this.#div.className = cssclass;
        container.appendChild(this.#div);
        manager.setFinishCallback((eredmeny) => {
            container.innerHTML = '';
            const div = document.createElement("div");
            div.className = "result";
            div.textContent = eredmeny;
            container.appendChild(div);
        })
    }

    /**
     * megnezi hogy rendelkezik e container classal rendelkezo div element
     * 
     * @return {HTMLDivElement} az area szulo div containere
     */
    #getContainer(){
        let container = document.querySelector('.container');
        if(!container){
            container = document.createElement("div");
            container.className = 'container';
            document.body.appendChild(container);
        }
        return container;
    }
}

/**
 * Ez fogja tartalmazni a paklinkat mindig egy darab kartyat jelenit meg
 */
class DeckArea extends Area{
    /**
     * 
     * @param {string} cssClass A css classt tartalmazza
     * @param {Manager} manager a manager példányt tartalmazza
     */
    constructor(cssClass, manager){
        super(cssClass, manager);
        manager.setNextCardCallback((kartyaszoveg) => {//Ez fog lefutni amikor új kártyát húzunk, tehát meghívjuk a nextCard callbackets
            this.div.innerHTML = "";
            const skipbutton = document.createElement('button');
            skipbutton.textContent = 'skip';
            skipbutton.addEventListener('click', ()=>{
                manager.nextCard();
            })
            this.div.appendChild(skipbutton);
            const cardElement = document.createElement("div");
            cardElement.textContent = kartyaszoveg;
            cardElement.className = "largecard";
            cardElement.addEventListener('click', ()=>{
                manager.nextCard(kartyaszoveg);
            })
            this.div.appendChild(cardElement);
        })
    }
}

/**
 * Ez fogja tartalmazni az igaznak velt kivalogatott kartyainkat
 */
class SolutionArea extends Area{
    /**
     * 
     * @param {string} cssClass 
     * @param {Manager} manager 
     */
    constructor(cssClass, manager){
        super(cssClass, manager);
        manager.setAppendCardToSolutionCallback((kartyaszoveg) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.textContent = kartyaszoveg;
            this.div.appendChild(card);
        })
    }
}