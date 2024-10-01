function SchoolSuplies(PenPacket, Markerpacket, Soap, discount,) {
    let supliesPrice = PenPacket * 5.80 + Markerpacket * 7.20 + Soap * 1.20;
    let discountDecimal = discount / 100;
    let discountSum = discountDecimal * supliesPrice;
    let finalPrice = supliesPrice - discountSum;

    console.log(finalPrice);
}
SchoolSuplies(2, 3, 4, 25);