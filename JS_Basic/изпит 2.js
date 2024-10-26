function BraceletStand (input){
    let PocketMoney = Number(input[0]);
    let MoneyEarnedPerDay = Number(input[1]);
    let TerezaExpensive =  Number(input[2]);
    let PriceOfGift = Number(input[3]);

    let SavedPocketMoney = 5 * PocketMoney;
    let EarnedMoney = 5 * MoneyEarnedPerDay;
    let MoneySaved = SavedPocketMoney + EarnedMoney;
    let MoneyAfterExpensive = MoneySaved - TerezaExpensive;
    if (MoneyAfterExpensive >= PriceOfGift){
        console.log(`Profit: ${MoneyAfterExpensive.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        let neededmoney = PriceOfGift - MoneyAfterExpensive;
        console.log(`Insufficient money: ${neededmoney.toFixed(2)} BGN.`);
    }
 }   
 //BraceletStand (["5.12","32.05","15","150"]);
 BraceletStand (["2.10","17.50","20.20","148.50"]);