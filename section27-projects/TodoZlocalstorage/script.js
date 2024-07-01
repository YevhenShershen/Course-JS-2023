class TaskManager {
    constructor(storageKey) {
        this.storageKey = storageKey;
        this.tasks = JSON.parse(localStorage.getItem(this.storageKey)) || [];
    }

    addTask(taskName) {
        this.tasks.push({ name: taskName, completed: false });
        this.updateLocalStorage();
        this.renderTasks();
    }

    toggleTask(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.updateLocalStorage();
        this.renderTasks();
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
        this.updateLocalStorage();
        this.renderTasks();
    }

    updateLocalStorage() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
    }

    renderTasks() {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';
        this.tasks.forEach((task, index) => {
            const taskEl = document.createElement('div');
            taskEl.className = `task-item ${task.completed ? 'completed' : ''}`;
            taskEl.innerHTML = `
                <span>${task.name}</span>
                <div class="task-actions">
                    <button onclick="taskManager.toggleTask(${index})"><i class="fas fa-check"></i></button>
                    <button onclick="taskManager.removeTask(${index})"><i class="fas fa-trash-alt"></i></button>
                </div>
            `;
            taskList.appendChild(taskEl);
        });
    }
}

const taskManager = new TaskManager('tasks');
document.addEventListener('DOMContentLoaded', () => taskManager.renderTasks());

document.getElementById('add-task-btn').addEventListener('click', () => {
    const taskInput = document.getElementById('task-input');
    const taskName = taskInput.value.trim();
    if (taskName) {
        taskManager.addTask(taskName);
        taskInput.value = '';
    }
});

document.getElementById('task-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const taskName = e.target.value.trim();
        if (taskName) {
            taskManager.addTask(taskName);
            e.target.value = '';
        }
    }
});

