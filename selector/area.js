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
     */
    constructor(cssclass){
        const container = this.#getContainer();
        this.#div = document.createElement('div');//ezen a területen fogunk dolgozni a leszármazottaknál
        this.#div.className = cssclass;
        container.appendChild(this.#div);
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
    constructor(cssClass){
        super(cssClass);
    }
}

/**
 * Ez fogja tartalmazni az igaznak velt kivalogatott kartyainkat
 */
class SolutionArea extends Area{
    constructor(cssClass){
        super(cssClass);
    }
}