function calculatePrice(month, nights) {
    let studioPrice, apartmentPrice;
    switch (month) {
        case "May":
        case "October":
            studioPrice = 50;
            apartmentPrice = 65;
            break;
        case "June":
        case "September":
            studioPrice = 75.20;
            apartmentPrice = 68.70;
            break;
        case "July":
        case "August":
            studioPrice = 76;
            apartmentPrice = 77;
            break;
    }
    let studioCost = studioPrice * nights;
    let apartmentCost = apartmentPrice * nights;

    if ((month === "May" || month === "October") && nights > 14) {
        studioCost *= 0.70; // 30% намаление
    } else if ((month === "May" || month === "October") && nights > 7) {
        studioCost *= 0.95; // 5% намаление
    } else if ((month === "June" || month === "September") && nights > 14) {
        studioCost *= 0.80; // 20% намаление
    }

    if (nights > 14) {
        apartmentCost *= 0.90; // 10% намаление
    }
    console.log(`Apartment: ${apartmentCost.toFixed(2)} lv.`);
    console.log(`Studio: ${studioCost.toFixed(2)} lv.`);
}
calculatePrice("June", 14)