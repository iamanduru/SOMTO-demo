
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

//Navigation bar
$('.expandHome').mouseover(function() {
  $('.sub-home').css({
        'display': 'block'
    }); 
});
$('.subnavbtn').mouseover(function() {
  $('.sub-home').css({
        'display': 'none'
    }); 
});

$('#trapezoid').mouseleave(function() {
  $('#trapezoid').css({
        'margin-top': '-53px'
    }); 
    $('.sub-home').css({
        'display': 'none'
    }); 
}).mouseenter(function() {
  $('#trapezoid').css({
        'margin-top': '0px'
    }); 
});
              


//Form submission
document.querySelector('.form-box').addEventListener('submit', function (e) {
  const firstName = document.querySelector('input[name="FirstName"]').value;
  const lastName = document.querySelector('input[name="LastName"]').value;
  const email = document.querySelector('input[name="Email"]').value;
  const phoneNumber = document.querySelector('input[name="PhoneNumber"]').value;
  const message = document.querySelector('textarea[name="Message"]').value;

  if (!firstName || !lastName || !email || !message) {
    e.preventDefault(); // Prevent form submission
    alert('Please fill in all the required fields.');
  }
});

/*
//Gallery section
const imageSources = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  // Add more image URLs here
];

const galleryContainer = document.getElementById("imageGallery");

imageSources.slice(0, 20).forEach((imageSource, index) => {
  const imageDiv = document.createElement("div");
  imageDiv.classList.add("col-md-3", "col-sm-6", "gallery-item");
  const image = document.createElement("img");
  image.src = imageSource;
  image.alt = `Image ${index + 1}`;
  imageDiv.appendChild(image);
  galleryContainer.appendChild(imageDiv);
}); */