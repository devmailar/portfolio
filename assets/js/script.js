let header = document.querySelector(".nav_item");
let links = header.getElementsByClassName("link");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

const resumeButton = document.getElementById("resume")
const resumeContainer = document.getElementById("resume-container")

const main = document.querySelector("main")
const about = document.querySelector("section")


resumeButton.addEventListener("click", () => {
  resumeContainer.style.display = "block";
  main.style.display = "none";
  about.style.display = "none";
})