function TownInfo(townName,population,area){
    if (townName.length < 3){
        console.log("Town name must be at least 3 characters!");
        return;
    }
    if (population < 0){
       console.log("Population must be a positive number!")
       return;
    }
    if (area < 0){
       console.log("area must be a positive number!")
       return;
    }
    console.log(`Town ${townName} has population of ${population} and area ${area} square km.`)
}