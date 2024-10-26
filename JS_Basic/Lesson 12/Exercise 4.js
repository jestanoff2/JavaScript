function steps(input){
    let totalsteps = 0;

    let index = 0;
    let command = input[index];
    index++;

    while(command !== 'Going home'){
        let steps  = Number(command);
        totalsteps += steps;
    }
}