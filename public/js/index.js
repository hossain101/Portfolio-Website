document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const navbar = document.querySelector(".navbar");

  menu.addEventListener("click", function () {
    this.classList.toggle("fa-times");
    navbar.classList.toggle("nav-toggle");
  });
});


const testimonialContainer = document.querySelector('.testimonial-container');

testimonialContainer.addEventListener('mouseenter', () => {
    testimonialContainer.style.animationPlayState = 'paused';
});

testimonialContainer.addEventListener('mouseleave', () => {
    testimonialContainer.style.animationPlayState = 'running';
});