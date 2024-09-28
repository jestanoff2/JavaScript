function orderMeals(chikenMenuOrder, fishMenuOrder, vegMenuOrder){
    let totalMenuPrice = chikenMenuOrder * 10.35 + fishMenuOrder * 12.40 + vegMenuOrder * 8.15;
    let desertPrice = 0.2 * totalMenuPrice;
    let totalPrice = totalMenuPrice + desertPrice + 2.5;
    console.log(totalPrice);  
}
orderMeals(2, 3, 4);