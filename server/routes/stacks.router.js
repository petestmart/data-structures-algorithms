const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

let palindromeResponse='';


router.get('/', (req, res) => {
    (res.send(palindromeResponse))
    .catch(() => res.sendStatus(500));
});


router.post('/', (req, res) => {
    console.log('stacks.router.post req.body:', req.body);
    palindrome(req.body.textInput)
    res.sendStatus(201);
});

function palindrome(string){
    let letters = [];
    let word = string;
    let revWord = "";

    for(let i=0; i<word.length; i++){
        letters.push(word[i]);
    }

    for (let i=0; i<word.length; i++){
        revWord += letters.pop();
    }
    if (revWord === word ){
        palindromeResponse = word + " is a palindrome";
    }
    else {
        palindromeResponse = word + " is not a palindrome";
    }
}

module.exports = router;