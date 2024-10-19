function foodForPets(NumDays, totalFood) {
    let totalEatenFood = 0;
    let totalEatenDog = 0;
    let totalEatenCat = 0;
    let totalBiscuits = 0;

    for (let day = 1; day <= NumDays; day++) {
        totalEatenDog += eatenDog;
        totalEatenCat += eatenCat;
        totalEatenFood += eatenDog + eatenCat;
        if (day % 3 === 0) {
            let biscuits = Math.round(0.1 * (eatenDog + eatenCat));
            totalBiscuits += biscuits;
        }
    }
    let eatenPercentage = (totalEatenFood / totalFood) * 100;
    let dogPercentage = (totalEatenDog / totalEatenFood) * 100;
    let catPercentage = (totalEatenCat / totalEatenFood) * 100;

    console.log(`Total eaten biscuits: ${totalBiscuits}gr.`);
    console.log(`${eatenPercentage.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogPercentage.toFixed(2)}% eaten from the dog.`);
    console.log(`${catPercentage.toFixed(2)}% eaten from the cat.`);
}
foodForPets(3,1000,300,20,100,30,110, 40)