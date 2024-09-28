function basketballEquipment(annualtraingFee){
    let sneakerPrice = 0.6 * annualtraingFee;
    let outfitPrice = 0.8 * sneakerPrice;
    let ballPrice = (1 / 4) * outfitPrice;
    let accessoriesPrice = (1 / 5) * ballPrice;

    let totalPrice = annualtraingFee + sneakerPrice + outfitPrice + ballPrice + accessoriesPrice;
    console.log(totalPrice);
}

basketballEquipment(365)