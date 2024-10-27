function Change(bitcoins, yuan, commission) {
    let bitcoinToLeva = 1168;
    let yuanToLev = 0.15;
    let euroToLeva = 1.95;
     
    let sumOfAll = (bitcoinToLeva + bitcoins) + (yuanToLev + yuan);
    let LevToEuro = sumOfAll / euroToLeva;

}
Change(1,5,5);  