//Question : Create a function which returns a random number in the given range.

function getRandomNumberInRange(max, min) {
  return Math.ceil(Math.random() * (max-min) + min);
}


console.log(getRandomNumberInRange(100, 2400));
