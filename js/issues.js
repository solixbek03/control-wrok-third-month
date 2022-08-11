// ================== QODIROV ALISHER = ALISHER QODIROV =====

function reverseString(str) {

  var splitString = str.split(" ");
  var reverseArray = splitString.reverse(); 
  var joinArray = reverseArray.join(" "); 

  return joinArray; 
}

reverseString("Alisher Qodirov");

// ===============DOUBLE SALOM ===============================

let arrayWords = [];

let arrayWordsResult = [];

function wordsDouble(word) {
  arrayWords = word.split('');

  for (let i = 0; i < arrayWords.length; i++) {
    arrayWordsResult.push(arrayWords[i], arrayWords[i]);
  }

  let resultWord = arrayWordsResult.join('');

  return resultWord; 
}

console.log(wordsDouble('salom'));


// ========================== ILDIZ OSTIDAGI SON =================

let array = [5, 7, 2, 12, 8, 34, 9];
let arrayResult = [];

function num() {
  for (let i = 0; i < array.length; i++) {
    if ((Math.sqrt(array[i]) % 1) == 0) {
      arrayResult.push (Math.sqrt(array[i]));
    } else {
      arrayResult.push(Math.pow(array[i], 2));
    }
  }

}
num();

console.log(arrayResult);