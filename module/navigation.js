export default () => {
  const home = document.getElementById('home__li');
  const addBook = document.getElementById('add__book__li');
  const contact = document.getElementById('contact__li');

  home.addEventListener('click', () => {
    document.querySelector('.list-container').style.display = 'flex';
    document.querySelector('#add__book').style.display = 'none';
    document.querySelector('#contact').style.display = 'none';
  });

  addBook.addEventListener('click', () => {
    document.querySelector('#home').style.display = 'none';
    document.querySelector('.new-book-container').style.display = 'flex';
    document.querySelector('#contact').style.display = 'none';
  });

  contact.addEventListener('click', () => {
    document.querySelector('#home').style.display = 'none';
    document.querySelector('#add__book').style.display = 'none';
    document.querySelector('#contact').style.display = 'flex';
  });
};