const repeatString = function(str,times) {
  if(times<0){
    return "ERROR"
  }
  let text = ""
  for(let i = 1; i <= times; i++){
    text +=str
  }
  return text
};



// Do not edit below this line
module.exports = repeatString;
