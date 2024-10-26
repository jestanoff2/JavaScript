function ticketForSnucker(Stage, TicketType, NumTickets, trophyPhoto) {
    let ticketPrice = 0;

    switch (Stage) {
        case "Quarter final":
            switch (TicketType) {
                case "Standard":
                    ticketPrice = 55.50;
                    break;
                case "Premium":
                    ticketPrice = 105.20;
                    break;
                case "VIP":
                    ticketPrice = 118.90;
                    break;
            }
            break;
        case "Semi final":
            switch (TicketType) {
                case "Standard":
                    ticketPrice = 75.88;
                    break;
                case "Premium":
                    ticketPrice = 125.22;
                    break;
                case "VIP":
                    ticketPrice = 300.40;
                    break;
            }
            break;
        case "Final":
            switch (TicketType) {
                case "Standard":
                    ticketPrice = 110.10;
                    break;
                case "Premium":
                    ticketPrice = 160.66;
                    break;
                case "VIP":
                    ticketPrice = 400.00;
                    break;
            }
            break;
    }

    let totalPrice = ticketPrice * NumTickets;

    if (totalPrice > 4000) {
        totalPrice *= 0.75;
    } else if (totalPrice > 2500) {
        totalPrice *= 0.90;
    }

    if ((trophyPhoto === 'Y') || (totalPrice <= 4000)) {
        totalPrice += NumTickets * 40;
    }
    console.log(totalPrice.toFixed(2));
}
ticketForSnucker("Final", "Premium", "25", "Y");
//ticketForSnucker("Semi final","VIP","9","Y");