const fibonacci = function (member) {
  member = Number(member)
  if (member < 0) {
    return "OOPS"
  } else if (member == 0) {
    return 0
  }
  let myarr = [1, 1]
  for (let i = 2; i <= (member-1); i++) {
    myarr[i] = myarr[i-1] + myarr[i-2]
  }
  return myarr[member-1]

};

// Do not edit below this line
module.exports = fibonacci;
