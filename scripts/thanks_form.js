
document.addEventListener("DOMContentLoaded", () => {
  const countSpan = document.getElementById("review-count");
  if (countSpan) {
    let reviewCount = localStorage.getItem("reviewCount") || "0";
    reviewCount = parseInt(reviewCount, 10);
    countSpan.textContent = reviewCount;
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
