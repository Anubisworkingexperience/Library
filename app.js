const addButton = document.querySelector('.add');
const addContainer = document.querySelector('.add-container');
const dialog = document.querySelector('dialog');

addButton.addEventListener('click', () => {
    dialog.showModal();
});

const myLibrary = [];

function Book(author, title, numberOfPages) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
}

function addBookToLibrary() {

}

