function Multiplicationtable(input) {
    let number = Number(input[0]);
    let firstDigit = Math.floor(number / 100);
    let secondDigit = Math.floor((number % 100) / 10);
    let thirdDigit = number % 10;
    if (firstDigit === 0 || secondDigit === 0 || thirdDigit === 0) {
        return;
    }
    for (let i = 1; i <= thirdDigit; i++) {
        for (let j = 1; j <= secondDigit; j++) {
            for (let k = 1; k <= firstDigit; k++) {
                const result = i * j * k;
                console.log(`${i} * ${j} * ${k} = ${result};`);
            }
        }
    }
}
Multiplicationtable(["324"]);
