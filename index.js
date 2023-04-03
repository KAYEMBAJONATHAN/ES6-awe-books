import { DateTime } from './modules/luxon.js';
import Book from './modules/user.js';
import navBar from './modules/navigation.js';

document.addEventListener('DOMContentLoaded', () => {
  const book = new Book();
  book.init();
});

document.addEventListener('DOMContentLoaded', () => {
  navBar();
});

const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
document.getElementById('timeText').innerHTML = currentDate;