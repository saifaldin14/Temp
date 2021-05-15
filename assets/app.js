(function () {
  "use strict";

  // Add Scripts Here
  const toggleButton = document.getElementsByClassName("toggle-button")[0];
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];

  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });

  const toggleContentButton = document.getElementById("content-button");
  const contentLinks = document.getElementsByClassName("details-div")[0];

  toggleContentButton.addEventListener("click", () => {
    contentLinks.classList.toggle("active");
  });
})();
