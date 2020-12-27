
//Menu hamburger 

const burger = document.querySelector("#open"); // get our hamburger
burger.addEventListener("click", () => { // listen to the press
  let nav = document.querySelector(".nav").classList.toggle("hidden");  // get hidden menu and open it or close if opened
});


// Menu background color change


document.addEventListener('scroll', function(e) {     // use the scroll event in an addEventListener method
    window.pageYOffset !== 0 ? window.requestAnimationFrame(function() { //  it returns the number of pixels the document is currently scrolled along the vertical axis
      document.getElementById("top").style.background = "rgb(255 255 255 / 71%)" // Menu background color change if pixels changed
    }) : window.requestAnimationFrame(function() {
      document.getElementById("top").style.background = "rgb(255 255 255 / 0%)"
    });
});


// The window.requestAnimationFrame() method tells the browser that you wish 
// to perform an animation and requests that the browser calls a specified function 
// to update an animation before the next repaint. The method takes a callback as an argument
// to be invoked before the repaint.