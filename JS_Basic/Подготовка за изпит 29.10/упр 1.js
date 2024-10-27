function birthDay (Rent){
    let Cake = Rent * 0.2;
    let Drinks = Cake - (Cake * 0.45);
    let Animators = Rent / 3;
    let totalcost = Rent + Drinks + Animators + Cake;
    console.log(totalcost);  
}
birthDay(3720);