// Q: What is the output of the following? and why ?
bar();
(function abc() {
  console.log("hello something");
})();

function bar() {
  console.log("Bar got called!");
}



// Ans: 
// Bar got called!
// hello something

// As JS executed top to bottom line by line synchronously, for function bar hoisting will happen and it will get called
// second is the IIFE function so it is a self invoked function
