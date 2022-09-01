
export default function totalPhoneBill(string) {
    let counter = 0;
    console.log(string)
    var stringArray = string.split(',');
    for (var i = 0; i < stringArray.length; i++) {
        var item = stringArray[i].trim()
        if (item.startsWith('s')) {
            counter += 0.65

        } else {
            counter += 2.75
        }
    }
     return counter.toFixed(2)
}
