function navigationChanged() {
  let header = document.querySelector(".nav_item");
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
  let navMenu = document.querySelector(".nav_menu")
  let bgMenu = document.querySelector(".burger_menu")
  navMenu.classList.add("active-navmenu");
  bgMenu.classList.add("hide-bgmenu");
}


function hideBurgermenu() {
  let navMenu = document.querySelector(".nav_menu")
  navMenu.classList.remove("active-navmenu");
}