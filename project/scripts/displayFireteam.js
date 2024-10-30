document.addEventListener("DOMContentLoaded", function () {
  const fireteamList = document.getElementById("fireteam-list");
  const fireteams = JSON.parse(localStorage.getItem("fireteams")) || [];

  if (fireteams.length === 0) {
    fireteamList.innerHTML = "<p>No fireteam members submitted yet.</p>";
  } else {
    fireteams.forEach((fireteam, index) => {
      const fireteamDiv = document.createElement("div");
      fireteamDiv.innerHTML = `
                <h3>${fireteam.name}</h3>
                <p>Class: ${fireteam.class}</p>
                <p>Power Level: ${fireteam.powerLevel}</p>
                <p>SubClass: ${fireteam.message}</p>
                <hr>
            `;
      fireteamList.appendChild(fireteamDiv);
    });
  }
});
