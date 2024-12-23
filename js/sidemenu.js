// sidemenu.js
// Created by: Michael Emborsky
// Purpose:


// TO DO
// Ideally not have this page at all and do all animations in css



document.addEventListener('DOMContentLoaded', function() {
    // Initializing Properties
    var header = document.querySelector('header');
    var currentPage = document.querySelector('.current');
    var chevron = document.getElementById('chevron');
    var chevronPointer = chevron.querySelector('.pointer')
    var links = document.querySelector('.main-link');
    links.style.display = 'none';
    var isExpanded = false; // Flag to track the state of expanded links
    let width = screen.width;
    if (width <= 430) {
      var isMobile = true;
    } else {
      var isMobile = false;
    }
    chevronPointer.style.transformOrigin = 'center';
    function rotateIn() {
      chevronPointer.style.transition = 'transform 0.8s ease-in-out'; // Add transition for smooth animation
      chevronPointer.style.transform = 'rotate(180deg)'; // Rotate to 180 degrees
    }
    function rotateOut() {
      chevronPointer.style.transform = 'rotate(0deg)';
    }
    // Expand or Collapse Links
    chevron.addEventListener('click', function(e) {
      e.preventDefault();
      if (isExpanded) {
        // Collapse the links
        links.style.display = 'none';
        header.style.width = '0';
        chevron.style.left = '0';
        isExpanded = false;
        chevronPointer.setAttribute('transform', `rotate(180 25 50)`);
        rotateOut();
      } else {
        // Expand the links
        links.style.display = 'flex';
        links.style.alignItems = 'center';
        links.style.flexDirection = 'column';
        if (isMobile == true) {
          header.style.width = '70%';
          chevron.style.left = '70%';
        } else {
          header.style.width = '25%';
          chevron.style.left = '25%';
        }
        isExpanded = true;
        chevronPointer.setAttribute('transform', `rotate(180 25 50)`);
        rotateIn();
      }
      header.style.transition = 'width 0.5s ease-in-out';
      chevron.style.transition = 'left 0.5s ease-in-out';
      chevronPointer.style.transition = 'transform .5s ease-in-out';
      links.style.transition = 'display 1s ease-in-out';
    });
});
  