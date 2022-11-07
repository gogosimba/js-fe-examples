"use strict";
const cardItems = document.querySelector('.cardItems');
let output = '';

const url = 'https://api.punkapi.com/v2/beers';

let data = fetch(url)
    .then(res => res.json())
    .then(data => {
        
        for (let i = 0; i < data.length; i++){
            beerID = data[i].id;
            beerImg = data[i].image_url;
            beerName = data[i].name;
            beerDescription = data[i].description;
            bim = data[i].ingredients.malt;
            hops = data[i].ingredients.hops;

            output += `   
            <div class="card bg-light mb-4">
                <img class="position-relative top-0 start-50 translate-middle-x mt-4 mb-2" src="${beerImg}" style="height: 200px; width: 80px" alt="An image of the beer">

            <div class="card-body">
                    <h5 class="card-title">${beerID + " " + beerName}</h5>
                    <p class="card-text">${beerDescription}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${hops[0].name + ", " + hops[0].amount.value + " " + hops[0].amount.unit }</li>
                    <li class="list-group-item"> ${bim[0].name + ", " + bim[0].amount.value + " " + bim[0].amount.unit }</li>
                </ul> 
                <div class="card-body mx-auto">
                    <button id="${beerID}" type="button" class="btn btn-secondary me-3">
                        More info
                    </button>
                    <button type="button" class="btn btn-secondary">
                        Add to chart
                    </button>
                </div>
            </div>
            `;
        };
        
        cardItems.innerHTML = output;
    });


