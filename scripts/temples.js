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