function calculateTripCost(input) {
    let NumOfPeople = Number(input[0]);
    let Season = input[1];
    let PricePerPerson = 0;
    switch (Season) {
        case "spring":
            if (NumOfPeople > 5) {
                PricePerPerson = 48;
            } else {
                 PricePerPerson = 50;
            }
            break;
        case "summer":
            if (NumOfPeople > 5) {
                 PricePerPerson = 45;
            } else {
                 PricePerPerson = 48.50;
            }
            PricePerPerson *= 0.85;
            break;
        case "autumn":
            if (NumOfPeople > 5) {
                 PricePerPerson = 49.50;
            } else {
                 PricePerPerson = 60;
            }
            break;
        case "winter":
            if (NumOfPeople > 5) {
                 PricePerPerson = 85;
            } else {
                 PricePerPerson = 86;
            }
            PricePerPerson *= 1.08;
            break;
    }
    let totalCost = PricePerPerson * NumOfPeople;
    console.log(`${totalCost.toFixed(2)} leva.`)
}
calculateTripCost (["5","spring"])