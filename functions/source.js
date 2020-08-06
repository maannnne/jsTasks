//1. Write a JavaScript function that reverse a number.
const rev = (str) => {
    let s = str.split('').reverse().join('');
    return s;
} 

let str = '4u5208chstik9';
console.log(rev(str));



//2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
const alphOrd = (str) => {
    let s = str.split('').sort().join('');
    return s;
}

console.log(alphOrd(str));



//3. Write a JavaScript function that accepts a string as a parameter
//and converts the first letter of each word of the string in upper case. 
const uppercase = (str) => {
    let s = str.split('');
    let blankArr = [];
    for(let i = 0; i < s.length; i++){
        blankArr[0] = s[0].toUpperCase();
        if(s[i] === ' '){
            blankArr[i+1] = s[i+1].toUpperCase();
        }
        else{
            blankArr[i] = s[i]; 
        }
    }
    return blankArr.join(' ');
}

console.log(uppercase('hello there where'));