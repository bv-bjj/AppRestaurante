let counterDisplayElem = document.querySelectorAll('.counter-display');
 console.log(counterDisplayElem);

let counterMinusElem = document.querySelectorAll('.counterLeft');

let counterPlusElem = document.querySelectorAll('.counterRight');

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