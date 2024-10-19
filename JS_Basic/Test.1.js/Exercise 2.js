function calculateResults(matches) {
    let wins = 0;
    let losses = 0;
    let draws = 0;

    matches.forEach(match => {
        let teamScore = parseInt(match[0]); 
        let opponentScore = parseInt(match[2]); 

        if (teamScore > opponentScore) {
            wins++;
        } else if (teamScore < opponentScore) {
            losses++;
        } else {
            draws++;
        }
    });

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${losses} games.`);
    console.log(`Drawn games: ${draws}`);
}
calculateResults("3:1 , 0:2 , 0:0");