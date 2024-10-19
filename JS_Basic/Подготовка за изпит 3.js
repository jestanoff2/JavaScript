function DestinationForFilm(BudgetForFilm, Destination, Season, NumDays) {
    let DayPrice = 0;
    
    switch (Destination) {
        case "Dubai":
            if (Season === "Winter") {
                DayPrice = 45000;
            } else {
                DayPrice = 40000;
            }
            DayPrice *= 0.7; 
            break;

        case "Sofia":
            if (Season === "Winter") {
                DayPrice = 17000;
            } else {
                DayPrice = 12500;
            }
            DayPrice *= 1.25; 
            break;

        case "London":
            if (Season === "Winter") {
                DayPrice = 24000;
            } else {
                DayPrice = 20250;
            }
            break;
    }

    let totalCost = DayPrice * NumDays;
    
    if (BudgetForFilm >= totalCost) {
        let MoneyLeft = BudgetForFilm - totalCost;
        console.log(`The budget for the movie is enough! We have ${MoneyLeft.toFixed(2)} leva left!`);
    } else {
        let moneyNeeded = totalCost - BudgetForFilm;
        console.log(`The director needs ${moneyNeeded.toFixed(2)} leva more!`);
    }
}
DestinationForFilm(400000, "Sofia", "Winter", 20);