function Christmasgifts(input) {
    let adultCount = 0;
    let kidCount = 0;
    let moneyForToys = 0;
    let moneyForSweaters = 0;

    for (let i = 0; i < input.length; i++) {
        let age = input[i];

        if (age === "Christmas") {
            break;
        }

        age = Number(age); 
        if (age <= 16) {
            kidCount++;
            moneyForToys += 5;
        } else {
            adultCount++;
            moneyForSweaters += 15;
        }
    }

    console.log(`Number of adults: ${adultCount}`);
    console.log(`Number of kids: ${kidCount}`);
    console.log(`Money for toys: ${moneyForToys}`);
    console.log(`Money for sweaters: ${moneyForSweaters}`);
}
Christmasgifts(["16", "20", "46", "12", "8", "20", "49", "Christmas"]);