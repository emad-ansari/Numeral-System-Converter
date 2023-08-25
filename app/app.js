// write logic for side bar menu opening and closing

const menuBtn = document.getElementById('menu-bar');
menuBtn.addEventListener('click', openSideMenuBar);
function openSideMenuBar(){
    document.getElementById('menu-side-bar').style.display = 'block';
}

const crossBtn = document.getElementById('crossBtn');
crossBtn.addEventListener('click', closeSideMenuBar);
function closeSideMenuBar(){
    document.getElementById('crossBtn').style.borderColor = 'rgb(248, 172, 59)';
    document.getElementById('menu-side-bar').style.display = 'none';

}


// calculator functionallity
// this function will convert  one number system to another number system.
let convert_btn = document.getElementById("convert");
convert_btn.addEventListener("click", converter);

function converter(e) {
  e.preventDefault();
  let num = document.getElementById("Input-Number").value;
  let output = document.getElementById("output");
  let current = currentBase(); // these curent and final are of type Number.
  let final = finalBase();
  let ans;
 
  switch (current) {

    case 10:
      switch (final) {
        case 2:
        case 8:
          ans = decimalToAnySystem(num, final);
          break;
        case 16:
          ans = decimalToHexdecimal(num, current, final);
          break;
      }
      break;

    case 2:
      switch (final) {
        case 10:
          ans = anySystemToDecimal(num, current);
          break;
        case 8:
          ans = binaryToOctal(num, current, final);
          break;
        case 16:
          ans = anySystemToHexadecimal(num, current, final);
          break;
      }
      break;
    case 8:

      switch (final) {
        case 2:
          ans = octalToBinary(num, current, final);
          break;
        case 10:
          ans = anySystemToDecimal(num, current);
          break;
        case 16:
          ans = anySystemToHexadecimal(num, current, final);
          break;
      }
      break;

    case 16:
      switch (final) {
        case 2:
        case 8:
          ans = hexadecimalToAnySystem(num, current, final);
          break;
        case 10:
          ans = hexadecimalToDecimal(num, current);
          break;
      }
      break;
    }
    output.innerText = ans;

}

function currentBase() {
  let current_base;
  let select1 = document.getElementById("select-inputs1").value;
  if (select1 == "Decimal") {
    current_base = 10;
  }
   else if (select1 == "Binary") {
    current_base = 2;
  }
  else if (select1 == "Octal") {
    current_base = 8;
  }
  else if (select1 == "HexaDecimal") {
    current_base = 16;
  }
  else {
  }
  return current_base;
}

function finalBase() {
  let final_base;
  let select2 = document.getElementById("select-inputs2").value;
  if (select2 == "Decimal") {
    final_base = 10;
  } else if (select2 == "Binary") {
    final_base = 2;
  } else if (select2 == "Octal") {
    final_base = 8;
  } else if (select2 == "HexaDecimal") {
    final_base = 16;
  } else {
  }
  return final_base;
}

// this is Reset function that will reset the current value of result to -> empty string
document.getElementById("reset").onclick = function () {
  document.getElementById("output").innerHTML = "";
};

function anySystemToDecimal(num, current_base) {
  num = Number(num);

  if (num == 0) {
    return 0;
  }
  if (checkOctalDigit(num, current_base)) {
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
  } else {
    return "Please enter the correct number!";
  }
}

function hexadecimalToDecimal(num, current_base) {
  // this num will be string type
  let ans = 0;
  let last_digit = 0;
  let j = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    let lastChar = num.charAt(i);
    if (lastChar == "A") {
      last_digit = 10;
    } else if (lastChar == "B") {
      last_digit = 11;
    } else if (lastChar == "C") {
      last_digit = 12;
    } else if (lastChar == "D") {
      last_digit = 13;
    } else if (lastChar == "E") {
      last_digit = 14;
    } else if (lastChar == "F") {
      last_digit = 15;
    } else {
      last_digit = Number(lastChar);
    }
    ans = ans + Math.pow(current_base, j) * last_digit;
    j++;
  }
  return ans;
}

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
  let ans = "";
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
  for (let i = 0; i < list.length; i++) {
    ans = ans + list[i];
  }
  return String(ans);
}

/* 
    this below function will work for both binary and octal . means that it will convert 
    hexadecimal -> binary.
    hexadecimal -> octal.

*/

function hexadecimalToAnySystem(num, current_base, final_base) {
  let decimal_value = hexadecimalToDecimal(num, current_base); // getting the decimal equivalent of hexadecimal number.
  return decimalToAnySystem(decimal_value, final_base); // and then convert the decimal value to any other system.
}

function binaryToOctal(num, current_base, final_base) {
  let decimal_value = anySystemToDecimal(num, current_base);
  return decimalToAnySystem(decimal_value, final_base);
}

function octalToBinary(num, current_base, final_base) {
  let check_value = "Please enter the correct number!";
  let decimal_value = anySystemToDecimal(num, current_base);
  if (decimal_value != check_value) {
    return decimalToAnySystem(decimal_value, final_base);
  } else {
    return check_value;
  }
}

// this below function will convert from
// binary -> hexadecimal.
// octal -> hexadecimal.

function anySystemToHexadecimal(num, current_base, final_base) {
  let check_value = "Please enter the correct number!";

  let decimal_value = anySystemToDecimal(num, current_base, final_base);
  if (decimal_value != check_value) {
    return decimalToHexdecimal(decimal_value, current_base, final_base);
  } 
  else {
    return check_value;
  }
}

// this function will check whether the entered number is a correct number or not.
function checkOctalDigit(num, current_base) {
  let last_digit = 0;
  if (current_base == 8) {
    while (num != 0) {
      last_digit = num % 10;
      num = Math.floor(num / 10);
      if (last_digit > 7) {
        return false;
      }
    }
    return true;
  } 
  
  else {
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
