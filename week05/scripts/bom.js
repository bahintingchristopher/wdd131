document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('#list');

    // Load saved chapters or start with empty array
    let chaptersArray = getChapterList() || [];

    // Display any chapters already saved
    chaptersArray.forEach(chapter => {
        displayList(chapter);
    });

    // When button is clicked
    button.addEventListener('click', () => {
        const chapter = input.value.trim();
        if (chapter !== '') {
            displayList(chapter);               // Show on page
            chaptersArray.push(chapter);        // Add to array
            setChapterList();                   // Save to localStorage
            input.value = '';
            input.focus();
        }
    });

    // Allow Enter key to trigger Add
    input.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            button.click();
        }
    });

    // =========================
    // Functions used
    // =========================

    function displayList(item) {
        const li = document.createElement('li');
        li.textContent = item;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');
        deleteButton.style.cursor = "pointer";

        li.appendChild(deleteButton);
        list.appendChild(li);

        // Delete logic
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            deleteChapter(item);  // Pass item (without ❌)
            input.focus();
        });
    }

    function setChapterList() {
        localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
    }

    function getChapterList() {
        return JSON.parse(localStorage.getItem('myFavBOMList'));
    }

    function deleteChapter(chapter) {
        chaptersArray = chaptersArray.filter(item => item !== chapter);
        setChapterList(); // Update localStorage
    }
});
