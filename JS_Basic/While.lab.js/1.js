function solve(input) {
    let index = 0;
    let i = input[index];
    index++;

    while (true) {
        if (i === "Stop") {
            return;
        }
        console.log(i);
        i = input[index];
        index++;
    }
}
solve(["Nakov","SoftUni","Sofia","Bulgaria","SomeText","Stop","AfterStop","Europe","HelloWorld"]);