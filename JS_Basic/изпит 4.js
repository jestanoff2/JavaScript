function Workout(input) {
    let NumOfDaysTrained = Number(input[0]);
    let currentKm = Number(input[1]);
    let totalDistance = currentKm;
    for (let index = 2; index <= NumOfDaysTrained + 1; index++) {
        let percentage = Number(input[index]);
        currentKm += currentKm * (percentage / 100);
        totalDistance += currentKm;
    }
    if (totalDistance >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(totalDistance - 1000)} more kilometers!`);
    } else {
        let Run = 1000 - totalDistance;
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(Run)} more kilometers`);

    }
}
//Workout(["5", "30", "10", "15", "20", "5", "12"]);
Workout(["4", "100", "30", "50", "60", "80"])

// 1 ден: 30 км
// 2 ден: 30 + 10% = 33 км
// 3 ден: 33 + 15% = 37.95 км
// 4 ден: 37.95 + 20% = 45.54 км
// 5 ден: 45.54 + 5% = 47.817 км
// 6 ден: 47.817 + 12% = 53.55504 км
// Общо километри: 247.86204
// 247.86204 < 1000 =>
// Недостигащи километри :
// 1000 – 247.86204= 752.13796 => 753

