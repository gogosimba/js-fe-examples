"use strict";

import * as bootstrap from 'bootstrap'; 
window.bootstrap = bootstrap;


let btn;
// en observer observerar om ett element verkligen är skapat i DOM eller inte
const observer = new MutationObserver(function() {

    if (document.querySelector('#btn')){
        btn = document.querySelector('#btn');
        btn.addEventListener("click", showModal);
        observer.disconnect();
    }
})

target = document.querySelector('body');
const config = { childList: true, subtree: true };
observer.observe(target, config);
// slut observer

let modalWrap = null;

const showModal = () => {
    let cardTitle = document.querySelector('.card-title');
    let cardText = document.querySelector('.card-text');

    // för att undvika multipla boxar
    if (modalWrap !== null) {
        modalWrap.remove();
    }
    
    modalWrap = document.createElement('div');
        modalWrap.innerHTML = `
        <div class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${cardTitle.innerHTML}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>${cardText.innerHTML}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    `;

    document.body.append(modalWrap);
    
    const modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
    modal.show();
} 
