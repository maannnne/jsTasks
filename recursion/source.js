//create a function that counts the inputted numbers factorial, then use it to create an 
//association (n, m)

const fact = (num) => {
    if(num === 0) {
        return 1;
    }
    return num * fact(num - 1);
}

const association = (num1, num2) => {
    return parseInt(fact(num1) / (fact(num1 - num2) / fact(num2)));
}

let n1 = 4;
let n2 = 2;
console.log(association(n1, n2));