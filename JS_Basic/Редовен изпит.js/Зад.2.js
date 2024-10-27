function Processor(input){
    let ProcessorForWork = Number(input[0]);
    let numOfStaff = Number(input[1]);
    let WorkDays = Number(input[2]);

    let totalHourWork = numOfStaff * WorkDays * 8;
    let totalProcessors = Math.floor(totalHourWork / 3);

    if (ProcessorForWork <= totalProcessors){
        let Exter = totalProcessors - ProcessorForWork;
        let FinalSum = Exter * 110.10;
        console.log(`Profit: -> ${FinalSum.toFixed(2)} BGN`);
    }else{
       let Exterr = ProcessorForWork - totalProcessors;
       let FinalSum = 110.10 * Exterr;
       console.log(`Losses: -> ${FinalSum.toFixed(2)} BGN`);
       
    }
}
//Processor(["500","8","20"])
Processor(["150","7","18"])