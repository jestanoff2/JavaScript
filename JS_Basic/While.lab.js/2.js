function password(input){
    index = 0;
    let name = input[0];
    let password = input[1];
    let nextpass = input[2];
    index++;

    while(true){
        if(password === nextpass){
            console.log(`Wellcome ${name}!`);
            break;
        }
        nextpass = input[index];
        index++;
    }
}
//password(["Nakov","1234","Pass","1324","1234"])
password(["Gosho","secret","secret"])