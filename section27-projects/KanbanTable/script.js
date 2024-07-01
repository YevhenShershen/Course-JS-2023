document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task');
    const newTaskInput = document.getElementById('new-task');
    const columns = document.querySelectorAll('.task-list');

    // Obsługa kliknięcia przycisku dodawania zadania
    addButton.addEventListener('click', addTask);

    // Obsługa naciśnięcia klawisza Enter w polu tekstowym
    newTaskInput.addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Inicjalizacja przeciągania dla kolumn
    columns.forEach(column => {
        column.addEventListener('dragover', e => {
            e.preventDefault(); 
            e.dataTransfer.dropEffect = 'move';
        });
        column.addEventListener('drop', dropTask); 
    });

    // Funkcja dodająca nowe zadanie
    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            const task = createTaskElement(taskText);
            document.getElementById('todo').appendChild(task);
            newTaskInput.value = ''; 
        }
    }

    // Tworzy element zadania
    function createTaskElement(text) {
        const task = document.createElement('div');
        task.classList.add('task');
        task.textContent = text;
        task.draggable = true; 
        task.addEventListener('dragstart', dragStart);
        task.addEventListener('dragend', dragEnd);
        return task;
    }

    // Rozpoczęcie przeciągania
    function dragStart(e) {
        e.dataTransfer.setData('text/plain', 'dragged-task');
        this.classList.add('dragging');
    }

    // Zakończenie przeciągania
    function dragEnd() {
        this.classList.remove('dragging');
    }

    // Upuszczenie zadania w nowej kolumnie
    function dropTask(e) {
        e.preventDefault();
        const draggingTask = document.querySelector('.dragging');
        if (e.target.classList.contains('task-list')) {
            e.target.appendChild(draggingTask);
        } else if (e.target.classList.contains('task')) {
            e.target.parentNode.insertBefore(draggingTask, e.target.nextSibling);
        }
    }
});
