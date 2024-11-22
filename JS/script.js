// Calling HTML elements

const body = document.querySelector("body");
const navbar = document.querySelector("#navbar");
const menu = document.querySelector(".menu");
const menuIcon = document.querySelector("#menu-icon");
const themeCheckbox = document.querySelector("#theme-checkbox");
const check = document.querySelector(".check");
const botn = document.querySelector(".botn");
const navLinks = document.querySelectorAll(".nav-links");
const home = document.querySelector("#home");
const homeBackground = document.querySelector(".home-background");
const name = document.querySelector(".name");
const projectBtn = document.querySelector(".project-btn");
const projectBtnLink = document.querySelector(".project-btn-link");
const aboutBackground = document.querySelector(".about-background");
const projectBackground = document.querySelector(".project-background");
const projectBackgroundProjects = document.querySelectorAll(".pro");
const btns = document.querySelectorAll(".btn");
const btnLinks = document.querySelectorAll(".btn-link");
const contactBackground = document.querySelector(".contact-background");
const copyright = document.querySelector(".copyright");
const icons = document.querySelectorAll(".icon");

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
projectBackgroundProjects.forEach((projectBackgroundProject) => {
  projectBackgroundProject.classList.add("light-mode");
});
btns.forEach((btn) => {
  btn.classList.add("light-mode");
});
btnLinks.forEach((btnLink) => {
  btnLink.classList.add("light-mode");
});
contactBackground.classList.add("light-mode");
copyright.classList.add("light-mode");
aboutBackground.classList.add("light-mode");
check.classList.add("light-mode");
botn.classList.add("light-mode");
menu.classList.add("light-mode");
menuIcon.classList.add("light-mode");
icons.forEach((icon) => {
  icon.classList.add("light-mode");
});

// Dark Mode Function
const toggleMOde = () => {
  body.classList.toggle("dark-mode");
  navbar.classList.toggle("dark-mode");
  navLinks.forEach((navLink) => {
    navLink.classList.toggle("dark-mode");
  });
  homeBackground.classList.toggle("dark-mode");
  name.classList.toggle("dark-mode");
  projectBtn.classList.toggle("dark-mode");
  projectBtnLink.classList.toggle("dark-mode");
  projectBackground.classList.toggle("dark-mode");
  projectBackgroundProjects.forEach((projectBackgroundProject) => {
    projectBackgroundProject.classList.toggle("dark-mode");
  });
  btns.forEach((btn) => {
    btn.classList.toggle("dark-mode");
  });
  btnLinks.forEach((btnLink) => {
    btnLink.classList.toggle("dark-mode");
  });
  contactBackground.classList.toggle("dark-mode");
  copyright.classList.toggle("dark-mode");
  aboutBackground.classList.toggle("dark-mode");
  check.classList.toggle("dark-mode");
  botn.classList.toggle("dark-mode");
  menu.classList.toggle("dark-mode");
  menuIcon.classList.toggle("dark-mode");
  icons.forEach((icon) => {
    icon.classList.toggle("dark-mode");
  });
};

// Eventlistener for themeCheckbox

themeCheckbox.addEventListener("click", toggleMOde);

// Hiding the Navbar

const translating = () => {
  navbar.classList.toggle("hide");
  home.classList.toggle("margin-top");
}

menu.addEventListener("click", translating);