
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

console.log('Guess the word by guessing letter by letter..');

let wordToBeGuessed = 'SHEMEEM';
let wordToBeGuessedArray = wordToBeGuessed.split('');

let abcd = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S',
            'T','U','V','W','X','Y','Z'];

let dash = '---'
let abcdTemp = abcd;
let dashArray = prepareDashArray(wordToBeGuessedArray.length);
function main(){
    displayArray(abcdTemp);
    displayArray(dashArray);
    readInput();
}
//Calling main function.
main();


function readInput(){
    readline.question(`Input next letter..`, (letter) => {
        abcdTemp = updateArray(letter, abcdTemp, true);
        dashArray = updateArray(letter, wordToBeGuessedArray);
        //display abcdTemp and dash array
        displayArray(abcdTemp);
        displayArray(dashArray);
        if(dashArray.indexOf(dash) > -1){
          readInput();
        }else {
            console.log('Completed...');
            readline.close();
        }
      });
}

function updateArray(letter,array, isAbcdTemp){
    for( var i = 0; i < array.length; i++){
            if ( array[i] === letter){
                if (isAbcdTemp){
                    array[i] = dash;
                    //only one letter to be removed from abcdTemp,
                    //so breaking the loop
                    break;
                }else {
                    dashArray[i] = letter;  
                }
            } 
        }
    if(isAbcdTemp){
        return array;
    }else {
        return dashArray;
    }    
}

function prepareDashArray (arrayLegth) {
    let tempArray = [];
    for(let i=0; i<arrayLegth; i++){
        tempArray.push(dash);
    }
    return tempArray;
}

function displayArray(array) {
    let tempWord = "";
    for(let i=0; i<array.length; i++){
        tempWord = tempWord + array[i];
        tempWord = tempWord + ' ';
    }
    console.log('#### : ' + tempWord);
}