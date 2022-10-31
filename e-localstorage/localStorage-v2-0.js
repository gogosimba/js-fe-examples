// localStorage sparar i värdeparet key/value enligt localStorage("key", "value")

let showCarObjects = document.getElementById('showCars');
let showCar = document.getElementById('showCar');

// store(): color har lagts till och ett meddelande när något sparats
// funktionen sparar i värdeparet "key = unikt id": "value = json-file med tre objekt"
function store() {
    let brandName = document.getElementById('carBrand').value;
    let price = document.getElementById('carPrice').value;
    let color = document.getElementById('color').value;

    const car = {
        brandName: brandName,
        price: price,
        color: color,
    }
   
    localStorage.setItem(uniqueId(), JSON.stringify(car));
}

//uniqueId(): det fungerade inte att ha ett vanligt uppräknande siffror,
// det saknades då ett id-nummer när en post togs bort.
function uniqueId(){
    const id = Math.random().toString(36).substr(2, 9);
    return id;
}

// showListOfItem(): efterfrågad funktion för att visa en lista med 
// sparade loopade objekt, annars visas ett meddelande om att localStorage är tomt
function showListOfItem() {
    let carId;
    if (localStorage.length !== 0) {
        Object.keys(localStorage).forEach(function (key) {
            carId = localStorage.getItem(key);
            let p = document.createElement('p');
            let carObjekt = document.createTextNode(carId);
            p.appendChild(carObjekt);
            showCarObjects = document.getElementById('showCars');
            showCarObjects.appendChild(p);
        });
    }
    else {
        showCarObjects.style.color = "red";
        showCarObjects.innerText = "No items are stored. Be sure to post some."
    }
}

// closeList(): "Tömmer" visning av lista
function closeList() {
    showCarObjects.innerHTML = "";
}

// retriveCarName(): em funktion för att kunna söka på bilars märkesnamn.
// Eftersom store() sparar en json file som value, måste den göras om tillbaka till
// objekt, annars kan inte hitta värdet (value) som ligger i carBrandName.
// Den yttre if-satsen handlar om att ta hand om när användaren klickar på knappen
// utan att ha skrivit in något värde i rutan.
// for-loopen går igenom själva listan. Om ett namn hittas tar if-sats hand om det och skriver ut det,
// och skulle listan inte ha det som söks efter tar else if hand om det (carMatchingCount räknar
// när listan är färdigloopad och är 0 om inget namn hittats)
function retriveCarName() {
    let carBrandName = document.getElementById('retrieveKey').value;
    let carId;
    let carMatchingCount = 0;
    let carObjekt;

    if (carBrandName === null || carBrandName === "") {
        showCar.style.color = "red";
        showCar.innerHTML = "Please enter a car brand name";
    }
    else {
        Object.keys(localStorage).forEach(function (key) {
            carId = localStorage.getItem(key);
            carObjekt = JSON.parse(carId); // här görs stringen om tillbaka till objekt
            if (carObjekt.brandName === carBrandName) {
                let p = document.createElement('p');
                let car = document.createTextNode(carObjekt.brandName + " has the key: " + key);
                p.appendChild(car);
                showCar.style.color = "black";
                showCar.appendChild(p);
                carMatchingCount++;
            }
            else if (carMatchingCount === 0) {
                showCar.style.color = "red";
                showCar.innerText = "No such car brand name exists, please check spelling. "
            }
        });
    }
}

// removeItem(): fungerar i princip som retriveCarName()
function removeItem() {
    let id = document.getElementById('removeId').value;
    if (id === null || id === "") {
        showCar.style.color = "red";
        showCar.innerHTML = "Please enter a valid car id";
    }
    else {
        if (id != undefined) {
            Object.keys(localStorage).forEach(function (key) {
                carId = localStorage.getItem(key);
                carObjekt = JSON.parse(carId); // här görs stringen om tillbaka till objekt
                console.log(carObjekt)
                if (id === key && confirm(`Are your sure? That will remove ${carObjekt.brandName} with id ${id} from localStorage.`)) {
                    showCar.innerText = `${carObjekt.brand} deleted`;
                    localStorage.removeItem(id);
                    document.getElementById('removeId').value = "";
                }
            
                else if(key !== undefined) {
                    showCar.style.color = "red";
                    showCar.innerText = "No such car id exists, please search for a cars id investigate. "
                }
            });
        }
        else {
            showCar.style.color = "red";
            showCar.innerText = "No such car id exists. "
        }
    }
}

// clearStorage() frågar, som säkerhet, om användaren verkligen vill rensa localStorage
function clearStorage() {
    if (confirm("Are your sure? That will delete all items in localStorage.")) {
        localStorage.clear();
        showCarObjects.style.color = "red";
        showCarObjects.innerText = "All items deleted!"
    }
}

// samling av händelsehanterare (events) för sidans knappar
window.onload = function () {
    document.getElementById('carForm').onsubmit = store;
    document.getElementById('showCarList').onclick = showListOfItem;
    document.getElementById('clearButton').onclick = clearStorage;
    document.getElementById('retrieveCarNames').onclick = retriveCarName;
    document.getElementById('removeButton').onclick = removeItem;
    document.getElementById('closeList').onclick = closeList;
}