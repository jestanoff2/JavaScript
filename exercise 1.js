function cinemaTickets(projectionType, rowCount, colCount){

    let ticketCount = rowCount * colCount;
    let profit = 0;

    if (projectionType === 'Premiere'){
        profit = ticketCount * 12;
    } else if (projectionType === 'Normal'){
        profit = ticketCount * 7.5;
    } else if (projectionType === 'Discount'){
        profit = ticketCount * 5;
    }
    console.log(`${profit.toFixed(2)} leva`);
}
cinemaTickets("Normal",21,13)