function Number(input) {
    let index = 0;
    let FirstNum = Number(input[index]);
    index++;
    let totalCount = 0;

    while (true) {
        if (totalCount >= FirstNum) {
            break;
        }
        let num = Number(input[index]);
        index++;

        sum += num;
    }
    console.log(sum);
}
Number(["100",
    "10",
    "20",
    "30",
    "40"])