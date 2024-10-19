function calculateSavings(ageLilly, washingMachinePrice, toyPrice) {
    let toysCount = 0, totalMoney = 0;
    for (let year = 1; year <= ageLilly; year++) {
        if (year % 2) {
            toysCount++;
            continue;
        }
        totalMoney += (year / 2) * 10 - 1;
    }
    let totalSavedMoney = totalMoney + toysCount * toyPrice;
    let rest = (Math.abs(washingMachinePrice - totalSavedMoney)).toFixed(2);
    if (totalSavedMoney >= washingMachinePrice) {
        console.log(`Yes! ${rest}`);
        return;
    }
    console.log(`No! ${rest}`)
}
calculateSavings(21, 1570.98, 3)  