function Convert(num1,operator,num2){
    if (operator === '+'){
      let result = num1 + num2;
      console.log(result.toFixed(2));
    }
    if (operator === '-'){
      let result = num1 - num2;
      console.log(result.toFixed(2));
    }
    if (operator === '/'){
      let result = num1 / num2;
      console.log(result.toFixed(2));
    }
    if (operator === '*'){
      let result = num1 * num2;
      console.log(result.toFixed(2));
    }
}