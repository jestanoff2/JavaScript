function Depositcalculator(depositedSum, depositperiod, annualInterestPercent){
    let annualInterestDecimal = annualInterestPercent / 100;

    let sum = depositedSum + depositperiod * ((depositedSum * annualInterestDecimal) / 12);
    console.log(sum);
}
Depositcalculator(200,3,5.7);
console.log('huiih   ');
