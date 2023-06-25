let num = 15;
let current_base = 8;

let ans = anySystemToDecimal(num, current_base);
console.log(ans)

function anySystemToDecimal(num, current_base){
    if (num == 0){
        return 0;
    }
    let sum = 0;
    let i = 0;
    let last_digit = num % 10;
    while(num > 0){
        let last_digit = num % 10;
        sum = sum + Math.pow(current_base, i) * last_digit;
        num = Math.floor(num / 10);
        i++;
    }
    return sum;
    
}
decimalToAnySystem(15, 8);

function decimalToAnySystem(num, final_base){
    let ans = 0;
    let rem = 0;
    let list = [];
    while(num != 0){
        rem = num % final_base;
        list.unshift(rem);
        num = Math.floor(num / final_base);
    }
    for(let i = 0; i < list.length; i++){
        ans = ans* 10 + list[i];
    }
    return ans;
}







