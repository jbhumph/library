const myLibrary = [];

function Book(title, author, pages) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    // do stuff here
    const newBook = new Book(`${bookTitle.value}`, `${bookAuthor.value}`, bookPages.value);
    myLibrary.push(newBook);
    printBook(myLibrary[myLibrary.length - 1], myLibrary.length - 1);
}

function printBook(obj, name) {
    const book = document.createElement("tr");
    book.classList.add(name);
    const title = document.createElement("td");
    title.textContent = obj.title;
    const author = document.createElement("td");
    author.textContent = obj.author;
    const pages = document.createElement("td");
    pages.textContent = obj.pages;
    const remove = document.createElement("td");
    remove.innerHTML =
        "<button type='button' id=b"+`${name}`+">Remove</button>";
    container.appendChild(book);
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(remove);

    const deleteButton = container.querySelector(`#b${name}`);

    deleteButton.addEventListener("click", (e) => {
        book.remove();
    })
}

function removeBook(obj) {
    const book = document.querySelector(obj);
    book.remove();
}

const container = document.querySelector("table");

const showButton = document.getElementById("showDialog");
const bookDialog = document.getElementById("bookDialog");
const bookTitle = bookDialog.querySelector("#bookTitle");
const bookAuthor = bookDialog.querySelector("#bookAuthor");
const bookPages = bookDialog.querySelector("#bookPages");
const confirmButton = bookDialog.querySelector("#confirmButton");



showButton.addEventListener("click", () => {
    bookDialog.showModal();
})

confirmButton.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary();
    bookDialog.close(bookTitle.value);
})



const theHobbit = new Book("The Hobbit", "JRR Tolkein", 369);
const lordOfTheRings = new Book("Lord Of The Rings", "JRR Tolkein", 689);

myLibrary.push(theHobbit);
myLibrary.push(lordOfTheRings);
let num = 0
myLibrary.forEach((obj) => {
    printBook(obj, num);
    num++;
})