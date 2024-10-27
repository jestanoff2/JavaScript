function BookForPrograming (input){
    let PayForOnePage = Number(input[0]);
    let PayForCover = Number(input[1]);
    let PercentOfDiscount = Number(input[2]);
    let SumForDisainer = Number(input[3]);
    let PercentOfAllSum = Number(input[4]);
    let pages = 899;
    let cover = 2;
    let Initialamounttprint = PayForOnePage * pages + PayForCover * cover;
    let SumAfterDiscount = Initialamounttprint * (1-(PercentOfDiscount / 100));
    let SumAfterPayForDisainer = SumAfterDiscount + SumForDisainer;
    let FinalSum = SumAfterPayForDisainer * (1-(PercentOfAllSum / 100));
    console.log(`Avtonom should pay ${FinalSum.toFixed(2)} BGN.`);
}
BookForPrograming(["0.01","1","10","20","20"])