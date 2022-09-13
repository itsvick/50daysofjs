// Q: Write a function to truncate a string to a certain number of words.

function truncateString(str, limit) {
  function truncateString(str, limit) {
    if (typeof str === "string") {
      return str.split(" ").splice(0, limit).join(" ");
    }
    return 'Invalid Input'
  }
}

truncateString("hello this is a long test string", 20);
