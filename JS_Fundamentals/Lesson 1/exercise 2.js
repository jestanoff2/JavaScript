function Rounding (number, round){
    if (round > 15){
        round = 15;
    }
    let result = number.toFixed(round);
    console.log(parseFloat(result));
}
Rounding (3.11110000,10)