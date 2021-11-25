/*----------------------------
File: Loading screen
Project: The website of Vexnos
Author: Daniel Lagesse
Date: 2021-11-23
----------------------------*/
/*---- Hamburger Menu ----*/
const toggle = document.querySelector(".toggle-btn");
const nav = document.querySelector(".links");

toggle.addEventListener('click', () => {
  nav.classList.toggle('clicked');
});

/*---- Loading Screen ----*/
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  const content = document.querySelector(".content");
  const body = document.querySelector(".main");
  loader.className += " hidden";
  content.className += " show";
  body.className += " scroll";
});