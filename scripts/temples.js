// --- DOM Selectors ---
const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("nav");
const currentYearSpan = document.querySelector("#currentYear");
const lastModifiedSpan = document.querySelector("#lastModifiedDate");

// --- Hamburger Menu Toggle ---
// Listening for user click events
menuButton.addEventListener("click", function() {
    // Toggle class '.open' on the navigation element
    navigation.classList.toggle("open");

    // Change button text visual based on menu state
    if (navigation.classList.contains("open")) {
        menuButton.innerHTML = "&times;"; // Changes button to an 'X'
    } else {
        menuButton.innerHTML = "&#9776;"; // Changes button back to 'hamburger' symbol
    }
});

// --- Dynamic Footer Details ---
// Populate the current year automatically
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

// Populate the Document's last modified information
lastModifiedSpan.textContent = document.lastModified;