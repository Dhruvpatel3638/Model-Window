'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openBtns = document.querySelectorAll('.show-modal');
const closeBtns = document.querySelector('.close-modal');

const openModel = function () {
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModel = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < openBtns.length; i++)
  openBtns[i].addEventListener('click', openModel);

closeBtns.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    closeModel();
  }
});
