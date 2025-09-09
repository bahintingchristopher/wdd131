document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('#list');

    button.addEventListener('click', function() {
        if (input.value.trim() !== '') {
            const chapter = input.value.trim();

            const li = document.createElement('li');
            li.textContent = chapter;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = 'X';
            deleteButton.style.cursor = "pointer";

            li.appendChild(deleteButton);
            list.appendChild(li);

            input.value = '';
            input.focus();

            deleteButton.addEventListener('click', () => {
                list.removeChild(li);
                input.focus();
            });
        }
    });
});
