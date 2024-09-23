// Get the current year
const currentYear = new Date().getFullYear();
// Get the last modified date of the document
const lastModified = document.lastModified;

// Output the current year and last modified date in the footer
document.getElementById('getDate').textContent = currentYear;
document.getElementById('lastModified').textContent = lastModified;
