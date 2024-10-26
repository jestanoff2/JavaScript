function vacation(input) {
    let NumOfPeopleInGroup = Number(input[0]);
    let NumOfNights = Number(input[1]);
    let NumOfcardsForTransport = Number(input[2]);
    let NumOfTicketForMuseum = Number(input[3]);
    let Night = 20;
    let CardForTrasnport = 1.6;
    let ticketForMuseum = 6;

    let totalPriceforNights = Number(NumOfNights) * Night;
    let totalPriceforCards = Number(NumOfcardsForTransport) * CardForTrasnport;
    let totalPriceForMuseum = ticketForMuseum * Number(NumOfTicketForMuseum);

    let CostforOneDude = totalPriceForMuseum + totalPriceforCards + totalPriceforNights;
    let PriceForWholeGroup = CostforOneDude * Number(NumOfPeopleInGroup);
    let finalPrice = PriceForWholeGroup + (PriceForWholeGroup * 0.25);
    console.log(finalPrice.toFixed(2));
}
//vacation(131,9,33,46)
vacation(["20",    "14",    "30",    "6"]);