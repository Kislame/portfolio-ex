const slideNav = document.getElementById('slide-nav');
const hamburgerBtn = document.getElementById('hamburger-menu');
const closeBtn = document.getElementById('close');
const lastEl = slideNav.children[1].lastElementChild.children[0];
const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

function handleClick(e) {
  const src = e.currentTarget.querySelector('img').src;
  overlayImage.src = src;
  overlay.classList.add('expand');
}
function close() {
  overlay.classList.remove('expand');
}

const items = document.querySelectorAll('.item');

items.forEach((item) => item.addEventListener('click', handleClick));

overlayClose.addEventListener('click', close);

const handleOpen = () => {
  slideNav.classList.add('visible', 'open');
  setTimeout(() => {
    closeBtn.focus();
  }, 1);
  hamburgerBtn.setAttribute('aria-hidden', true);
};

const handleClose = (e) => {
  if (e.type === 'keyup' && e.key !== 'escape') return;
  slideNav.classList.remove('open');
  hamburgerBtn.removeAttribute('aria-hidden');
  // setTimeout(() => {
  //   hamburgerBtn.focus();
  // }, 1);
  setTimeout(() => {
    slideNav.classList.remove('visible');
  }, 501);
};

const moveFocusToTop = (e) => {
  if (e.key === 'Tab' && !e.shiftkey) {
    e.preventDefault();
    closeBtn.focus();
  }
};

const moveFocusToBottom = (e) => {
  if (e.key === 'Tab' && e.shiftKey) {
    e.preventDefault();
    lastEl.focus();
  }
};

hamburgerBtn.addEventListener('click', handleOpen);
closeBtn.addEventListener('click', handleClose);
lastEl.addEventListener('keydown', moveFocusToTop);
closeBtn.addEventListener('keydown', moveFocusToBottom);
