//  Calculate wind chill using correct formula
const calculateWindChill = (temp, speed, unit) =>
  unit === "imperial"
    ? 35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16
    : 13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16;

// Return wind chill string if applicable, or "N/A"
function getWindChillDisplay(temp, speed, unit) {
  const isValid =
    (unit === "imperial" && temp <= 50 && speed > 3) ||
    (unit === "metric" && temp <= 10 && speed > 4.8);

  return isValid
    ? calculateWindChill(temp, speed, unit).toFixed(1) + (unit === "imperial" ? " °F" : " °C")
    : "N/A";
}
  const tempText = document.querySelector(".weather-section .info-data:nth-child(2) .value").textContent;
  const windText = document.querySelector(".weather-section .info-data:nth-child(4) .value").textContent;

  // Parse numbers from strings
  const temp = parseFloat(tempText); // 10 °C -> 10
  const windSpeed = parseFloat(windText); // 5 km/h -> 5
  const unit = "metric"; // you can switch to "imperial" if needed

  // Calculate and update wind chill
  const windChillValue = getWindChillDisplay(temp, windSpeed, unit);
  const windChillSpan = document.querySelector(".weather-section .info-data:nth-child(5) .value");
  if (windChillSpan) {
    windChillSpan.textContent = windChillValue;
  }



    document.addEventListener('DOMContentLoaded', () => {
      const currentYearSpan = document.getElementById("currentYear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Set the last modified date in the footer
  // const lastModifiedP = document.getElementById("lastModified");
  // if (lastModifiedP) {
  //   lastModifiedP.textContent = `Last Modification: ${document.lastModified}`;
  // }

  const lastModifiedP = document.getElementById("lastModified");
if (lastModifiedP) {
  const lastModifiedDate = new Date(document.lastModified);
  const formattedDate = lastModifiedDate.toLocaleString('en-US', {
    dateStyle: 'long',
    timeStyle: 'short'
  });
  lastModifiedP.textContent = `Last Modified: ${formattedDate}`;
}

});

