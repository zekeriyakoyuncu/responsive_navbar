let navbarLogoBTN = document.getElementById("navbar_logo");
let navbarListDOM = document.querySelector(".navbar_list");

navbarLogoBTN.addEventListener("click", function () {
  if (navbarListDOM.classList.contains("responsive")) {
    navbarListDOM.classList.remove("responsive");
  } else {
    navbarListDOM.classList.add("responsive");
  }
});
