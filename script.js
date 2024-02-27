// This Script will hide the Thank You window until
// the submit button is triggered and then hide the 
// rating window

// Variables
const ratingsBox = document.querySelector('#card1');
const thanksBox = document.querySelector('#card2');
const submitBTN = document.querySelector('#submit');
const score = document.querySelector('#outOf');
const btn1 = document.querySelector('#val1');
const btn2 = document.querySelector('#val2');
const btn3 = document.querySelector('#val3');
const btn4 = document.querySelector('#val4');
const btn5 = document.querySelector('#val5');
let rating = 0;

// Hide the ThanksBox
thanksBox.style.display = 'none';

// Event to save a value fromt the selection
btn1.addEventListener('click', function () {
    // alert('Btn1');
    resetColor([btn1, btn2, btn3, btn4, btn5]);
    btn1.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn1.style.color = 'white';
    rating = 1;
});

btn2.addEventListener('click', function () {
    resetColor([btn1, btn2, btn3, btn4, btn5]);
    btn2.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn2.style.color = 'white';
    rating = 2;
});

btn3.addEventListener('click', function () {
    resetColor([btn1, btn2, btn3, btn4, btn5]);
    btn3.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn3.style.color = 'white';
    rating = 3;
});

btn4.addEventListener('click', function () {
    resetColor([btn1, btn2, btn3, btn5]);
    btn4.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn4.style.color = 'white';
    rating = 4;
});

btn5.addEventListener('click', function () {
    resetColor([btn1, btn2, btn3, btn4]);
    btn5.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn5.style.color = 'white';
    rating = 5;
});

function resetColor(buttonList) {
    for (let btn of buttonList) {
        btn.style.backgroundColor = 'hsla(216, 12%, 54%, 0.249)';
        btn.style.color = 'hsl(217, 12%, 63%)';
    }
}

// Event to "submit" content and then show "thank you" and update the "out of" text
submitBTN.addEventListener('click', function () {
    // alert('You Clicked the Submit button!')
    score.textContent = rating;
    ratingsBox.style.display = 'none';
    thanksBox.style.display = 'block';
});

