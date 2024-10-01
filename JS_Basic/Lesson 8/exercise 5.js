function Journey(budget, season){
    let destination;
    let spent;
    let accommodation;

    if (budget <= 100) {
        destination = "Bulgaria";
        accommodation = season === "summer" ? "Camp" : "Hotel";
        spent = season === "summer" ? budget * 0.3 : budget * 0.7;
    } else if (budget <= 1000) {
        destination = "Balkans";
        accommodation = season === "summer" ? "Camp" : "Hotel";
        spent = season === "summer" ? budget * 0.4 : budget * 0.8;
    } else {
        destination = "Europe";
        accommodation = "Hotel"; // независимо от сезона
        spent = budget * 0.9;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${accommodation} - ${spent.toFixed(2)}`);
}
Journey(50, "summer")