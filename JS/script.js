// Calling HTML elements

const body = document.querySelector("body");
const navbar = document.querySelector("#navbar");
const themeCheckbox = document.querySelector("#theme-checkbox");
const navLinks = document.querySelectorAll(".nav-links");
const homeBackground = document.querySelector(".home-background");
const name = document.querySelector(".name");
const projectBtn = document.querySelector(".project-btn");
const projectBtnLink = document.querySelector(".project-btn-link");
const projectBackground = document.querySelector(".project-background");
const projectBackgroundProject = document.querySelector(".pro");
const btns = document.querySelectorAll(".btn");
const btnLinks = document.querySelectorAll(".btn-link");
const contactBackground = document.querySelector(".contact-background");
const copyright = document.querySelector(".copyright");

// Default theme
body.classList.add("light-mode");
navbar.classList.add("light-mode");
navLinks.forEach((navLink) => {
  navLink.classList.add("light-mode");
});
homeBackground.classList.add("light-mode");
name.classList.add("light-mode");
projectBtn.classList.add("light-mode");
projectBtnLink.classList.add("light-mode");
projectBackground.classList.add("light-mode");
projectBackgroundProject.classList.add("light-mode");
btns.forEach((btn) => {
  btn.classList.add("light-mode");
});
btnLinks.forEach((btnLink) => {
    btnLink.classList.add("light-mode");
});
contactBackground.classList.add("light-mode");
copyright.classList.add("light-mode");
