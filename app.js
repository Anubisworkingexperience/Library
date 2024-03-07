const addButton = document.querySelector('.add');
const addContainer = document.querySelector('.add-container');
const dialog = document.querySelector('dialog');
const body = document.querySelector('body');
const content = document.querySelector('.content');


function modalBox() {
    let modalOpened;
    const modalElements = document.querySelectorAll('.modal');
    // console.log(modalElements);

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
    let submitCount = 0;
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

        //adding cards on the screen
        const cardContainer = document.querySelector('.card-container');

    for (let i = submitCount; i < myLibrary.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.classList.add(`card${i}`);

        //card content
        let cardTitle = document.createElement('div');
        cardTitle.textContent = `"${myLibrary[i].title}"`;
        card.appendChild(cardTitle);

        let cardAuthor = document.createElement('div');
        cardAuthor.textContent = myLibrary[i].author;
        card.appendChild(cardAuthor);

        let cardPages = document.createElement('div');
        cardPages.textContent = `${myLibrary[i].numberOfPages} pages`;
        card.appendChild(cardPages);

        let cardRead = document.createElement('div');
        cardRead.classList.add('card-read');
        switch(myLibrary[i].isRead) {
            case true:
                cardRead.classList.add('card-read');
                cardRead.textContent = 'Read';
                break;
            case false:
                cardRead.classList.add('card-notRead');
                cardRead.textContent = 'Not read';
                break;
        }

        card.appendChild(cardRead);

        let cardRemove = document.createElement('div');
        cardRemove.classList.add('card-remove');
        cardRemove.textContent = 'Remove';
        card.appendChild(cardRemove);

        cardRemove.addEventListener('click' , (e) => {
            cardContainer.removeChild(card);
        });

            cardContainer.appendChild(card);
    }

        //resetting forms before reopening
        title.value = '';
        author.value = '';
        pages.value = '';
        isRead.checked = false;

        submitCount += 1;

        //prevent sending data to server default behavior
        event.preventDefault();
    });
}

addBookToLibrary();

// function showBookCards() {
    // const cardContainer = document.querySelector('.card-container');

    // for (let i = submitCount - 1; i < myLibrary.length; i++) {
    //     let card = document.createElement('div');
    //     card.classList.add('card');
    //     card.classList.add(`card${i}`);

    //     //card content
    //     let cardTitle = document.createElement('div');
    //     cardTitle.textContent = `"${myLibrary[i].title}"`;
    //     card.appendChild(cardTitle);

    //     let cardAuthor = document.createElement('div');
    //     cardAuthor.textContent = myLibrary[i].author;
    //     card.appendChild(cardAuthor);

    //     let cardPages = document.createElement('div');
    //     cardPages.textContent = `${myLibrary[i].numberOfPages} pages`;
    //     card.appendChild(cardPages);

    //     let cardRead = document.createElement('div');
    //     cardRead.classList.add('card-read');
    //     switch(myLibrary[i].isRead) {
    //         case true:
    //             cardRead.classList.add('card-read');
    //             cardRead.textContent = 'Read';
    //             break;
    //         case false:
    //             cardRead.classList.add('card-notRead');
    //             cardRead.textContent = 'Not read';
    //             break;
    //     }

    //     card.appendChild(cardRead);

    //     let cardRemove = document.createElement('div');
    //     cardRemove.classList.add('card-remove');
    //     cardRemove.textContent = 'Remove';
    //     card.appendChild(cardRemove);

    //     cardRemove.addEventListener('click' , (e) => {
    //         cardContainer.removeChild(card);
    //     });

    //         cardContainer.appendChild(card);
    // }
            
// }

