const addButton = document.querySelector('.add');
const addContainer = document.querySelector('.add-container');
const dialog = document.querySelector('dialog');
const body = document.querySelector('body');
const content = document.querySelector('.content');


function modalBox() {
    let modalOpened;
    const modalElements = document.querySelectorAll('.modal');
    console.log(modalElements);

    addButton.addEventListener('click', () => {
        dialog.showModal();
        modalOpened = true;
    });
    dialog.addEventListener('click', (event) => {
        if (modalOpened && !content.contains(event.target)) {
            dialog.close();
            modalOpened = false;
        }
    });
}

modalBox();

const myLibrary = [];

function Book(author, title, numberOfPages) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
}

function addBookToLibrary() {

}

