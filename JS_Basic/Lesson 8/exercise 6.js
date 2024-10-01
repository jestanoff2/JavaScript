function calculate(N1, N2, operator) {
    let result;
    let output;

    switch (operator) {
        case '+':
            result = N1 + N2;
            output = `${N1} + ${N2} = ${result} – ${result % 2 === 0 ? 'even' : 'odd'}`;
            break;
        case '-':
            result = N1 - N2;
            output = `${N1} - ${N2} = ${result} – ${result % 2 === 0 ? 'even' : 'odd'}`;
            break;
        case '*':
            result = N1 * N2;
            output = `${N1} * ${N2} = ${result} – ${result % 2 === 0 ? 'even' : 'odd'}`;
            break;
        case '/':
            if (N2 === 0) {
                output = `Cannot divide ${N1} by zero`;
            } else {
                result = (N1 / N2).toFixed(2);
                output = `${N1} / ${N2} = ${result}`;
            }
            break;
        case '%':
            if (N2 === 0) {
                output = `Cannot divide ${N1} by zero`;
            } else {
                result = N1 % N2;
                output = `${N1} % ${N2} = ${result}`;
            }
            break;
        default:
            output = "Invalid operator";
            break;
    }

    console.log(output);
}
calculate(10, 12, "+")