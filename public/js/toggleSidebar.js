
// Toggle sidebar 
document.addEventListener("DOMContentLoaded", () => {
  const iconToggle = document.querySelector(".toggle");
  const sidebar = document.querySelector(".sidebar");
  const main = document.querySelector(".container_");

  iconToggle.addEventListener("click", () => {
    sidebar.classList.toggle("d-none");
    sidebar.classList.toggle("col-4");
  });
});
