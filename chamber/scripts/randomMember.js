const membersContainer = document.getElementById('membersContainer');

// Function to fetch member data from JSON file
async function fetchMembers() {
    try {
        const response = await fetch("scripts/members.json");
        if (!response.ok) throw new Error('Network response was not ok');
        const members = await response.json();
        displayRandomMembers(members);
    } catch (error) {
        console.error("Error fetching member data:", error);
    }
}

// Function to display random Gold or Silver members
function displayRandomMembers(members) {
    const goldSilverMembers = members.filter(member => 
        member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver'
    );

    // Shuffle and select 3 random members
    const selectedMembers = goldSilverMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

    // Clear the container and display selected members
    membersContainer.innerHTML = ""; // Clear existing content
    selectedMembers.forEach(member => {
        const memberCard = document.createElement("div");
        memberCard.className = "member-card"; // Add your desired class for styling
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone_number}</p>
            <a href="${member.website_url}" target="_blank">Website</a>
            <p>Membership Level: ${member.membershipLevel}</p>
        `;
        membersContainer.appendChild(memberCard);
    });
}

// Fetch and display members on page load
fetchMembers();
