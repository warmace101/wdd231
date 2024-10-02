const membersContainer = document.getElementById("membersContainer");
const toggleViewButton = document.getElementById("toggleView");
let isGridView = true;

// Fetch member data
async function fetchMembers() {
  try {
    const response = await fetch("scripts/members.json");
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    console.error("Error fetching member data:", error);
  }
}

// Display members in the selected view
function displayMembers(members) {
  membersContainer.innerHTML = ""; // Clear existing content
  members.forEach((member) => {
    const memberCard = document.createElement("div");
    memberCard.className = isGridView ? "member-card" : "member-list-item";
    memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Website</a>
            <p>Membership Level: ${member.membershipLevel}</p>
            <p>${member.info}</p>
        `;
    membersContainer.appendChild(memberCard);
  });
}

// Toggle between grid and list view
toggleViewButton.addEventListener("click", () => {
  isGridView = !isGridView;
  membersContainer.className = isGridView ? "grid-view" : "list-view";
  fetchMembers(); // Re-fetch to apply the view
});

// Initial fetch
fetchMembers();
