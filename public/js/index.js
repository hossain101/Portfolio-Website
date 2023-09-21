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

//scroll funciton
document.querySelectorAll('a[href*="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      var targetId = this.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
          window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY,
              behavior: 'smooth'
          });
      }
  });
});