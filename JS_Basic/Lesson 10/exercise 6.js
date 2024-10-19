function calculateNomination(actorName, initialPoints, evaluators) {
    let totalPoints = initialPoints;

    for (let i = 0; i < evaluators.length; i++) {
        const evaluator = evaluators[i];
        const evaluatorName = evaluator.name;
        const evaluatorScore = evaluator.score;

        totalPoints += (evaluatorName.length * evaluatorScore) / 2;

        if (totalPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            return;
        }
    }

    let neededPoints = (1250.5 - totalPoints).toFixed(1);
    console.log(`Sorry, ${actorName} you need ${neededPoints} more!`);
}

const actorName = "Иван Иванов";
const initialPoints = 200.0;
const evaluators = [
    { name: "Петър Петров", score: 20.0 },
    { name: "Мария Маринова", score: 30.0 },
    { name: "Георги Георгиев", score: 15.0 },
];