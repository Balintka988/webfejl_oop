/**
 * A managerbe lesz majd egy array amikbe ezek lesznek
 */
class Card{
    /**
     * @type {string}
     */
    #text;

    /**
     * @type {boolean}
     */
    #correct;
    
    /**
     * @returns {string} a kartya szoveges tartalma
     */
    get text(){
        return this.#text;
    }

    /**
     * @returns {boolean} A válasz igazság értéke
     */
    get correct(){
        return this.#correct;
    }

    /**
     * 
     * @param {string} text a kartya szovege
     * @param {boolean} correct a kartya igaz-e
     */
    constructor(text, correct){
        this.#text = text,
        this.#correct = correct;
    }
}