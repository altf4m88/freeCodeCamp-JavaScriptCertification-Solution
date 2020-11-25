const palindrome = (str) => {
  //filter the string
  let filteringRegex = /[a-z0-9]/gi;
  let filteredStr = str.toLowerCase().match(filteringRegex);
  
  //this function will be used to create a string from array
  const wordLoop = (array) => {
    let emptyString = "";
    for(let x = 0; x < array.length; x++){
      emptyString += array[x];
    }
    return emptyString;
  }

  //set the normal word
  let string1 = wordLoop(filteredStr);
  //set up the reversed word to be compared with string 1
  let string2 = wordLoop(filteredStr.reverse());

  console.log(string1)
  console.log(string2)

  //test the strings, return true or false
  return string1 === string2 ? true : false; 
}

palindrome("A man, a plan, a canal. Panama");
