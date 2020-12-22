
//Menu hamburger 

const burger = document.querySelector("#open"); // get our hamburger
burger.addEventListener("click", () => { // listen to the press
  let nav = document.querySelector(".nav").classList.toggle("hidden");  // get hidden menu and open it or close if opened
});
