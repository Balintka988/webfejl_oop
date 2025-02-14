/**
 * @callback NextCardCallback
 * @param {sting} text a kirendelendo kartya szovege
 * 
 * @callback AppendToCardSolutionCallback
 * @param {sting} text a kartya szovege
 * 
 * @callback FinishCallback
 * @param {string} result ami az eredmenyt tartalmazza
 */

/**
 * A kommunikacioert felel a deck és az area között
 */
class Manager{
    /**
     * @type {card[]}
     */
    #array;

    /**
     * @type {Object} Az igaznk vélt állításokat fogja eltárolni
     */
    #solution

    /**
     * @type {Number} aktualis kartya szama
     */
    #currentCardNumber;

    /**
     * @type {nextCardCallback} aktualis kartya szama
     */
    #nextCardCallback;

    /**
     * @type {AppendCardToSolutionCallback} aktualis kartya szama
     */
    #appendCardToSolutionCallback;

    /**
     * @type {FinishCallback}
     */
    #finishCallback;

    constructor(array){
        this.#array = array;
        this.#solution = {};
        this.#currentCardNumber = 0;
    }

    /**
     * 
     * Beállítja a paraméter alapján a nextCardCallbacket
     * @param {NextCardCallback} callback  Tartalmazza a logikt ami le fog futni amikor meghyjuk a fuggvéynunkert
     */
    setNextCardCallback(callback){
        this.#nextCardCallback = callback;
    }

    /**
     * 
     * Beállítja a paraméter alapján a AppendToCardSolutionCallback
     * @param {AppendToCardSolutionCallback} callback  Tartalmazza a logikt ami le fog futni amikor meghyjuk a fuggvéynunkert
     */
    setAppendCardToSolutionCallback(callback){
        this.#appendCardToSolutionCallback = callback;
    }

    /**
     * 
     * Beállítja a paraméter alapján a FinishCallback
     * @param {FinishCallback} callback  Tartalmazza a logikt ami le fog futni amikor meghyjuk a fuggvéynunkert
     */
    setFinishCallback(callback){
        this.#finishCallback = callback;
    }

    /**
     * Ezt a függvényt akkor hívjuk majd meg ha egy új kártyára van
     * szükségünk(ha a kártáyra kattintunk vagy ha a skippre)
     * @param {string} answer
     */
    nextCard(answer){
        if(answer){//ha a kartayra lépunk akjkor
            this.#solution[this.#currentCardNumber] = answer;//eltrároljuk az aktuális választ
            this.#appendCardToSolutionCallback(answer);
            //Az objektumba csak azon kártyák számánál lesz érték amit igaznak vélünk
        }
        this.#currentCardNumber++;
        if(this.#currentCardNumber< this.#array.length){
            this.#nextCardCallback(this.#array[this.#currentCardNumber].text)
        }else{
            let sum = 0;
            for(const index in this.#array){
                if(this.#array[index].correct){
                    if(this.#solution[index]){
                        sum++;
                    }
                }else{
                    if(!this.#solution[index]){
                        sum++;
                    }
                }

            }
            const result = `A feladatban elert pontszam az ${this.#array.length}/${sum}`;
            this.#finishCallback(result);
        }
    }
    start(){
        this.#nextCardCallback(this.#array[0].text) 
    }
}