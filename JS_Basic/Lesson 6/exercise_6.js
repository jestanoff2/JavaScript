function canBreakRecord(recordInSeconds, distanceInMeters, timePerMeter) {
    let totalSwimmingTime = distanceInMeters * timePerMeter;
    let delays = Math.floor(distanceInMeters / 15);
    let totalDelayTime = delays * 12.5;
    let finalTime = totalSwimmingTime + totalDelayTime;
    let difference = finalTime - recordInSeconds;
        if(finalTime < recordInSeconds){
        console.log (`Yes, he succeeded! The new world record is ${Math.abs( difference).toFixed(2)} seconds.`)
        } else {
        console.log (`No, he failed! He was ${difference.toFixed(2)} seconds slower.`)
        }
}
canBreakRecord();
