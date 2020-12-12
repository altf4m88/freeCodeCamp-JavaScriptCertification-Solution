function convertToRoman(num) {
    let decimalArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanArr = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let romanum = "";

    for(let i = 0; i < decimalArr.length; i++){
        while(decimalArr[i] <= num){
            romanum += romanArr[i];
            num -= decimalArr[i];
        }
    }
console.log(romanum);
 return romanum;
}

convertToRoman(36);
