document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("enter");
    const taskInput = document.getElementById("taskAdded");
    const taskList = document.getElementById("tasks");
    const sortButton = document.getElementById("sort");

    // Function to add a new task to the list
    function addTask(taskContent) {
        const li = document.createElement("li");
        li.textContent = taskContent;
        taskList.appendChild(li);
    }
    
    // Function to sort the tasks
    function sortTasks() {
        const tasks = Array.from(taskList.getElementsByTagName("li"));
        tasks.sort((a, b) => a.textContent.localeCompare(b.textContent));
        taskList.innerHTML = "";
        tasks.forEach(task => taskList.appendChild(task));
    }

    // Event listener for form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const taskContent = taskInput.value.trim();
        if (taskContent !== "") {
            addTask(taskContent);
            taskInput.value = "";
        }
    });

    // Event listener for sort button click
    sortButton.addEventListener("click", function(event) {
        event.preventDefault();
        sortTasks();
    });
});