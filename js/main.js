/*----------------------------
File: Loading screen
Project: The website of Vexnos
Author: Daniel Lagesse
Date: 2021-11-23
----------------------------*/
window.addEventListener("load", function(){
  const loader = document.querySelector(".loader");
  const content = document.querySelector(".content");
  const body = document.querySelector(".main");
  loader.className += " hidden";
  content.className += " show";
  body.className += " scroll";
});