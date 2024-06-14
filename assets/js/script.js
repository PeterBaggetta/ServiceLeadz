'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}





document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("form-modal");
  const closeButton = document.querySelector(".close-button");

  // Function to show the modal
  function showModal() {
      modal.style.display = "block";
      document.body.style.overflow = "hidden"; // Disable scrolling
  }

  // Function to hide the modal
  function hideModal() {
      modal.style.display = "none";
      document.body.style.overflow = ""; // Enable scrolling
  }

  // Show the modal when the page loads
  showModal();

  // Close the modal when the close button is clicked
  closeButton.addEventListener("click", hideModal);

  // Close the modal when clicking outside of the modal content
  window.addEventListener("click", function(event) {
      if (event.target === modal) {
          hideModal();
      }
  });
});

function toggleForm() {
  var form = document.getElementById("form-modal");
  if (form.style.display == "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}










/**
 * navbar toggle
 */

// const navbar = document.querySelector("[data-navbar]");
// const navToggler = document.querySelectorAll("[data-nav-toggler]");
// const overlay = document.querySelector("[data-overlay]");

// const toggleNavbar = function () {
//   navbar.classList.toggle("active");
//   overlay.classList.toggle("active");
// }

// addEventOnElem(navToggler, "click", toggleNavbar);



/**
 * close navbar when click on any navbar links
 */

// const navLinks = document.querySelectorAll("[data-nav-link]");

// const closeNavbar = function () {
//   navbar.classList.remove("active");
//   overlay.classList.remove("active");
// }

// addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down
 */

// const header = document.querySelector("[data-header]");

// const headerActive = function () {
//   window.scrollY > 100 ? header.classList.add("active")
//     : header.classList.remove("active");
// }

// addEventOnElem(window, "scroll", headerActive);



/**
 * accordion toggle
 */

const accordionAction = document.querySelectorAll("[data-accordion-action]");

const toggleAccordion = function () { this.classList.toggle("active"); }

addEventOnElem(accordionAction, "click", toggleAccordion);
