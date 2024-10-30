// Assume this is in a file named script.js
async function fetchDungeons() {
  const response = await fetch("scripts/dungeons.json");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}

function createItemCard(activity) {
  const card = document.createElement("div");
  card.className = "item";
  card.innerHTML = `
      <h3>${activity.name}</h3>
      <p>Type: ${activity.type} | Date: ${activity.date}</p>
      <a href="#" class="modal-link" data-id="${activity.id}">Learn More</a>
  `;
  document.getElementById("item-list").appendChild(card);

  // Event listener for modal
  card.querySelector(".modal-link").addEventListener("click", (event) => {
    event.preventDefault();
    openModal(activity);
  });
}

function openModal(activity) {
  document.getElementById("modal-details").innerHTML = `
      <h2>${activity.name}</h2>
      <p>${activity.description}</p>
  `;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Load activities and render them
async function loadActivities() {
  try {
    const activities = await fetchDungeons();
    activities.forEach(createItemCard);
  } catch (error) {
    console.error("Error fetching activities:", error);
  }
}

// Event listener for close modal
document.getElementById("close-modal").addEventListener("click", closeModal);

// Initial load of activities
loadActivities();
