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
document.querySelectorAll('a[href*="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    var targetId = this.getAttribute("href").substring(1);
    var targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY,
        behavior: "smooth",
      });
    }
  });
});

//highlight navbar

function highlightNavItemBasedOnPage() {
  // Get the current page path (e.g., /education, /experience, etc.)
  var currentPagePath = window.location.pathname;

  // Select the navigation items
  var navItems = document.querySelectorAll('header .navbar ul li a');

  // Loop through the navigation items
  navItems.forEach(function(navItem) {
      // Remove the "active" class from all navigation items
      navItem.classList.remove('active');

      // Get the URL specified in the 'href' attribute of the navigation item
      var navItemUrl = navItem.getAttribute('href');

      // Check if the current page path matches the navigation item's URL
      if (currentPagePath === navItemUrl) {
          // Add a class to highlight the navigation item
          navItem.classList.add('active');
      }
  });
}

// Call the function when the page loads
window.addEventListener('load', highlightNavItemBasedOnPage);
// Call the function when the page loads
