const drowpdown = document.querySelector(".dropdown");

const projectsBtn = document.getElementById("projects");

projectsBtn.addEventListener("click", () => {
  drowpdown.classList.toggle("active");
});
