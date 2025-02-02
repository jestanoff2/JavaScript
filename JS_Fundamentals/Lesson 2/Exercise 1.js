function SumDigits (num){
    let numtoStrintg = num + ''
    let sum = 0;
    
    for (let character of numtoStrintg){
        let digit = Number(character);
        sum += digit;
    }
    console.log(sum);
}
SumDigits(245678)