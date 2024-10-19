function numsEndingIn7() {
    for (let currentNum = 1; currentNum <= 1000; currentNum++) {
        if (currentNum % 10 === 7) {
            console.log(currentNum)
        }
    }
}
