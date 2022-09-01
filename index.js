import express from 'express';
import cors from 'cors'
const app = express();
app.use(express.static("public"));
import longestWord from "./longestword.js"
import shortestWord from "./shortestWord.js"
import wordLengths from "./wordLength.js"
import totalPhoneBill from "./totalPhoneBill.js"
app.use(cors())
app.use(express.static('public'))
app.use(express.json())


//..................................Word game get ..................................................
app.get("/api/word_game", function(req, res){
  
  const sentence = req.query.sentence;
    res.json({ 
        
        "longestWord" : longestWord(sentence),
        "shortestWord" : shortestWord(sentence),
        "sum" : wordLengths(sentence),
    });
});

//.................this is were total phone bill. post...............................................................
app.post("/api/phonebill/total", function(req, res){
  console.log(req.body);
  const bill = req.body.bill;
  const total = totalPhoneBill(bill)
  console.log(total)
    res.json({ 
        
        "total" : total,
    });
});
//..................phonebill get........................................

app.get("/api/phonebill/prices", function(req, res){
  
  const prices = req.query.sentence;
    res.json({ 
        
        "type" : totalPhoneBill(call),
        "price" : totalPrice,
    });
});









let PORT = process.env.PORT || 3007;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});


