import './style.css';
import displayUI from './modules/displayUI.js';
import createPopup from './modules/popup.js';

displayUI();

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('btnClass')) {
    createPopup(e.target.id);
  }
});
