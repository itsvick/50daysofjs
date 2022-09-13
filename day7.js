//Q: Output of the following code?

console.log("one");

setTimeout(() => {
  console.log("two");
}, 0);

console.log("three");


// Ans:

// one 
// three
// two
