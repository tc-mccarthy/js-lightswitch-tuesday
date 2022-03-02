// Get the body
const body = document.querySelector("body");

//get the full list of lightswitches (in this case, 2)
const lightswitches = document.querySelectorAll(".light-switch");

// for each of the switches on the list, call a function, and refer to the current switch as `lightswitch`
lightswitches.forEach(function (lightswitch) {
  // for this lightswitch, add an event listener, that fires a function whenever we click on the switch
  lightswitch.addEventListener("click", function (e) {
    // e stores the click event, which allows us to stop any unwanted default behaviors (like if this were a button)
    e.preventDefault(); // we prevent those behaviors
    body.classList.toggle("light-off"); // we toggle .light-off on/off the body element
  });
});
