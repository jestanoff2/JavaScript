function addFifteenMinutes(hour, minutes) {
    let after15 = minutes += 15;
    if (after15 >= 60) {
        hour += Math.floor(after15 / 60);
        after15 = after15 % 60;
    }
    let newhour = hour % 24;
    if (after15 >= 10) {
        console.log(`${newhour}:${after15}`)
    } else {
        console.log(`${newhour}:0${after15}`)
    }
}
addFifteenMinutes(12, 49);