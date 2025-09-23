const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => { //arrow function
menuButton.classList.toggle("open");  //targetting the #menu.open::before 
nav.classList.toggle("open");   //targetting the #menu.open::before    
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005 August 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888 May 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015 June 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020 May 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Benin City Nigeria Temple",
    location: "Benin City Nigeria",
    dedicated: "1974 November 19",
    area: 30700,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986 January 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983 December 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
      templeName: "Manila Philippines",
      location: "Manila, Philippines",
      dedicated: "1984 September 25",
      area: 26683,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
      
    },

    {
    templeName: "Cebu City Philippines",
    location: "Cebu City, Philippines",
    dedicated: "2010 June 13",
    area: 29556,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/133-Cebu-City-Philippines-Temple.jpg"
    
  },

 ]
 
  //function to create a single temple card
function createTempleCard(temple){
    // temples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} square feet`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        return card;

}

       //function to display templs on the page
    function displayTemples(filterdTemples) {
        const gallery = document.querySelector(".temple_gallery");
        gallery.innerHTML = ''; //to clear the previous content

        filterdTemples.forEach(temple => {
            gallery.appendChild(createTempleCard(temple));
        });
    } 



document.addEventListener("DOMContentLoaded", ()=>{
    displayTemples(temples); // this display the temples


    //for the navigation links 
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click",(event) => {
            event.preventDefault();
            const filter = event.target.id;

            let filteredList;
            switch (filter) {
                case "old": 
                filteredList = temples.filter(temple => parseInt(temple.dedicated.split(' ')[0]) < 1900);

                break;
                case "new":
                filteredList = temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) > 2000);

                break;
                case "large":
                filteredList = temples.filter(temple => temple.area >90000);
                
                break;
                case "small":
                filteredList = temples.filter(temple => temple.area <10000);
                
                break;
                case "home":
                default:filteredList = temples;
                break;
              }
              displayTemples(filteredList);
        });
 
    });

            const currentYearSpan = document.getElementById("currentYear");
              if (currentYearSpan) {
                currentYearSpan.textContent = new Date().getFullYear();
              }

              // Set the last modified date in the footer
              const lastModifiedP = document.getElementById("lastModified");
              if (lastModifiedP) {
                lastModifiedP.textContent = `Last Modification: ${document.lastModified}`;
              }


});

  
