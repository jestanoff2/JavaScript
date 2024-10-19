function TennisSupplies (pricePerRacket, numberOfRackets,numberOfSneakers){ 

let priceOfSneaker = pricePerRacket / 6;
let totalRacketPrice = pricePerRacket * numberOfRackets;
let totalSneakerPrice = priceOfSneaker * numberOfSneakers;
let totalEquipmentCost = totalRacketPrice + totalSneakerPrice;
let additionalEquipmentCost = totalEquipmentCost * 0.2;

let totalPrice = totalEquipmentCost + additionalEquipmentCost;

let priceToBePaidByDjokovic = Math.floor(totalPrice / 8);
let priceToBePaidBySponsors = Math.ceil((totalPrice * 7) / 8);

console.log(`Price to be paid by Djokovic ${priceToBePaidByDjokovic}`);
console.log(`Price to be paid by sponsors ${priceToBePaidBySponsors}`);

}
TennisSupplies(368, 7, 4);