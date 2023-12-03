function fancyfunction() {
    // Your code for the action to perform when mouseover happens
    console.log("Mouse over the image!");
    alert("Volunteering is a very nice thing to do! Go press the button!")
  }
  
  document.getElementById("image").addEventListener("mouseover", fancyfunction);
  


function visibleFunction() {
    console.log("This worked")

    document.getElementById("applicationText").style.visibility = "visible";
}



