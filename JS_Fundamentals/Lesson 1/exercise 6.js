function displayNumbersAndSum(start, end) {
    let sum = 0;
    let output = '';
    
    for (let i = start; i <= end; i++) {
        output += i + ' '; 
        sum += i;           
    }

    console.log(output.trim());  
    console.log("Sum: " + sum);  
}
PrintAndSum(50,60);