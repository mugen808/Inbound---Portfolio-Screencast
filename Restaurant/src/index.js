import {showClub} from './club'
import {showPlates} from './plates'
import {showCooks} from './cooks'


function clear () {
    const content = document.querySelector('#content');
    content.innerHTML = ""
}

// event listener to the club button
const clubBtn = document.querySelector('#clubBtn');
clubBtn.addEventListener("click", () => {
    clear();
    showClub();
})


// event listener to the plates button
const platesBtn = document.querySelector('#platesBtn');
platesBtn.addEventListener("click", () => {
    clear();
    showPlates();
})

// event listener to the cooks button
const cooksBtn = document.querySelector("#cooksBtn");
cooksBtn.addEventListener("click", () => {
    clear();
    showCooks();
})