export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    const div = document.createElement('div');
    div.classList.add('list-container');
    div.innerHTML = `<div class="list">
        <div class="row">
          <h3>"${this.title}"</h3> by
          <p>${this.author}</p>
        </div>
        <a href="#" class="btn btn-danger btn-sm remove">Remove</a>
      </div>`;
    document.querySelector('.book-list').appendChild(div);
  }

  static deleteBookList(element) {
    if (element.classList.contains('list-container')) {
      element.remove();
    }
  }

  static clearFormInputs() {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    title.value = '';
    author.value = '';
  }

  static displayBooks() {
    const books = Book.getBooks();
    books.forEach((book) => {
      const newBook = new Book(book.title, book.author);
      newBook.addBook();
    });
  }

  static addBook(book) {
    const books = Book.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static deleteBook(bookIndex) {
    const books = Book.getBooks();
    books.splice(bookIndex, 1);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBookHandler(e) {
    e.preventDefault();
    const removeButton = e.target.closest('.remove');
    if (removeButton) {
      const bookContainer = removeButton.closest('.list-container');
      const bookIndex = Array.from(document.querySelectorAll('.list-container')).indexOf(bookContainer);
      Book.deleteBookList(bookContainer);
      Book.deleteBook(bookIndex);
    }
  }
}
const formBook = document.querySelector('.new-book-container');
formBook.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  // Validation
  if (title === '' || author === '') {
    return;
  }

  const newBook = new Book(title, author);
  newBook.addBook();
  Book.addBook(newBook);

  Book.clearFormInputs();
  document.querySelector('#add__book').style.display = 'none';
  document.querySelector('.list-container').style.display = 'flex';
});

// Event: Remove a Book
document.querySelector('.book-list').addEventListener('click', Book.removeBookHandler);

Book.displayBooks();