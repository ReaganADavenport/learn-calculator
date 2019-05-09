"use strict";

const input = document.getElementById('input'), // input/output button
    numbers = document.querySelectorAll('.numbers div'), // number buttons
    operator = document.querySelectorAll('.operators div'), // operator buttons
    result = document.getElementById('result'), // equal button
    clear = document.getElementById('clear'); // clear button
    
let resultDisplayed = false; // flag to keep an eye on what output is displayed

// adding click handlers to number buttons
Array.from(numbers).map(number=> {
    const lastChar = input.innerHTML[input.innerHTML.length-1];
    number.addEventListener('click', function(){
        if(resultDisplayed === false){
            input.innerHTML += this.innerHTML;
        } else if (
            (resultDisplayed === true) && (lastChar ==='+'||lastChar ==='-'|| lastChar ==='*'|| lastChar ==='/') 
        ){
            resultDisplayed = false;
            input.innerHTML+= this.innerHTML;
        } else {
            resultDisplayed = false;
            input.innerHTML = '';
            input.innerHTML += this.innerHTML;
        }
    })
})
// adding click handlers to the operation buttons
operator.forEach(function(operators){
    operators.addEventListener('click', function(){
        const lastChar = input.innerHTML[input.innerHTML.length-1];
        if (lastChar ==='+'||lastChar ==='-'||lastChar==='*'||lastChar==='/'){
           let newInput = input.innerHTML.substring(0,input.innerHTML.length-1)+ this.innerHTML;
           input.innerHTML = newInput; 
        } else if(input.innerHTML.length == 0){
            input.innerHTML = "Enter a number, KAREN!";
        }else{
            input.innerHTML += this.innerHTML;
        }
    });
});
// on click of 'equal' button
result.addEventListener('click', function(){
    input.innerHTML = "Solve your own problems!";
})
// clearing the input on press of clear
clear.addEventListener('click', function(){
    input.innerHTML = '';
});

//const someVariable = someString.split(/\+|\-|\×|\÷/g)