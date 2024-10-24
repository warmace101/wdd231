// discover.js
document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll("img.lazy");

  if ("IntersectionObserver" in window) {
    let imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyImages.forEach((image) => {
      imageObserver.observe(image);
    });
  } else {
    // Fallback for older browsers
    lazyImages.forEach((image) => {
      image.src = image.dataset.src;
    });
  }
});
// Get current time and last visit
let lastVisit = localStorage.getItem("lastVisit");
let currentTime = Date.now();
let messageElement = document.getElementById("visitMessage");

// If this is the user's first visit
if (!lastVisit) {
  messageElement.textContent =
    "Welcome! Let us know if you have any questions.";
} else {
  let lastVisitDate = parseInt(lastVisit);
  let differenceInTime = currentTime - lastVisitDate;
  let differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

  if (differenceInDays === 0) {
    messageElement.textContent = "Back so soon! Awesome!";
  } else if (differenceInDays === 1) {
    messageElement.textContent = "You last visited 1 day ago.";
  } else {
    messageElement.textContent = `You last visited ${differenceInDays} days ago.`;
  }
}

// Update last visit in localStorage
localStorage.setItem("lastVisit", currentTime);
