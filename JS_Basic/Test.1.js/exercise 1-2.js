function Basketball(YearTax) {
    let BasketballCleats = YearTax * 0.60;
    let BasketballClothes = BasketballCleats * 0.80;
    let BasketballBall = BasketballClothes * 0.25;
    let BasketballAccessories = BasketballBall * 0.20;
    let SumOfAll = YearTax + BasketballCleats + BasketballClothes + BasketballBall + BasketballAccessories;
    console.log(SumOfAll.toFixed(2));
}
Basketball(230);