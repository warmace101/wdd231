// script.js
export function init() {
  loadItems();
  setupNavToggle();
}

async function loadItems() {
  try {
    const response = await fetch("https://api.example.com/destiny-items");
    const data = await response.json();
    displayItems(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayItems(items) {
  const itemList = document.getElementById("item-list");
  items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
            <h2>${item.name}</h2>
            <button onclick="showModal('${item.id}')">Details</button>
        `;
    itemList.appendChild(itemDiv);
  });
}

function showModal(itemId) {
  // Function to show modal with item details
}

function setupNavToggle() {
  const nav = document.querySelector("nav");
  nav.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

init();

// js/script.js
document.getElementById("nav-toggle").addEventListener("click", () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
});

// js/script.js
async function fetchEvents() {
  try {
    const response = await fetch("https://api.example.com/events");
    const data = await response.json();
    const eventContainer = document.getElementById("event-list");

    data.events.slice(0, 15).forEach((event) => {
      const eventItem = document.createElement("div");
      eventItem.classList.add("event");
      eventItem.innerHTML = `
              <h4>${event.name}</h4>
              <p>${event.description}</p>
              <button onclick="openModal('${event.id}')">Details</button>
          `;
      eventContainer.appendChild(eventItem);
    });
  } catch (error) {
    console.error("Error fetching events:", error);
  }
}
fetchEvents();

function openModal(eventId) {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
  document.getElementById(
    "modal-details"
  ).textContent = `Details for event ${eventId}`;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
localStorage.setItem("userPreference", JSON.stringify({ theme: "dark" }));
const preference = JSON.parse(localStorage.getItem("userPreference"));
