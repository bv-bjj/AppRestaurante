let counterDisplayElem = document.querySelector('.counter-display');
 
let counterMinusElem = document.querySelector('.counterLeft');

let counterPlusElem = document.querySelector('.counterRight');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};