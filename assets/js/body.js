function Navbar() {
  let header = document.querySelector(".nav-link-item");
  let links = header.getElementsByClassName("link");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}

function Resume() {
  let navbar = document.querySelector("nav")  // Get the navbar
  let resumeContainer = document.getElementById("resume-container");
  resumeContainer.style.display = "block";
  navbar.style.display = "none";
}