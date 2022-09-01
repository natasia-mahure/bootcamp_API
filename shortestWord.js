export default function shortestWord (string){
    var stringArray = string.split(' ');
   let shortWord= stringArray[0];
    for (var word of stringArray){
    if (word.length <= shortWord.length){
    shortWord = word
    }
    } return shortWord 
  }