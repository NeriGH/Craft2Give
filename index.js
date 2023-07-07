// JavaScript for sectionRules navigation

// Get the book image element
const bookImage = document.querySelector(".bookImage");

// Get the arrow buttons
const prevButton = document.querySelector(".prevButton");
const nextButton = document.querySelector(".nextButton");

// Array of book image URLs or file paths
const bookImages = [
  "assets/images/Image1.png",
  "assets/images/Image2.png",
  "assets/images/Image3.png",
  // Add more book images as needed
];

// Set the initial image index
let currentImageIndex = 0;

// Function to update the book image source
const updateBookImage = () => {
  bookImage.src = bookImages[currentImageIndex];
};

// Event listener for previous button
prevButton.addEventListener("click", () => {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = bookImages.length - 1;
  }
  updateBookImage();
});

// Event listener for next button
nextButton.addEventListener("click", () => {
  currentImageIndex++;
  if (currentImageIndex >= bookImages.length) {
    currentImageIndex = 0;
  }
  updateBookImage();
});

// Set the initial book image
updateBookImage();
