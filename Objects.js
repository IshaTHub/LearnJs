// There are 3 types of quotes. Backticks allow a string to span multiple lines and embed expressions ${…}.
// We can use special characters, such as a line break \n.
// To get a character, use: [] or at method.
// To get a substring, use: slice or substring.
// To lowercase/uppercase a string, use: toLowerCase/toUpperCase.
// To look for a substring, use: indexOf, or includes/startsWith/endsWith for simple checks.
// To compare strings according to the language, use: localeCompare, otherwise they are compared by character codes.

// const ucFirst = (str) => {
// 	return str[0].toUpperCase() + str.slice(1);
// };

// console.log(ucFirst("john")); // John

function truncate(str, maxlength){
    if(str.length <= maxlength){
      return str;
    }
     if(str.length > maxlength){
      let newStr = `${str.slice(0, maxlength -1)}...`;
      return newStr;
    }
}	

console.log(truncate("What I'd like to tell on this topic is:", 20)); // What I'd like to te...
