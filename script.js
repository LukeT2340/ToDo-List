const tasks = [];
const newTask = document.querySelector("#taskInput");
const addTaskButton = document.querySelector("#addTaskButton");

addTaskButton.addEventListener("click", function(event) {
    event.preventDefault();
    if (newTask.value.trim() !== "") { 
        addTask();
    } else {
        alert("Please enter a task."); 
    }
});

function addTask() {
    tasks.push(newTask.value);
    newTask.value = "";
    displayTasks();
}

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {
        const li = document.createElement("li");

        const taskSpan = document.createElement("span");
        taskSpan.textContent = task;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("editButton");

        editButton.addEventListener("click", function() {
            editTask(index);
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("deleteButton"); 

        deleteButton.addEventListener("click", function() {
            deleteTask(index);
        });

        li.appendChild(taskSpan);
        li.appendChild(deleteButton);
        li.appendChild(editButton);

        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function editTask(index) {
    const taskText = tasks[index]; 
    const li = taskList.childNodes[index]; 

    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.value = taskText;
    inputField.className = "editInputField";

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.className = "saveButton";
    saveButton.addEventListener("click", function() {
        tasks[index] = inputField.value; 
        displayTasks(); 
    });

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.className = "cancelButton";
    cancelButton.addEventListener("click", function() {
        displayTasks(); 
    });

    li.innerHTML = "";

    li.appendChild(inputField);
    li.appendChild(saveButton);
    li.appendChild(cancelButton);
}
