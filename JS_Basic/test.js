function ExamPreparation(input) {
    let maxBadGrades = Number(input[0]);
    let currentBadGrades = gradesSum = gradesCount = 0;
    let index = 1;
    let command;

    do {
        command = input[index++];
        let grade = Number(input[index++]);

        if (grade <= 4) {
            currentBadGrades++;

            if (currentBadGrades === maxBadGrades) {
                console.log(`You need a break, ${currentBadGrades} poor grades.`);
                return;
            }
        }
        gradesCount++;
        gradesSum += grade;
    } while (input[index] !== 'Enough');

    let avgGrade = gradesSum / gradesCount;
    console.log(`Average score: ${avgGrade.toFixed(2)}\nNumber of problems: ${gradesCount}\nLast problem: ${command}`);
}

ExamPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"]);