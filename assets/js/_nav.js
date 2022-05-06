function navigationChanged() {
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

function showBurgermenu() {
  let navMenu = document.getElementById("myLinks");
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "block";
  }
}