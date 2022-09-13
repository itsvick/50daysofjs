// Q: Write a program to achieve sum(2)(3)
// sum(2,3) == 5
// sum(2)(3) == 5

function sum(num1, num2) {
  const addNumber = function(num2) {
    return num1 + num2;
  }

  return num2 ? addNumber(num2) : addNumber;
}

console.log(sum(2,3));
console.log(sum(2)(3));
