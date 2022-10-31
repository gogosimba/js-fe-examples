
// skapa ett objekt, konvertera till JSON, lagra det hela i localstorage
function store() {
    let brand = document.getElementById('carBrand').value;
    let price = document.getElementById('carPrice').value;
    let key = document.getElementById('key').value;

    const car = {
        brand: brand,
        price: price,
        color: color,
    }
    localStorage.setItem(key, JSON.stringify(car));
}

// ta in datan till objektet från användaren, visa datan på skärmen
function retriveRecords() {
    let key = document.getElementById('retrieveKey').value;
    let records = localStorage.getItem(key);
    let paragraph = document.createElement('p');
    let info = document.createTextNode(records);
    paragraph.appendChild(info);
    let element = document.getElementById('retrieve');
    element.appendChild(paragraph);
}
// ta bort datan via nyckeln (id)
function removeItem() {
    let key = document.getElementById('removeKey').value;
    localStorage.removeItem(key);
}

// ta bort all data via clear
function clearStorage() {
    localStorage.clear();
}

// fixa knappar
window.onload = function () {
    document.getElementById('carForm').onsubmit = store;
    document.getElementById('retrieveButton').onclick = retriveRecords;
    document.getElementById('clearButton').onclick = clearStorage;
    document.getElementById('removeButton').onclick = removeItem;
}