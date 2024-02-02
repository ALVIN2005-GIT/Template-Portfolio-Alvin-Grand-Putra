// gallery Image Animation
// Select all elements with the class "gallery-img" and apply AOS (Animate On Scroll) animation to them
const galleryImage = document.querySelectorAll(".gallery-img");

// Iterate over each gallery image element
galleryImage.forEach((img, i) => {
  // Set the AOS animation type to "fade-down" for each image
  img.dataset.aos = "fade-down";
  // Set a delay for each image based on its index multiplied by 50 milliseconds
  img.dataset.aosDelay = i * 50;
});

// Initialize AOS with specific configuration options
AOS.init({
  // Execute AOS animations only once
  once: true,
  // Set the duration of each animation to 2000 milliseconds (2 seconds)
  duration: 2000,
});
