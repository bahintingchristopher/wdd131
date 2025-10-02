document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
    { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
    { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
    { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
    { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
  ];

  const select = document.getElementById('product-select');
  if (select) {
    

    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.name;
      option.textContent = product.name;
      select.appendChild(option);
    });
  }

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();  
      
      let reviewCount = localStorage.getItem("reviewCount") || "0";
      reviewCount = parseInt(reviewCount, 10);
      reviewCount++;
      localStorage.setItem("reviewCount", reviewCount);
      
      form.submit();  
    });
  }

  // Footer code (year, last modified)
  const currentYearSpan = document.getElementById("currentYear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
  const lastModifiedP = document.getElementById("lastModified");
  if (lastModifiedP) {
    lastModifiedP.textContent = `Last Modification: ${document.lastModified}`;
  }
});
