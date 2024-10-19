function Shop(PriceForStrawberries, KGBanans, KGOranges, KGRaspberries, KGStrawberries){
   let PriceForRaspberries = PriceForStrawberries / 2;
   let PriceOfOranges = PriceForRaspberries * 0.6;
   let PriceOfBanana = PriceForRaspberries * 0.2;
   let SumOfRaspberries = KGRaspberries * PriceForRaspberries;
   let SumOfOranges = KGOranges * PriceOfOranges;
   let SumOfBananas = KGBanans * PriceOfBanana
   let SumOfStrawberries =  KGStrawberries * PriceForStrawberries;
   let SumOfAll = SumOfBananas + SumOfOranges + SumOfRaspberries + SumOfStrawberries;
   console.log(SumOfAll.toFixed(2));
   
}
Shop (48, 10,  3.3, 6.5, 1.7);