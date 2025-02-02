function ConvertDistance(num){
    let km = num / 1000;
    let miles = km * 0.621371;
    console.log(`${num} meters is equal to ${km} kilometers.`);
    console.log(`${km} kilometers is equal to ${miles.toFixed(2)} miles.`)
}