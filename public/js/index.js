document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const navbar = document.querySelector(".navbar");

  menu.addEventListener("click", function () {
    this.classList.toggle("fa-times");
    navbar.classList.toggle("nav-toggle");
  });
});


// pre loader start
function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}
function fadeOut() {
  setInterval(loader, 500);
}
window.onload = fadeOut;
// pre loader end