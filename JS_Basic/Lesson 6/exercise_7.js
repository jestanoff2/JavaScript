function calculateTotalCost(budget,N, M, P,) {
    let videocard = N * 250;
    let procesor = (videocard * 0.35)
    let ram = (videocard * 0.10)
    let sumOfAll = videocard + ram + procesor;
    if (videocard > procesor){
            sumOfAll * 0.15;
    } 
    let leftOverMoney = budget - sumOfAll;
    if (budget > sumOfAll){
       console.log (`You have ${leftOverMoney} leva left!`)
    } else {
       console.log(`Not enough money! You need ${sumOfAll} leva more!`)
    }
    
}   
calculateTotalCost(900,2,1,3);
