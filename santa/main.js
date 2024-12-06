/**
 * @type {{
 *   firstName: string;
 *   lastName: string;
 *   products: string[];
 *   area: string;
 * }[]}
 */
const companionList = [
    {
        firstName: 'Géza',
        lastName: 'Kiss',
        area: 'plastic',
        products: ['kisauto', 'barbibaba']
    },
    {
        firstName: 'Ferenc',
        lastName: 'Tóth',
        area: 'paper',
        products: ['könyv']
    },
    {
        firstName: 'Gábor',
        lastName: 'Nagy',
        area: 'plastic',
        products: ['zokni']
    },
]
const factory = new Factory();

document.getElementById('companion').addEventListener('submit',function(e){
    e.preventDefault();
    const form =  e.currentTarget
    addCompanion(form, factory);
});

document.getElementById('product').addEventListener('submit',function(e){
    e.preventDefault();
    const form = e.currentTarget;
    addProductForm(form, factory)
});

/**
 * table render
 */
function initTable(){
for(let i = 0; companionList.length > i; i++){
    const currentElement = companionList[i];//beletesszük egy változóba a lista aktuális elemét

    const companion = new Companion(i, currentElement.firstName, currentElement.lastName, 
        currentElement.area)//példányosítjuk a Companiont, a currentElement tulajdonságaival meghívjuk a megadott paramétereket
    
    for(const product of currentElement.products){//azért ezzen megyünk végig mert egyesével adjuk hozzá a productokat a companionhoz
        companion.addProduct(product);//a companion példánynak meghívod az addProduct függvényét és beletesszük az aktuális prodoktumot
    }
    factory.addMano(companion);
    
}
console.log(factory);
    // TODO 6
}


initTable()

/**
 * 
 * eventlistener callback for the button click of companion
 * 
 * @param {EventTarget} e 
 */
function checkEventListener(e){
    const row = e.currentTarget.parentElement.parentElement;
    const companionId = row.id;
    // TODO 10
}
