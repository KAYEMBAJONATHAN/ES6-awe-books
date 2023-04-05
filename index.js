import addBook from './module/addBook.js';
import loadBooks from './module/loadBooks.js';
import { DateTime } from './module/luxon.js';

const addButton = document.querySelector('#add_book');
const formContainer = document.querySelector('.book-form');
const bookListSection = document.querySelector('.book-list-section');
const contactSection = document.querySelector('.contact-section');
const listLink = document.querySelector('#list-btn');
const AddNewLink = document.querySelector('#add-btn');
const contactLink = document.querySelector('#contact-btn');
const bookNameInput = document.querySelector('#book-name');
const bookAuthorInput = document.querySelector('#book-author');
const now = DateTime.now();
const todayTime = now.toJSDate().toGMTString();
let bookList = [];
const localData = localStorage.getItem('books');
if (localData) {
  bookList = JSON.parse(localData);
}

addButton.addEventListener('click', () => {
  addBook(bookNameInput.value, bookAuthorInput.value, bookList);
  loadBooks(bookList);
});

listLink.addEventListener('click', () => {
  bookListSection.style.display = 'block';
  formContainer.style.display = 'none';
  contactSection.style.display = 'none';
});

AddNewLink.addEventListener('click', () => {
  bookListSection.style.display = 'none';
  formContainer.style.display = 'flex';
  contactSection.style.display = 'none';
});

contactLink.addEventListener('click', () => {
  bookListSection.style.display = 'none';
  contactSection.style.display = 'flex';
  formContainer.style.display = 'none';
});

const dateContainer = document.querySelector('.date-container');
dateContainer.innerHTML = todayTime;
loadBooks(bookList);