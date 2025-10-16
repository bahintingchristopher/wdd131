document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".navbar");
  const closeBtn = document.querySelector(".close-btn");

if (closeBtn && navbar) {
  closeBtn.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
}

 const faqItems = document.querySelectorAll('.faq-item h2');
faqItems.forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.parentElement;  
    parent.classList.toggle('active');
  });
});


  if (hamburger && navbar) {
    hamburger.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  }
  
const contact = document.getElementById("contact-link");
const toggleButton = document.getElementById("toggle-style"); // this is the button that triggers

if (contact && toggleButton) {
  toggleButton.addEventListener("click", () => {
    contact.classList.toggle("contact-link");
  });
}



  document.addEventListener("click", (event) => {
  const isClickInsideHamburger = hamburger && hamburger.contains(event.target);
  const isClickInsideNavbar = navbar && navbar.contains(event.target);

  if (!isClickInsideHamburger && !isClickInsideNavbar) {
    navbar.classList.remove("active");
  }
});

  const links = document.querySelectorAll(".navbar a");
  const currentPage = location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  const proj1 = document.getElementById('proj1');
if (proj1) {
  proj1.setAttribute('loading', 'lazy');
  proj1.setAttribute('src', 'images/rafting1.jpg')

  proj1.addEventListener('click', () => {
    window.open('https://bahintingchristopher.github.io/wdd130/', '_blank');
  });
}

const proj2 = document.getElementById('proj2');
if (proj2) {
   proj2.setAttribute('loading', 'lazy');
  proj2.setAttribute('src', 'images/rcet1.jpg')
  
  proj2.addEventListener('click', function () {
    window.open('https://rcetglobal.github.io/RCET/index.html', '_blank');
  });
  }

  const proj3 = document.getElementById('proj3');
  if (proj3) {
      proj3.setAttribute('loading', 'lazy');
      proj3.setAttribute('src', 'images/product_review.jpg')
  
    proj3.addEventListener('click', function () {
    window.open('https://bahintingchristopher.github.io/wdd131/form.html', '_blank');
  });
}

const proj4 = document.getElementById ('proj4');
if (proj4) {
    proj4.setAttribute('loading', 'lazy');
    proj4.setAttribute('src', 'images/temples.jpg')
  
    proj4.addEventListener('click', function () {
    window.open('https://bahintingchristopher.github.io/wdd131/filtered-temples.html', '_blank');
  });
}

const proj5 = document.getElementById ('proj5');
if (proj5) {
    proj5.setAttribute('loading', 'lazy');
    proj5.setAttribute('src', 'images/places.jpg')
  
    proj5.addEventListener('click', function () {
    window.open('https://bahintingchristopher.github.io/wdd131/place.html', '_blank');
  });
}

const proj6 = document.getElementById('proj6');
if (proj6) {
    proj6.setAttribute('loading', 'lazy');
    proj6.setAttribute('src', 'images/aboutMe.jpg')
  
    proj6.addEventListener('click', function () {
    window.open('https://bahintingchristopher.github.io/wdd131/index', '_blank');
  });
}

// document.getElementById('proj6').addEventListener('click', function () { window.open('https://bahintingchristopher.github.io/wdd131/index', '_blank'); });

  const reasons = [
    { value: "consultation", text: "Consultation" },
    { value: "support", text: "Technical Support" },
    { value: "pricing", text: "Request Quotation" },
    { value: "partnership", text: "Product Demo" },
    { value: "feedback", text: "Project Inquiry" },
    { value: "other", text: "Feedback" }
  ];

  const select = document.getElementById("reason");

  if (select){
  reasons.forEach(optionData => {
    const option = document.createElement("option");
    option.value = optionData.value;
    option.textContent = optionData.text;

    if (optionData.disabled) option.disabled = true;
    if (optionData.selected) option.selected = true;

    select.appendChild(option);
  });
}
  const count = localStorage.getItem("messageCount") || 0;
  const display = document.getElementById("messages");
  if (display) {
    display.textContent = `Number of message recieved: ${count}`;
  }

});

  function incrementMessageCount() {
  let count = localStorage.getItem("messageCount") || 0;
  count = parseInt(count) + 1;
  localStorage.setItem("messageCount", count);
}



