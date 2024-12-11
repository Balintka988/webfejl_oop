/**
 * Create a row for the companions table;
 * 
 * @param {Companion} companion 
 */
function createRow(companion){
    const table = document.getElementById('companions');
    const tbody = table.querySelector('tbody');

    const tableRow = document.createElement('tr');
    tbody.appendChild(tableRow);

    const nameCell = createCell(tableRow);
    nameCell.innerHTML = companion.getName();

    const reszlegCell = createCell(tableRow);
    reszlegCell.innerHTML = companion.reszleg;

    tableRow.id = companion.id;//minden sorhoz hozzárendeljük a companion id-ját
   // TODO 7

    const action = createCell(tableRow)
    const button = document.createElement('button');
    button.innerHTML = 'Megtekint';
    action.appendChild(button)
    button.addEventListener('click', checkEventListener)
}

/**
 * Create a new td cell
 * 
 * @param {HTMLTableRowElement} parentElement 
 * @returns {HTMLTableCellElement}
 */
function createCell(parentElement){
    const newCell = document.createElement('td');
    parentElement.appendChild(newCell);
    return newCell;
}

/**
 * 
 * Append a new companion to the selector
 * 
 */
function appendToSelector(manocska){
    const productForm = document.getElementById('product')
    const selector = productForm.querySelector('#companionlist');

    const option = document.createElement('option');
    // TODO 11.

    option.text =  manocska.getName()//itt állítom be az option elem szövegét a companion nevére
    option.value = manocska.id;

    selector.appendChild(option);
}


/**
 * 
 * Refresh the productlist table
 * 
 * @param {Companion} companion 
 */
function refreshProductList(companion){ //TODO

    const companionName = document.getElementById('companion_name');
    // TODO 10
    companionName.innerHTML = companion.getName()// Beállítja a companion nevét amit a getName-el kér el

    companionName.style.display = 'block';
    const productTable = document.getElementById('products');
    productTable.style.display = 'table';
    const productTableBody = productTable.querySelector('tbody')
    productTableBody.innerHTML = '';

    for (let i = 0; i < companion.productList.length; i++) // Egy ciklus, amely végigiterál a companion productList tömbjén
        {
            const product = companion.productList[i]; // A product a productList tömb aktuális eleme
            
            const row = document.createElement('tr'); 
            const td = document.createElement('td'); 
            td.innerHTML = product; // Beállítja a <td> (cella) tartalmát a product értékére, azaz a termék nevére

            row.appendChild(td); // Hozzáadja a <td> elemet a sorhoz (<tr>), vagyis a cellát a táblázat sorához kapcsolja
        
            productTableBody.appendChild(row); // Hozzáadja a teljes <tr> elemet (a cellákkal együtt) a táblázat törzséhez (<tbody>).
        }
    // TODO 10
}

/**
 * 
 * Add companion function for the companion formelement
 * 
 * @param {HTMLFormElement} form 
 */
function addCompanion(form, factory){ //TODO 
    const firstName =form.querySelector('#cfirstname')
    const lastname =form.querySelector('#clastname')
    const area = form.querySelector('#carea')
    const firstNameValue = firstName.value;
    const lastNameValue = lastname.value;
    const areaValue = area.value;

    const getId = factory.generateId();
    const newCompanion = new Companion(getId, firstNameValue, lastNameValue, areaValue);
    factory.addMano(newCompanion);

    // TODO 6
}

/**
 * 
 * Add product function for the productformelement
 * 
 * @param {HTMLFormElement} form 
 */

function addProductForm(form, factory){ // TODO
    const selector =form.querySelector('#companionlist');
    const productName = form.querySelector('#productname');
    const companionId = selector.value;
    const product = productName.value;
    factory.productsToMano(product, companionId);
    // 12
}