
const booksContainer = document.querySelector('#books_section');
export default (bookList) => {
  booksContainer.textContent = '';
  if (bookList.length > 0) {
    for (let i = 0; i < bookList.length; i += 1) {
      addBookToPage(bookList[i].title, bookList[i].author, i, bookList);
    }
  }
};