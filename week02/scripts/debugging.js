//get elements from documents
const radiusOutput = document.getElementById('radius');
const areaOutput = document.querySelector('#area');

let area = 0; 
const PI = 3.14159;//remove the =

let radius = 10;
area = PI * radius * radius;
radiusOutput.textContent = radius; //added the  .textContent
areaOutput.textContent = area; //added the .textContent

radius = 20;
area = PI * radius * radius;
radiusOutput.innerHTML  = radius;
areaOutput.innerHTML = area;