// Set the current timestamp in the hidden input field
function setTimestamp() {
  document.getElementById("timestamp").value = new Date().toISOString();
}

// Modal functionality
const modals = document.querySelectorAll(".modal");
const modalLinks = document.querySelectorAll(".modal-link");
const closeButtons = document.querySelectorAll(".close");

modalLinks.forEach((link) => {
  link.onclick = function (event) {
    event.preventDefault();
    const modalId = link.getAttribute("href");
    document.querySelector(modalId).style.display = "block";
  };
});

closeButtons.forEach((button) => {
  button.onclick = function () {
    button.closest(".modal").style.display = "none";
  };
});

window.onclick = function (event) {
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};

// Optional: Close modals when pressing Escape
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modals.forEach((modal) => {
      modal.style.display = "none";
    });
  }
});
