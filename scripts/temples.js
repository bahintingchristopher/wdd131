const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => { //arrow function
menuButton.classList.toggle("open");  //targetting the #menu.open::before 
nav.classList.toggle("open");   //targetting the #menu.open::before    
});

// in getting the current year
const currentYear = new Date().getFullYear();

//in setting modification date of the document
const modification =document.lastModified //the lastModified was (<p id="lastModified"></p>) in footer of HTML

//Now the program for the footer content to appear
document.addEventListener("DOMContentLoaded", () => { //do this '=>'

//first <p> in the footer,it is the copy right and name and location
const copyrightP = document.querySelector("footer p:first-of-type");
if (copyrightP) {
copyrightP.innerHTML = `&copy; ${currentYear} | Christopher T. Bahinting | Philippines`; 
}

//second <p> in the footer 
const lastModifiedP = document.getElementById("lastModified");
if (lastModifiedP) {
lastModifiedP.textContent = `Last Modification: ${modification}`; 
}

});
/*THIS IS JUST MY ADDITIONAL SETTINGS FOR THE TEMPLE IMAGES TO BE FULLSCREEN WHEN CLICKED*/
/* This is one of my best learning this week that this js code, once applied 
the PRE-SETTING in css will be activated.*/ 
/* there are 2 setting in the css that can help the interaction of the user, 
first is the original setting (like: .temple_gallery {
grid-template-columns: repeat(3, 1fr);
}
}), and the second the the setting (like:.fullscreen-image) that will be activated when the
js code is applied.*/
const images = document.querySelectorAll("#images img");

images.forEach((img) => {

img.style.cursor = "pointer";

img.addEventListener("click", () => {
  
    if (img.classList.contains("fullscreen-image")) {
   
      // Remove fullscreen
      img.classList.remove("fullscreen-image");
      removeOverlay();
     
    }else{
          // Add fullscreen and overlay
          img.classList.add("fullscreen-image");
          addOverlay();
    }
  });
});

function addOverlay() {
  const overlay = document.createElement("div");
  overlay.id = "fullscreen-overlay";    
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.zIndex = "9999";
    document.body.appendChild(overlay);

  // Clicking overlay closes fullscreen images
  overlay.addEventListener("click", () => {
    document.querySelectorAll(".fullscreen-image").forEach(img => img.classList.remove("fullscreen-image"));
    removeOverlay();
  });   
 }
function removeOverlay() {
  const overlay = document.getElementById("fullscreen-overlay");        
 if (overlay) {
    overlay.remove();
  }
}
