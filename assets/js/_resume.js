let openResumeBtn = document.getElementById("resume");
openResumeBtn.addEventListener("click", openResume);

function openResume() {
  let navbar = document.querySelector("nav")  // Get the navbar
  let resumeContainer = document.getElementById("resume-container");
  resumeContainer.style.display = "block";
  navbar.style.display = "none";
}