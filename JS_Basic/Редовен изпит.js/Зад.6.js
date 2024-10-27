function calculateGold(locationsData) {
    let index = 0;
    let locationsCount = locationsData[index++];
    
    while (locationsCount-- > 0) {
        let expectedGoldPerDay = parseFloat(locationsData[index++]);
        let days = parseInt(locationsData[index++]);
        let totalGold = 0;

        for (let i = 0; i < days; i++) {
            totalGold += parseFloat(locationsData[index++]);
        }

        let averageGold = totalGold / days;
        
        if (averageGold >= expectedGoldPerDay) {
            console.log(`Good job! Average gold per day: ${averageGold.toFixed(2)}.`);
        } else {
            let neededGold = (expectedGoldPerDay - averageGold).toFixed(2);
            console.log(`You need ${neededGold} gold.`);
        }
    }
}
calculateGold (["2","10","3","10","10","11","20","2","20","10"])