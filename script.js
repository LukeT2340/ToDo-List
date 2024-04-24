const tasks = [];
const newTask = document.querySelector("#taskInput");
const addTaskButton = document.querySelector("#addTaskButton");

addTaskButton.addEventListener("click", function(event) {
    event.preventDefault();

    addTask();
});

function addTask() {
    tasks.push(newTask.value);
    newTask.value = "";
    displayTasks();
}

function displayTasks() {
    taskList.innerHTML = "";
    
    tasks.forEach(function(task) {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    });
}