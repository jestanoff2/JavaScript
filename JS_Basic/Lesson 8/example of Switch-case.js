function fruitsOrVegies(food) {
    switch (food) {
        case "banana":
        case "apple":
        case "kiwi":
        case "Cherry":
        case "lemon":
        case "grapes":
            console.log("Fruits"); break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carot":
            console.log("vegtebles"); break;
        default:
            console.log("error");
    }
}
fruitsOrVegies("grapes")