// Function to get random members with Gold or Silver membership
function getRandomMembers(members, count) {
  const filteredMembers = members.filter(
    (member) =>
      member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
  );
  const randomMembers = [];

  for (let i = 0; i < count; i++) {
    if (filteredMembers.length === 0) break; // Stop if no members are left
    const randomIndex = Math.floor(Math.random() * filteredMembers.length);
    randomMembers.push(filteredMembers[randomIndex]);
    filteredMembers.splice(randomIndex, 1); // Remove selected member to avoid duplication
  }

  return randomMembers;
}

// Fetch the JSON data for chamber members
fetch("scripts/members.json") // Replace with the actual path to your JSON file
  .then((response) => response.json())
  .then((data) => {
    // Get random members (e.g., 2 or 3 members)
    const spotlightMembers = getRandomMembers(data.members, 2);

    // Select the container where the spotlights will be displayed
    const spotlightContainer = document.getElementById("spotolight");

    // Display the members' information
    spotlightMembers.forEach((member) => {
      const memberDiv = document.createElement("div");
      memberDiv.innerHTML = `
          <h3>${member.companyName}</h3>
          <img src="${member.logo}" alt="${member.companyName} logo" style="width:100px;height:auto;">
          <p><strong>Phone:</strong> ${member.phone}</p>
          <p><strong>Address:</strong> ${member.address}</p>
          <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
          <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
          <hr>
        `;
      spotlightContainer.appendChild(memberDiv);
    });
  })
  .catch((error) => {
    console.error("Error fetching member data:", error);
  });
