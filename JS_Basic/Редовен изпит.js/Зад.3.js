function FootBall(input) {
    let team = input[0];
    let souvenirType = input[1];
    let numBoughtSouveniers  = Number(input[2]);
    let unitPrice;

    switch (team) {
        case "Argentina":
            switch (souvenirType) {
                case "flags": unitPrice = 3.25; break;
                case "caps": unitPrice = 7.20; break;
                case "posters": unitPrice = 5.10; break;
                case "stickers": unitPrice = 1.25; break;
                default:
                    console.log("Invalid stock!");
                    return;
            }
            break;
        case "Brazil":
            switch (souvenirType) {
                case "flags": unitPrice = 4.20; break;
                case "caps": unitPrice = 8.50; break;
                case "posters": unitPrice = 5.35; break;
                case "stickers": unitPrice = 1.20; break;
                default:
                    console.log("Invalid stock!");
                    return;
            }
            break;
        case "Croatia":
            switch (souvenirType) {
                case "flags": unitPrice = 2.75; break;
                case "caps": unitPrice = 6.90; break;
                case "posters": unitPrice = 4.95; break;
                case "stickers": unitPrice = 1.10; break;
                default:
                    console.log("Invalid stock!");
                    return;
            }
            break;
        case "Denmark":
            switch (souvenirType) {
                case "flags": unitPrice = 3.10; break;
                case "caps": unitPrice = 6.50; break;
                case "posters": unitPrice = 4.80; break;
                case "stickers": unitPrice = 0.90; break;
                default:
                    console.log("Invalid stock!");
                    return;
            }
            break;
        default:
            console.log("Invalid country!");
            return;
    }
    let totalCost = (numBoughtSouveniers * unitPrice).toFixed(2);
    console.log(`Pepi bought ${numBoughtSouveniers} ${souvenirType} of ${team} for ${totalCost} lv.`);
}
FootBall(["Argentina","shirts","35"])
//FootBall(["Denmark", "caps", "8"]);