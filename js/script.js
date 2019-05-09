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
            resultDisplayed === true && lastChar ==='+'||lastChar ==='-'|| lastChar ==='*'|| lastChar ==='/'
        ){
            resultDisplayed = false;
            input.innerHTML += this.innerHTML;
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
    const numsStringArray = input.innerHTML.split(/\+|\-|\*|\//g);
    const currentString = input.innerHTML;
    let numsArray =[];
    numsStringArray.forEach(function(number){
        numsArray.push(Number(number));
    });
    // console.log(numsArray);

    const opsArray = currentString.replace(/[0-9]|\./g, "").split("");

    
    let multiply = opsArray.indexOf('*');
    while(multiply != -1){
        numsArray.splice(multiply, 2, numsArray[multiply]* numsArray[multiply+1]);
        opsArray.splice(multiply, 1);
        multiply = opsArray.indexOf('*');
    }

    let divide = opsArray.indexOf('/');
    while(divide != -1){
        numsArray.splice(divide, 2, numsArray[divide]/ numsArray[divide+1]);
        opsArray.splice(divide, 1);
        divide = opsArray.indexOf('/');
    }

    let add = opsArray.indexOf('+');
    while(add != -1){
        numsArray.splice(add, 2, numsArray[add]+ numsArray[add+1]);
        opsArray.splice(add, 1);
        add = opsArray.indexOf('+');    
    }

    let subtract = opsArray.indexOf('-');
    while(subtract != -1){
        numsArray.splice(subtract, 2, numsArray[subtract]- numsArray[subtract+1]);
        opsArray.splice(subtract, 1);
        subtract = opsArray.indexOf('-');
    }
    resultDisplayed = true;
    input.innerHTML = numsArray;
});
// clearing the input on press of clear
clear.addEventListener('click', function(){
   input.innerHTML = "";
});
