// import functions and grab DOM elements
import isSick from './jellbeanUtils.js';

const myButton = document.querySelector('#button');
const resultSpan = document.querySelector('#result');

// initialize state
let jellybeans = 0;

// set event listeners to update state and DOM
myButton.addEventListener('click', () => {    
    jellybeans++;

    resultSpan.textContent = jellybeans;

    if (isSick(jellybeans)) {
        document.querySelector('.main-section').style.background = 'pink';

        const sickBox = document.querySelector('#sick-box');
        sickBox.textContent = 'uggghh';
    }
});
