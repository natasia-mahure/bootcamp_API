export default function wordLengths (string){
    var stringArray = string.split(' ');
    var length = stringArray.map(w => w.length)
    var sum = 0;
 
    for ( var i=0; i<stringArray.length; i++){
   sum += length[i]
    } return sum
  }