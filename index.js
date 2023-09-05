// script.js
/*
document.addEventListener('DOMContentLoaded', function() {
  // Get all toggle buttons
  const toggleButtons = document.querySelectorAll('.toggle-button');

  // Add click event listeners to each toggle button
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Toggle the active class on the button
      button.classList.toggle('active');

      // Get the target toggle content element
      const targetContent = document.getElementById(button.dataset.target);

      // Toggle the display of the content
      targetContent.style.display = targetContent.style.display === 'none' ? 'block' : 'none';
    });
  });
}); */

/* Background Animated
function randomValues() {
  anime({
    targets: '.square, .circle, .triangle', // Corrected 'triagle' to 'triangle'
    translateX: function() {
      return anime.random(-500, 500);
    },
    translateY: function() {
      return anime.random(-300, 300);
    },
    rotate: function() {
      return anime.random(0, 360);
    },
    scale: function() {
      return anime.random(0.2, 2);
    },
    duration: 1000,
    easing: 'easeInOutQuad',
    complete: randomValues,
  });
}
randomValues(); */

//Work section
var imageThumbs = document.getElementById("image-thumbs");
var currentImage = document.getElementById("current-image");

for (var i = 1; i <= 10; i++) {
  var thumb = document.createElement("img");
  thumb.src = "img/img" + i + ".jpg";
  thumb.alt = "img " + i;
  thumb.classList.add("thumb");
  imageThumbs.appendChild(thumb);
  thumb.addEventListener(
    "click", function() {
      currentImage.src = this.src;
    }
  );
}

  // Attach event listener to the form submit button
  const submitButton = document.querySelector('.submit-btn');
  submitButton.addEventListener('click', handleSubmit);

  // Add an event listener to the "Lets Go" button
const scrollDownButton = document.querySelector(".scroll-down");

scrollDownButton.addEventListener("click", () => {
  // Perform your desired action when the button is clicked
  // For example, you can scroll to a specific section of the page
  // We'll use the smooth scrolling behavior provided by the 'behavior: "smooth"' option
  const targetSection = document.getElementById("#about");
  targetSection.scrollIntoView({ behavior: "smooth" });
});
  