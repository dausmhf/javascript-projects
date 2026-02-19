const bookList = [
    "The Great Gatsby",
    "To Kill a Mockingbird",
    "Indonesian BOOK",
    "Book 1",
    "Book 2",
    "Book 3",
    "Book 4",
    "Book 5",
    ]


// Search System using WHILE LOOP
let searchInput = "Book 1";

let foundBook = null;

let i = 0;

while (bookList.length > i) {
    if (bookList[i] === searchInput) {
        foundBook = bookList[i];
    console.log("we found your book: " + foundBook);

    
    break; // Exit loop once book is found

    }
    i++;
}
