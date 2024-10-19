function calculateHotelCost(days, roomType, rating) {
    let pricePerNight;
    let discount = 0;

    switch (roomType) {
        case "room for one person":
            pricePerNight = 18.00;
            break;
        case "apartment":
            pricePerNight = 25.00;
            if (days < 10) { discount = 0.30; }
            else if (days >= 10 && days <= 15) { discount = 0.35; }
            else discount = 0.50;
            break;
        case "president apartment":
            pricePerNight = 35.00;
            if (days < 10) discount = 0.10;
            else if (days >= 10 && days <= 15) discount = 0.15;
            else discount = 0.20;
            break;
        default:
            console.log("Невалиден тип помещение.");
            return;
    }
    let nights = days > 0 ? days - 1 : 0;
    let totalCost = nights * pricePerNight;

    totalCost -= totalCost * discount;

    if (rating === "positive") {
        finalcost = totalCost + (totalCost * 0.25);
    } else if (rating === "negative") {
        finalcost = totalCost - (totalCost * 0.10);
    }

    console.log(finalcost.toFixed(2));
}
calculateHotelCost(30, "president apartment", "negative")