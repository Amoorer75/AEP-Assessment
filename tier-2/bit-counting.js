/**
@param {number} num
@returns {number}
*/

module.exports = function(num){
  //Solution goes here



    // Convert the number to its binary representation
    const binaryNumber = num.toString(2);
    
    console.log(binaryNumber)

  
    let number = 0;
    for (let i = 0; i < binaryNumber.length; i++) {
      if (binaryNumber[i] === '1') {
        number++;
      }
    }
  
    return number;
  
  
  
}