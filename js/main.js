/*----------------------------
File: Loading screen
Project: The website of Vexnos
Author: Daniel Lagesse
Date: 2021-11-23
----------------------------*/
// Modal Iamges
const images = document.querySelectorAll(".render");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");

images.forEach(image => {
  image.addEventListener("click", () => {
    modalImg.src = image.src;
    modal.classList.add("appear");
  });

  modalImg.addEventListener("click", () => {
    modal.classList.remove("appear");
  });
});

// Hamburger Menu
const toggle = document.querySelector(".toggle-btn");
const nav = document.querySelector(".links");

toggle.addEventListener('click', () => {
  nav.classList.toggle('clicked');
});

// Loading Screen
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  const content = document.querySelector(".content");
  const body = document.querySelector(".main");
  loader.className += " hidden";
  content.className += " show";
  body.className += " scroll";
});

// Keybinds
document.addEventListener("keydown", bind => {
  bind.preventDefault();

  if (bind.key.toLowerCase() === "1" && bind.altKey) {
    window.location.replace("index.html");
  } else if (bind.key.toLowerCase() === "2" && bind.altKey) {
    window.location.replace("blender.html");
  } else if (bind.key.toLowerCase() === "3" && bind.altKey) {
    window.location.replace("biscuit.html");
  }
});