// Initial state
var scrollPos = 0;
// adding scroll event
window.addEventListener('scroll', function(){
  // detects new state and compares it with the new one

    const y = document.querySelector(".navbar");
    if(window.scrollY>window.innerHeight){
      // y.style.backgroundColor="#30475e";
      y.style.backgroundColor="#318fb5";
      // y.style.backgroundColor="#fbd46d";
      y.classList.remove("navbar-light");
      y.classList.add("navbar-dark");
      y.classList.add("sticky");

    }if(window.scrollY==0){
      y.style.backgroundColor="transparent";
      y.classList.remove("navbar-dark");
      y.classList.add("navbar-light");
    }

	// saves the new position for iteration.


});
