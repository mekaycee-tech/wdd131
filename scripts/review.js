document.addEventListener("DOMContentLoaded", () => {
  let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;
  numReviews++;
  window.localStorage.setItem("numReviews-ls", numReviews);

  const counterElement = document.getElementById("review-count");
  if (counterElement) {
    counterElement.textContent = numReviews;
  }

  const currentYearSpan = document.getElementById("currentyear");
  const lastModifiedP = document.getElementById("lastModified");

  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
  if (lastModifiedP) {
    lastModifiedP.textContent = `Last Modification: ${document.lastModified}`;
  }
});