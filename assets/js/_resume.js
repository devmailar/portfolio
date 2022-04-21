let openResumeBtn = document.getElementById("resume");
openResumeBtn.addEventListener("click", openResume);

function openResume() {
  let resumeContainer = document.getElementById("resume-container");
  let main = document.querySelector("main");
  let about = document.querySelector("section");

  resumeContainer.style.display = "block";
  main.style.display = "none";
  about.style.display = "none";
}