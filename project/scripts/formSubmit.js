document
  .getElementById("fireteam-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const className = document.getElementById("class").value;
    const powerLevel = document.getElementById("powerLevel").value;
    const message = document.getElementById("message").value;

    // Create an object to store
    const fireteamData = {
      name,
      class: className,
      powerLevel,
      message,
    };

    // Store in local storage
    let fireteams = JSON.parse(localStorage.getItem("fireteams")) || [];
    fireteams.push(fireteamData);
    localStorage.setItem("fireteams", JSON.stringify(fireteams));

    // Redirect to fireteams page
    window.location.href = "fireteams.html";
  });
