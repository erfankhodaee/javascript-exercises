const palindromes = function (word) {
  word = word.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
  reverseWord = word.split("").reverse().join("")
  if(reverseWord == word){
    return true
  }else{
    return false
  }
};

// Do not edit below this line
module.exports = palindromes;
