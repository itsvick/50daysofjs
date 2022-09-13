// Q: Write a function to truncate a string to a certain number of words.

function truncateString(str, limit) {
  if (typeof str === "string") {
    if (limit < str.length) {
     const newStr = str.substring(0, limit); 
     return newStr;
    } else {
      return str;
    }
  }
  return 'Invalid Input'
}

truncateString("hello this is a long test string", 20);
