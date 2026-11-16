
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const task = document.createElement("li");
    task.textContent = taskText;

    task.addEventListener("click", function() {
        task.classList.toggle("completed");
    });

    task.addEventListener("dblclick", function() {
        task.remove();
    });

    taskList.appendChild(task);
    taskInput.value = "";
});