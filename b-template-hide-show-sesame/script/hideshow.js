/*  Hide and show content
    -----------------------
    1. undersökning av html/css för att ta reda på på selektorer
    2. placering av aktuella selektorer i var sin variabel (querySelecor)
    3. skapande av en if-sats, där korrekt selektor läggs till/tas bort beronde på knappens status
    4. tillägg av eventistener till knappen (click)
*/


const btn = document.querySelector('.btn-sesame');
const hiddenContent = document.querySelector('.hidden-content');

function ShowText() {
    if (hiddenContent.classList.contains('btn-sesame')){
        hiddenContent.classList.remove('btn-sesame');
        btn.innerHTML = "Open, Sesame!";
        btn.style.color ="rgb(0 ,0,0)"
    }
    else{
        hiddenContent.classList.add('btn-sesame');
        btn.innerHTML = "Shut, Sesame!";
        btn.style.backgroundColor = "red";
    }
}

btn.addEventListener('mouseover', ShowText);