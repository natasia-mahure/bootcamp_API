export default function enoughAirtime (string,airtime){
    let counter = 0;
      var stringArray = string.split(',');
      for (var  i= 0; i<stringArray.length; i++) {
      var item = stringArray[i].trim()
      if (item.startsWith('s')){
      counter += 0.75
        
      } else if((item.startsWith('d'))) {
      counter += 12
      } else {
      counter += 1.88
      }
      } var result = airtime - counter 
        var different = (counter> airtime) ? 'R0.00': 'R'+ result.toFixed(2)
      
      return different 
    }