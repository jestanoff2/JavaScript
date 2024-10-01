function godzillaVsKong(budget, actorsCount, singleCostumePrice) {
    let decorPrice = 0.1 * budget;
    let totalCostumePrice = actorsCount * singleCostumePrice;

    if (actorsCount > 150) {
        totalCostumePrice *= 0.9;
    }
    let totalPrice = decorPrice + totalCostumePrice;

    if (budget >= totalPrice) {
        let moneyLeft = budget - totalPrice;
        console.log("Action!");
        console.log(`Wingard starst filming with ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = totalPrice - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    }
}


godzillaVsKong(20000, 120, 55.5)