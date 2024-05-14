const mobilMenu = document.querySelector(".mobilMenu");
const mobilNavLink = document.querySelector(".mobilNavLink");
const removeButton = document.querySelector("#removeButton");

mobilMenu.addEventListener("click", function () {
  mobilNavLink.classList.toggle("showMenu");
  document.body.classList.toggle("lockScroll");
});

removeButton.addEventListener("click", function () {
  mobilNavLink.classList.toggle("showMenu");
  document.body.classList.toggle("lockScroll");
});
