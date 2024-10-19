function TimeOnExam (examHour, examMinute, arrivalHour, arrivalMinute,){
    let examTime = examHour * 60 + examMinute;
    let arrivalTime = arrivalHour * 60 + arrivalMinute;

    let difference = arrivalTime - examTime;

    if (difference > 0) {
        console.log("Late");
        if (difference < 60) {
            console.log(`${difference} minutes after the start`);
        } else {
            let hours = Math.floor(difference / 60);
            let minutes = difference % 60;
            console.log(`${hours}:${minutes.toString().padStart(2, '0')} hours after the start`);
        }
    } else if (difference >= -30) {
        console.log(`On time`);
    } else {
        console.log("Early");
        let earlyDifference = -difference; 
        if (earlyDifference < 60) {
            console.log(`${earlyDifference} minutes before the start`);
        } else {
            let hours = Math.floor(earlyDifference / 60);
            let minutes = earlyDifference % 60;
            console.log(`${hours}:${minutes.toString().padStart(2, '0')} hours before the start`);
        }
    }
}
TimeOnExam(14,0,13,55)