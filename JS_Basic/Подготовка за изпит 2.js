function FamilyVacation(Budget, NumOfNights, PricePerNight, PercentForExtraCost) {
    if (NumOfNights > 7) {
        PricePerNight = PricePerNight * 0.95;
    }
    let totalPriceforNights = PricePerNight * NumOfNights;
    let PriceOfPercent = (PercentForExtraCost/100) * Budget;
    let totalCost = totalPriceforNights + PriceOfPercent
    if (Budget >= totalCost) {
        let remainingMoney = (Budget - totalCost);
        console.log(`Ivanovi will be left with ${remainingMoney.toFixed(2)} leva after vacation.`);
    } else {
        let moneyNeeded = (totalCost - Budget);
        console.log(`${moneyNeeded.toFixed(2)} leva needed.`);
    }
}
FamilyVacation(500, 7, 66, 15);