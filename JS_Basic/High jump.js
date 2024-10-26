function HighJump(input) {
    let index = 0;
    let expectedJump = Number(input[index++]);
    let failCount = 0;
    let barHeight = expectedJump - 30;
    let currentJump = 0;
    let succeeded = false;
    while (true) {
        currentJump = Number(input[index++]);
        if (currentJump > barHeight) {
            if (barHeight >= expectedJump) {
                succeeded = true;
                break;
            }
            barHeight += 5;
            failCount = 0;
        } else {
            if ((++failCount) === 3) {
                break;
            }
        }
    }
    if (succeeded) {
        return console.log(`Tihomir succeeded, he jumped over ${barHeight}cm after ${index - 1} jumps.`);
    }
    console.log(`Tihomir failed at ${barHeight}cm after ${index - 1} jumps.`);
}

HighJump(["250",
    "225",
    "224",
    "225",
    "228",
    "231",
    "235",
    "234",
    "235"]);