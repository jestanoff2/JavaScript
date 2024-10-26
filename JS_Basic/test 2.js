function checkRunningProgress(n, m, percentages) {
    let km_m = m; // Километрите за текущия ден
    let sum_km_m = km_m; // Общи километри

    // Цикъл за всеки ден
    for (let i = 0; i < n; i++) {
        if (i > 0) { // За първия ден не увеличаваме
            const day_m_prc = percentages[i - 1] / 100; // Процент на увеличаване
            km_m += km_m * day_m_prc; // Увеличаване на текущите километри
        }
        sum_km_m += km_m; // Добавяне на текущите километри към общите
    }

    // Проверка за постигнатите километри
    let deff;
    if (sum_km_m < 1000) {
        deff = Math.ceil(1000 - sum_km_m); // Изчисляване на недостигащите километри
        console.log(`Sorry Mrs. Ivanova, you need to run ${deff} more kilometers`);
    } else {
        deff = Math.ceil(sum_km_m - 1000); // Изчисляване на излишните километри
        console.log(`You've done a great job running ${deff} more kilometers!`);
    }
}
checkRunningProgress(["5",
    "30",
    "10",
    "15",
    "20",
    "5",
    "12"])
