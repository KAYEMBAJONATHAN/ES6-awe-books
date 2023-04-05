const booksContainer = document.querySelector('#books_section');
export default (bookName, bookAuthor, id, bookArray) => {
  const bookContainer = document.createElement('div');
  bookContainer.classList.add('book_container');
  bookContainer.classList.add(`book${id}`);
  if (id % 2 === 0) {
    bookContainer.classList.add('dark-bg');
  }
  bookContainer.classList.add('book-item');
  const bookDetails = document.createElement('p');
  bookDetails.innerHTML = `
      "${bookName}" by ${bookAuthor}
    `;
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  bookContainer.appendChild(bookDetails);
  bookContainer.appendChild(removeButton);
  booksContainer.appendChild(bookContainer);
  removeButton.addEventListener('click', () => {
    bookArray.splice(id, 1);
    localStorage.setItem('books', JSON.stringify(bookArray));
    booksContainer.removeChild(bookContainer);
  });
};