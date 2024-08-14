const removeFromArray = function(array, ...args) {

const newArray=[]

array.forEach(rmv)

function rmv(item){
  if(!args.includes(item)){
    newArray.push(item)
  }
}

return newArray

};


// Do not edit below this line
module.exports = removeFromArray;
