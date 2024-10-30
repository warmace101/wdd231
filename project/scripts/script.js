import { fetchActivities } from "./module.js";

const itemListElement = document.getElementById("item-list");
const modalElement = document.getElementById("modal");
const modalDetailsElement = document.getElementById("modal-details");
const closeModalButton = document.getElementById("close-modal");

// Function to create an item card
function createItemCard(activity) {
  const card = document.createElement("div");
  card.className = "item";
  card.innerHTML = `
        <h3>${activity.name}</h3>
        <p>Type: ${activity.type} | Date: ${activity.date}</p>
        <a href="#" class="modal-link" data-id="${activity.id}">Learn More</a>
    `;
  itemListElement.appendChild(card);

  // Event listener for modal
  card.querySelector(".modal-link").addEventListener("click", (event) => {
    event.preventDefault();
    openModal(activity);
  });
}

// Function to open the modal
function openModal(activity) {
  modalDetailsElement.innerHTML = `
        <h2>${activity.name} (${activity.type})</h2>
        <p>${activity.description}</p>
    `;
  modalElement.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modalElement.style.display = "none";
}

// Fetch activities and render them
async function loadActivities() {
  try {
    const activities = await fetchActivities(); // Fetch activities from the module
    activities.forEach(createItemCard); // Create cards for each activity
    await loadDungeons(); // Load dungeons after activities
  } catch (error) {
    console.error("Error fetching activities:", error);
  }
}

// Function to load dungeons from the JSON file
async function loadDungeons() {
  try {
    const response = await fetch("dungeons.json");
    const dungeons = await response.json();
    dungeons.forEach(createItemCard); // Create cards for dungeons too
  } catch (error) {
    console.error("Error fetching dungeons:", error);
  }
}

// Event listener for close modal
closeModalButton.addEventListener("click", closeModal);

// Initial load of activities
loadActivities();
