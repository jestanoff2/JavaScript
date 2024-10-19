function oldLibrary(input) {
    let searchedBook = input[0];
    let bookChecked = 0;

    let index = 1;
    let command = input[index];
    index++;

    while (command !== 'No More Books') {
        let bookTitle = command;

        if (bookTitle === searchedBook) {
            console.log(`You checked ${bookChecked} books and found it.`);
            return;
        }

        bookChecked++;
        command = input[index];
        index++;
    }
    console.log("The book you search is not here!");
    console.log(`You checked ${bookChecked} books.`);
}
oldLibrary(["Troy", "Stronger", "Life Style", "Troy"]);