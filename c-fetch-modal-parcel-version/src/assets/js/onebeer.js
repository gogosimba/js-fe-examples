const aBeerPost = document.querySelector('.cardItem')

const url = 'https://api.punkapi.com/v2/beers/random';
let output = '';

let btn;
// en observer observerar om ett element verkligen är skapat i DOM eller inte
const observer = new MutationObserver(function () {

    if (document.querySelector('#btn-ajax')) {
        btn = document.querySelector('#btn-ajax');
        observer.disconnect();
    }
})

target = document.querySelector('body');
const config = { childList: true, subtree: true };
observer.observe(target, config);
// slut observer

function startUpdate () {

setInterval(function() {

let data = fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
       // console.log(element);
        output += `
            <div class="card bg-light mb-4">
                <img class="position-relative top-0 start-50 translate-middle-x mt-4 mb-2" src="${element.image_url}" alt="An image of the beer">
                    <div class="card-body">
                        <h5 class="card-title-ajax">${element.id} ${element.name}</h5>
                        <p class="card-text-ajax">${element.description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${element.ingredients.malt[0].name + ", " + element.ingredients.malt[0].amount.value + " " + element.ingredients.malt[0].amount.unit}</li>
                        <li class="list-group-item">${element.food_pairing}</li>
                    </ul>
                    <div class="card-body mx-auto">
                        <button id="btn-ajax" type="button" class="btn btn-secondary me-3">
                            Reload
                        </button>
                    </div>
            </div>
        `;


        });

        aBeerPost.innerHTML = output;
});

}, 5000);

}
document.addEventListener('DOMContentLoaded', function() {
    startUpdate();
});