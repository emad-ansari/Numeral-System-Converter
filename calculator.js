let num = 1010;
let current_base = 2;

let ans = anySystemToDecimal(num, current_base);
console.log(ans);

function anySystemToDecimal(num, current_base) {
    num = Number(num);

    if (num == 0) {
        return 0;
    }
    if (checkOctalDigit(num , current_base)) {
        let sum = 0;
        let i = 0;
        let last_digit = num % 10;
        while (num > 0) {
            let last_digit = num % 10;
            sum = sum + Math.pow(current_base, i) * last_digit;
            num = Math.floor(num / 10);
            i++;
        }
        return String(sum);
    }
    else {
        return "Please enter the correct number!";
    }

}

// call the hexaDecimal to decimal 
let ans3 = hexadecimalToDecimal("11A", 16);
console.log("this is conversion from hexadecimal to decimal : ", ans3);
function hexadecimalToDecimal(num, current_base) { // this num will be string type
    let ans = 0;
    let last_digit = 0;
    let j = 0;
    for (let i = num.length - 1; i >= 0; i--) {
        let lastChar = num.charAt(i);
        if (lastChar == 'A') {
            last_digit = 10;
        }
        else if (lastChar == 'B') {
            last_digit = 11;

        }
        else if (lastChar == 'C') {
            last_digit = 12;

        }
        else if (lastChar == 'D') {
            last_digit = 13;

        }
        else if (lastChar == 'E') {
            last_digit = 14;

        }
        else if (lastChar == 'F') {
            last_digit = 15;

        }
        else {
            last_digit = Number(lastChar);
        }
        ans = ans + Math.pow(current_base, j) * last_digit;
        j++;

    }
    return ans;

}
let ans2 = decimalToAnySystem(15, 2);
console.log(ans2);

function decimalToAnySystem(num, final_base) {
    num = Number(num);
    let ans = 0;
    let rem = 0;
    let list = [];
    while (num != 0) {
        rem = num % final_base;
        list.unshift(rem);
        num = Math.floor(num / final_base);
    }
    for (let i = 0; i < list.length; i++) {
        ans = ans * 10 + list[i];
    }
    return ans;
}

let ans1 = decimalToHexdecimal("125", 10, 16);
console.log(...ans1);
function decimalToHexdecimal(num, current_base, final_base) {
    num = Number(num);
    switch (num) {
        case 10:
            return "A";
            break;
        case 11:
            return "B";
            break;
        case 12:
            return "C";
            break;
        case 13:
            return "D";
            break;
        case 14:
            return "E";
            break;
        case 15:
            return "F";
            break;
        default:
            return decimalToHexadecimal1(num, current_base, final_base);
            break;

    }
}

function decimalToHexadecimal1(num, current_base, final_base) {
    let list = [];
    let ans = 0;
    let rem = 0;
    while (num != 0) {
        rem = num % final_base;
        switch (rem) {
            case 10:
                list.unshift("A");
                break;
            case 11:

                list.unshift("B");
                break;
            case 12:
                list.unshift("C");
                break;
            case 13:
                list.unshift("D");
                break;
            case 14:
                list.unshift("E");
                break;
            case 15:
                list.unshift("F");
                break;
            default:
                list.unshift(String(rem));
                break;
        }
        num = Math.floor(num / final_base);
    }
    return list;
}

/* 
    this below function will work for both binary and octal . means that it will convert 
    hexadecimal -> binary.
    hexadecimal -> octal.

*/
let ans4 = hexadecimalToAnySystem("AB", 16, 2);
console.log("ans4 : ", ans4);
function hexadecimalToAnySystem(num, current_base, final_base) {
    let decimal_value = hexadecimalToDecimal(num, current_base);  // getting the decimal equivalent of hexadecimal number.
    return decimalToAnySystem(decimal_value, final_base);  // and then convert the decimal value to any other system.
}

let ans5 = binaryToOctal("1010", 2, 8);
console.log("ans5 : ", ans5);
function binaryToOctal(num, current_base, final_base) {
    let decimal_value = anySystemToDecimal(num, current_base);
    return decimalToAnySystem(decimal_value, final_base);
}


// let ans6 = binaryToHexadecimal("10101011", 2, 16);
// console.log("ans6 : ", ...ans6);
// function binaryToHexadecimal(num, current_base, final_base) {
//     let decimal_value = anySystemToDecimal(num, current_base);
//     return decimalToHexdecimal(decimal_value, current_base, final_base);
// }

let ans7 = octalToBinary("98", 8, 2);
console.log("ans7 : ", ans7);
function octalToBinary(num, current_base, final_base) {
    let check_value = "Please enter the correct number!";
    let decimal_value = anySystemToDecimal(num, current_base);
    if(decimal_value != check_value ){
        return decimalToAnySystem(decimal_value, final_base);
    }
    else {
        return check_value;
    }
    
}

// this below function will convert from 
// binary -> hexadecimal.
// octal -> hexadecimal.
let ans8  = anySystemToHexadecimal("25", 8, 16);
console.log("ans8 : ", ...ans8);
function anySystemToHexadecimal(num, current_base, final_base){
    let check_value = "Please enter the correct number!";
    
    let decimal_value = anySystemToDecimal(num, current_base, final_base);
    if(decimal_value != check_value){
        return decimalToHexdecimal(decimal_value, current_base , final_base);
    }
    else {
        return check_value;
    }
    
}


// this function will check whether the entered number is a correct number or not.
function checkOctalDigit(num ,current_base) {
    let last_digit = 0;
    if(current_base == 8){
        while (num != 0) {
            last_digit = num % 10;
            num = Math.floor(num / 10);
            if (last_digit > 7) {
                return false;
            }
        }
        return true;
    }
    else{
        while (num != 0) {
            last_digit = num % 10;
            num = Math.floor(num / 10);
            if (last_digit > 1 || last_digit < 0) {
                return false;
            }
        }
        return true;
    }  
}













