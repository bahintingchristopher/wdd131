
//Wait until HTML is fully loaded
document.addEventListener("DOMContentLoaded", function() {//DOCUMENT OBJECT MODEL
    const input = document.querySelector('#favchap');//queryselector is to select one html element from the page
    const button = document.querySelector('button'); //the document here is meaning the webpage document
    const list = document.querySelector('#list');

    button.addEventListener('click', function() {//addevenlistener is to listen for events like keypress, mouseclick, hover and etc.
        if (input.value.trim() !== '') {
            const favchap = input.value.trim();//trim is to remove any extra space in the beginning or end

            const li = document.createElement('li');
            li.textContent = favchap;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = 'X';
            deleteButton.style.cursor = "pointer";

            li.appendChild(deleteButton); //append is to add, meaning to add with deletebutton
            list.appendChild(li);//where to add? in the li or list index

            input.value = '';
            input.focus();

            //the input will be accepted just  by pressing the enter key
            deleteButton.addEventListener('click', () => { //the '()' is to call the function. 
                list.removeChild(li); //remove li
                input.focus();
            });
        }

    });

            //adding chapter just by pressing the Enter button
            input.addEventListener('keypress', function(event) {//the even is like keypress, mouse move, hover, click
                if(event.key == 'Enter') {
                    button.click();
                }            
    });
});

//Purpose	        Method	                                 Example
//Select elements	querySelector() / getElementById()	     document.querySelector('#box')
//Create elements	createElement()	                         document.createElement('li')
//Add elements	    appendChild() / append()	             list.appendChild(li)
//Remove elements	removeChild() / .remove()	             list.removeChild(li)
//Listen to events	addEventListener()	                     button.addEventListener('click', …)

//ID is for specific targeting. EXAMPLE <h1 id="page-title">Welcome</h1>
//CLASS is for use in grouping of elements

//The Basic Flow of Writing JavaScript (for Web Pages)
//          Step	                            Description	                                                    Why it matters
// 1. Create your HTML	                        Build the structure: buttons, inputs, lists, etc.	            JavaScript needs something to interact with.
// 2. Think about what you want to happen	    Define your goal: Add item? Delete item? Change color?	        Gives your code purpose.
// 3. Use JavaScript to select the elements	    Use document.querySelector() to get elements from the page.	    So you can change or control them.
// 4. Add event listeners	                    Use addEventListener() to wait for user actions.	            This makes your page interactive.
// 5. Write your logic inside those listeners	Add functionality: create, update, remove, etc.	                This is where your program "does something".

//.textContent only works for elements that can have text inside — like:
//Works With:
// <h1>, <p>, <div>, <span>, <button></button>


//          Element type	                                 // To get or SET TEXT/VALUE
//Regular elements like <h1>, <p>, <div>, <span>, <button>	    Use .textContent to get or change the text inside
//Form inputs like <input>, <textarea>, <select>	            Use .value to get or set the user’s input


//EXAMPLE
//     <h1 id="title">Hello</h1>
//     <input id="nameInput" value="John">

//const title = document.querySelector('#title');
//const input = document.querySelector('#nameInput');
//console.log(title.textContent); // "Hello"
//console.log(input.value);        // "John"
//title.textContent = "Hi there!";
//input.value = "Jane";

//So, when the user clicks the button:
//The code inside the { ... } runs immediately.
//EXAMPLE
//button — the element you're targeting (like your "Add" button)
//.addEventListener('click', ...) — listen for the user to click that button
//() => { ... } — the arrow function (the code to run when the click happens)
