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
