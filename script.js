
const scrollToTopButton = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
  scrollToTopButton.style.display = window.scrollY > 100 ? "block" : "none";
});
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
