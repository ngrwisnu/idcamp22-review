const hamburgerMenu = document.querySelector("i.hamburger");
const navMenu = document.querySelector(".nav-links ul");
const menuIcon = document.querySelector("i.hamburger");
const icon = document.querySelector("i");
const floatBtn = document.querySelector(".float-btn");

// Floating button controller
function floatingButtonHandler() {
  if (window.scrollY > 200) {
    floatBtn.classList.remove("hide");
  } else {
    floatBtn.classList.add("hide");
  }
}

window.addEventListener("load", floatingButtonHandler);

window.addEventListener("scroll", floatingButtonHandler);

// Hamburger menu controller
hamburgerMenu.addEventListener("click", (e) => {
  navMenu.classList.toggle("showed");
  menuIcon.classList.toggle("neutral-10");

  const checkClass = e.target.classList;

  if (checkClass.contains("bx-menu")) {
    checkClass.remove("bx-menu");
    checkClass.add("bx-x");
  } else {
    checkClass.add("bx-menu");
    checkClass.remove("bx-x");
  }
});
