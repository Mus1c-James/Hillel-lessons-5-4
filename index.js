"use strict";
 
// const inputNumber = prompt('Please enter an integer N');
let inputNumber = prompt('Please enter an integer N');

inputNumber = inputNumber.trim();
// console.log('userInput', inputNumber)  
 

if(inputNumber ==='' || isNaN(inputNumber) || inputNumber === '.' || inputNumber === ' ' || !Number.isInteger(+inputNumber)){
    console.log('Error incorected number')
}else{
    let numN  = parseInt(inputNumber);
    console.log('parsetIn', numN);
    if(isNaN(numN)){
        console.log('err', numN)
    }else{
       console.log('else', numN) 
       for (let count = 1; count <= 100; count++ ){
            if(count * count <= numN){
                console.log(count)
            }else{
                break;
            }
       
        }
    }
    
}