function canBreakRecord(recordInSeconds, distanceInMeters, timePerMeter) {
    let totalSwimmingTime = distanceInMeters * timePerMeter;
    let delays = Math.floor(distanceInMeters / 15);
    let totalDelayTime = delays * 12.5;
    let finalTime = totalSwimmingTime + totalDelayTime;
    let difference = recordInSeconds - finalTime ;
        if(finalTime < recordInSeconds){
        console.log (`Yes, he succeeded! The new world record is ${Math.abs(finalTime).toFixed(2)} seconds.`)
        } else {
        console.log (`No, he failed! He was ${Math.abs(difference).toFixed(2)} seconds slower.`)
        }
}
canBreakRecord(55555.67,3017,5.03);
   
