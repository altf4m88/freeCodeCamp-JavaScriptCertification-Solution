function rot13(str) {
  let charArr = str.split("");
  let regex = /[A-Z]/;
  let result = "";
  let shift = 13;
  let tempLetter;
  let dec;

  charArr.forEach((i) => {
    if(regex.test(i)){
      dec = i.charCodeAt();
      if(dec < 78){
        tempLetter = String.fromCharCode(dec + shift);
      } else{
        tempLetter = String.fromCharCode(dec - shift);
      }
      result += tempLetter;
    } else{
      result += i;
    }
    
  })

  return result;
}

rot13("FREE CODE CAMP");
