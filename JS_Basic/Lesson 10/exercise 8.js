function Grisho(numberOfTournaments, startingPoints, stage) {
    let totalPoints = startingPoints;
    let wins = 0;
    let totalPointsEarned = 0;

    for (let i = 0; i < numberOfTournaments; i++) {
        let points = 0;

        switch (stage) {
            case "W":
                points = 2000;
                wins++;
                break;
            case "F":
                points = 1200;
                break;
            case "SF":
                points = 720;
                break;
            default:
                break;
        }

        totalPoints += points;
        totalPointsEarned += points;
    }
    let averagePoints = Math.floor(totalPointsEarned / numberOfTournaments);
    let winPercentage = ((wins / numberOfTournaments) * 100).toFixed(2);

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${winPercentage}%`);
}Grisho("5","1400",("F","SF","W","W"),)  