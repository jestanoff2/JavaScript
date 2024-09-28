function lunchBreak(nameOffFilm, episodelength, breaklength) {
    let timeOnLunch = breaklength / 8;
    let timeForRest = breaklength / 4;
    let RestOffTime = breaklength - timeOnLunch - timeForRest;
    let neededTime = episodelength - RestOffTime;
    if (RestOffTime >= episodelength) {
        console.log(`You have enough time to watch ${nameOffFilm} and left with ${Math.ceil(-neededTime)} minutes free time.`);
    }
    else {
        console.log(`You don't have enough time to watch ${nameOffFilm}, you need ${Math.ceil(neededTime)} more minutes.`);
    }
}
lunchBreak("Game of Trones", 60, 98);