import { navBar } from './module/navigation.js';
import Book from './module/user.js';
import { DateTime } from './module/luxon.js';

document.addEventListener('DOMContentLoaded', () => {
  const book = new Book();
  book.init();
});

document.addEventListener('DOMContentLoaded', () => {
  navBar();
});

const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
document.getElementById('timeText').innerHTML = currentDate;