function calculateBudget(budget, videocard, processor, ram) {
   let  videocardPrice =  videocard * 250; 
   let  processorPrice =  processor * (videocardPrice * 0.35); 
   let  ramPrice =   ram * (videocardPrice * 0.10) ;

   let totalPrice =  videocardPrice + processorPrice + ramPrice;

   if (videocard > processor) {
          totalPrice *= 0.85; 
   }
   if (totalPrice <= budget) {
    let  remainingBudget = budget - totalPrice;
       console.log(`You have ${remainingBudget.toFixed(2)} leva left!`);
   } else {
    let  neededMoney = totalPrice - budget;
       console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva more!`);
   }
}
calculateBudget(900, 2 ,1, 3)