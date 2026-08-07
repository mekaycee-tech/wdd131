// Array of Landmark Objects[cite: 1]
const landmarksList = [
  {
    name: "Old Town Hall",
    era: "historic",
    year: 1892,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500",
    description: "A beautifully preserved stone civic center showcasing classic 19th-century craftmanship[cite: 1]."
  },
  {
    name: "Central Heritage Cathedral",
    era: "historic",
    year: 1905,
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?w=500",
    description: "Constructed in 1905 with intricate stained-glass panels and majestic arches[cite: 1]."
  },
  {
    name: "Innovation Glass Tower",
    era: "modern",
    year: 2018,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500",
    description: "An eco-friendly contemporary skyscraper highlighting modern sustainable architecture[cite: 1]."
  },
  {
    name: "Metropolitan Art Pavilion",
    era: "modern",
    year: 2012,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500",
    description: "Designed in 2012 to host open-air cultural exhibitions and public community events[cite: 1]."
  }
];

// Function 1: Display cards in DOM using Array Methods and Template Literals[cite: 1]
function renderLandmarks(items) {
  const container = document.getElementById("dynamic-landmarks");
  if (!container) return; // Guard clause if run on non-explore pages

  container.innerHTML = ""; // Clear existing content

  items.forEach(item => {
    // String built using Template Literals exclusive syntax[cite: 1]
    const cardHTML = `
      <div class="card">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <h3>${item.name}</h3>
        <p><strong>Built:</strong> ${item.year}</p>
        <p>${item.description}</p>
      </div>
    `;
    container.innerHTML += cardHTML;
  });
}

// Function 2: Filter Landmarks by Era using Conditional Branching[cite: 1]
function filterLandmarks() {
  const selectElement = document.getElementById("era-filter");
  if (!selectElement) return;

  const selectedEra = selectElement.value;

  if (selectedEra === "all") {
    renderLandmarks(landmarksList);
  } else {
    // Array filter method[cite: 1]
    const filtered = landmarksList.filter(item => item.era === selectedEra);
    renderLandmarks(filtered);
  }
}

// Function 3: Estimate Tour Time[cite: 1]
function calculateTripTime() {
  const countInput = document.getElementById("landmark-count");
  const resultParagraph = document.getElementById("estimation-result");

  if (countInput && resultParagraph) {
    const count = parseInt(countInput.value, 10);
    const totalMinutes = count * 45; // Assumes 45 mins per site

    resultParagraph.textContent = `Estimated tour duration: ${totalMinutes} minutes for ${count} location(s).`;
  }
}

// Event Listeners & LocalStorage Initialization[cite: 1]
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial Render on Explore Page[cite: 1]
  renderLandmarks(landmarksList);

  const eraSelect = document.getElementById("era-filter");
  if (eraSelect) {
    eraSelect.addEventListener("change", filterLandmarks);
  }

  const calcBtn = document.getElementById("calculate-btn");
  if (calcBtn) {
    calcBtn.addEventListener("click", calculateTripTime);
  }

  // 2. Contact Form with LocalStorage interaction[cite: 1]
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    const nameInput = document.getElementById("user-name");
    
    // Check if name exists in localStorage[cite: 1]
    const savedName = localStorage.getItem("visitorName");
    if (savedName && nameInput) {
      nameInput.value = savedName;
    }

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const visitorName = nameInput.value;
      
      // Save to localStorage[cite: 1]
      localStorage.setItem("visitorName", visitorName);

      const feedback = document.getElementById("form-feedback");
      feedback.textContent = `Thank you, ${visitorName}! Your inquiry has been saved.`;
      contactForm.reset();
    });
  }
});