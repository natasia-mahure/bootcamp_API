
export default function longestWord (string){
    let longWord= '';
      var stringArray = string.split(' ');
      for (var word of stringArray){
      if (word.length >= longWord.length){
      longWord = word
      }
      } return  longWord
    }