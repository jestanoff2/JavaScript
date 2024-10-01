function newHome(flowerType, flowerCount, budget) {
    let totalPrice = 0;
    switch (flowerType) {

        case 'Roses':
            totalPrice = flowerCount * 5;
            if (flowerCount > 80) {
                flowerCount *= 0.9;
            }
            break;

        case 'Dahlias':
            totalPrice = flowerCount * 3.8;
            if (flowerCount > 90) {
                totalPrice *= 0.85;
            }
            break;

            ;
        case 'Tulips':
            totalPrice = flowerCount * 2.8;
            if (flowerCount > 80) {
                totalPrice *= 0.85;
            }
            break;

        case 'Narcissus':
            totalPrice = flowerCount * 3;
            if (flowerCount < 120) {
                totalPrice *= 1.15;
            }
            break;

        case 'Gladiolus':
            totalPrice = flowerCount * 2.5;
            if (flowerCount < 80) {
                totalPrice *= 1.20;
            }
            break;
    }
    if (budget >= totalPrice) {
        let moneyLeft = budget - totalPrice;
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        let neededmoney = totalPrice - budget;
        console.log(`Not enough money, you need ${neededmoney.toFixed(2)} leva more.`)
    }
}
newHome("Tulips", 88, 260)