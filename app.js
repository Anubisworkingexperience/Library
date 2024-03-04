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

function Book(title, author, numberOfPages, isRead) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    const submit = document.querySelector('.submit');
    const title = document.querySelector('.title');
    const author = document.querySelector('.author');
    const pages = document.querySelector('.pages');
    const isRead = document.querySelector('.read-checkbox');
    const form = document.querySelector('form');

    //getting data from forms after submitting
    form.addEventListener('submit', (event) => {
        console.log('Form submitted successfully');

        let titleValue = title.value;
        let authorValue = author.value;
        let pagesValue = Number(pages.value);
        let isReadValue = isRead.checked;

        console.log(titleValue, authorValue, pagesValue, isReadValue);

        //creating book object using constructor
        let book = new Book(titleValue, authorValue, pagesValue, isReadValue);

        //appending book object to array
        myLibrary.push(book);
        console.log(myLibrary);
        dialog.close();

        //resetting forms before reopening
        title.value = '';
        author.value = '';
        pages.value = '';
        isRead.checked = false;

        //preventing sending data to server default behavior
        event.preventDefault();
    });
}

addBookToLibrary();

