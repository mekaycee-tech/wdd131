// Temple Array containing the 7 original temples + 3 new temples added
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // --- 3 Added Temples ---
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-detail-249022-2400x1200.jpg"
  },
  {
    templeName: "Bern Switzerland",
    location: "Münchenbuchsee, Switzerland",
    dedicated: "1955, September, 11",
    area: 35546,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-653063-wallpaper.jpg"
  }
];

// Select HTML elements
const container = document.querySelector("#templeContainer");
const filterHeading = document.querySelector("#filterHeading");
const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector("#navMenu");

// Function to display temple cards on the page
function displayTemples(templeArray) {
  // Clear out whatever is currently inside the container
  container.innerHTML = "";

  // Loop through each temple object in the list
  templeArray.forEach(temple => {
    // Create card element
    let card = document.createElement("section");
    card.classList.add("temple-card");

    // Temple Name
    let name = document.createElement("h3");
    name.textContent = temple.templeName;

    // Location
    let location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    // Dedication
    let dedicated = document.createElement("p");
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

    // Size / Area
    let area = document.createElement("p");
    area.innerHTML = `<strong>Size:</strong> ${temple.area.toLocaleString()} sq ft`;

    // Image element with lazy loading
    let img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", temple.templeName + " Temple");
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "400");
    img.setAttribute("height", "250");

    // Add elements into the card
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    // Add card into the container on the page
    container.appendChild(card);
  });
}

// Select all navigation links
const navLinks = document.querySelectorAll("nav a");

// Add click event listener to each link for filtering
navLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();

    // Remove active class from all links, then add it to the clicked link
    navLinks.forEach(l => l.classList.remove("active"));
    this.classList.add("active");

    // Update heading text to show current category
    filterHeading.textContent = this.textContent;

    const linkId = this.id;

    if (linkId === "old") {
      // Filter built before 1900
      let oldTemples = temples.filter(t => {
        let year = parseInt(t.dedicated.split(",")[0]);
        return year < 1900;
      });
      displayTemples(oldTemples);
    } 
    else if (linkId === "new") {
      // Filter built after 2000
      let newTemples = temples.filter(t => {
        let year = parseInt(t.dedicated.split(",")[0]);
        return year > 2000;
      });
      displayTemples(newTemples);
    } 
    else if (linkId === "large") {
      // Filter area greater than 90,000 sq ft
      let largeTemples = temples.filter(t => t.area > 90000);
      displayTemples(largeTemples);
    } 
    else if (linkId === "small") {
      // Filter area smaller than 10,000 sq ft
      let smallTemples = temples.filter(t => t.area < 10000);
      displayTemples(smallTemples);
    } 
    else {
      // Show all temples for Home
      displayTemples(temples);
    }
  });
});

// Mobile menu toggle
menuButton.addEventListener("click", function() {
  navMenu.classList.toggle("open");
  
  if (navMenu.classList.contains("open")) {
    menuButton.innerHTML = "&times;";
  } else {
    menuButton.innerHTML = "&#9776;";
  }
});

// Footer year and last modified date
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#modifiedDate").textContent = document.lastModified;

// Show all temples when page first loads
displayTemples(temples);