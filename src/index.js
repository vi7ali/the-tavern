'use strict'

import pageLoad from './page-load';
import menu from './menu';
import contact from './contact';

const content = document.getElementById('content');
const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const contactBtn = document.getElementById('contact-btn');

function clearContent() {
  const buttons = document.getElementsByClassName('nav__button');
  content.innerHTML = '';
  for (let btn of buttons)
    btn.classList.remove('nav__button--active');
}

function goHome() {
  clearContent();
  homeBtn.classList.add('nav__button--active');
  content.innerHTML = pageLoad();
}

function goMenu() {
  clearContent();
  menuBtn.classList.add('nav__button--active');
  content.innerHTML = menu();
}

function goContact() {
  clearContent();
  contactBtn.classList.add('nav__button--active');
  content.innerHTML = contact();
}

content.innerHTML = pageLoad();

homeBtn.addEventListener('click', pageLoad, false);
menuBtn.addEventListener('click', goMenu, false);
contactBtn.addEventListener('click', goContact, false);