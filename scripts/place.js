// 1. Footer Updates: Current Year and Last Modified Date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// 2. Wind Chill Logic
// Read the static values from the HTML content
const temperature = parseFloat(document.getElementById("temp").textContent);
const windSpeed = parseFloat(document.getElementById("wind").textContent);

// Requirement: One-line calculation function using structural arguments
const calculateWindChill = (t, v) => 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16));

// Function to handle the validation conditions and update the UI
function displayWindChill() {
    const windChillElement = document.getElementById("windchill");

    // Check conditions: Metric rules (Temp <= 10 °C AND Wind Speed > 4.8 km/h)
    if (temperature <= 10 && windSpeed > 4.8) {
        // Calculate and round the result to 1 decimal place
        let chillFactor = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = chillFactor.toFixed(1) + " °C";
    } else {
        // Condition not met, fallback to N/A
        windChillElement.textContent = "N/A";
    }
}

// Call the function when the script runs on page load
displayWindChill();