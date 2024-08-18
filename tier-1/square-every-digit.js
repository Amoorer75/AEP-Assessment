/**
@param {number} num
@returns {number}
*/
module.exports = function(num){
  //Solution goes here

let digit = num.toString().split('').map(Number);

let number = []

for (let i = 0; i < digit.length; i++) {
  number.push( digit[i] * digit[i])

}


return(Number(number.join('')))

}

