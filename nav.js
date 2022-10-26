let nav_button = document.getElementById("nav_button");
let isOpened = false;

let nav_menu = document.getElementById("nav_menu");

nav_button.addEventListener("click", () => {
  console.log("test");
  isOpened = !isOpened;
  (isOpened && (nav_menu.className = "show")) || (nav_menu.className = "");
});
