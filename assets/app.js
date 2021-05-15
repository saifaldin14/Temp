(function () {
  "use strict";

  // Add Scripts Here
  const toggleButton = document.getElementsByClassName("toggle-button")[0];
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];

  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });

  const toggleContentButton =
    document.getElementsByClassName("content-button")[0];
  const toggleContentButtonHidden = document.getElementsByClassName(
    "content-button-hidden"
  )[0];
  const contentLinks = document.getElementsByClassName("details-div")[0];

  toggleContentButton.addEventListener("click", () => {
    toggleContentButtonHidden.classList.toggle("active");
    toggleContentButton.classList.toggle("active");
    contentLinks.classList.toggle("active");
  });

  toggleContentButtonHidden.addEventListener("click", () => {
    toggleContentButtonHidden.classList.toggle("active");
    toggleContentButton.classList.toggle("active");
    contentLinks.classList.toggle("active");
  });
})();
