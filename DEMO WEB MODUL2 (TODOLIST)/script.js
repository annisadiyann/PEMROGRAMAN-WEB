let taskList = document.getElementById('task-list');
let tasks = [];

function addTask() {
  let newTask = document.getElementById('new-task').value;
  if (newTask) {
    tasks.push(newTask);
    document.getElementById('new-task').value = '';
    renderTasks();
  }
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    taskList.innerHTML += `
      <li>
        <span contenteditable="true" onblur="editTask(${index}, this.innerText)">${task}</span>
        <button onclick="deleteTask(${index})">Delete</button>
      </li>
    `;
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index, newValue) {
  tasks[index] = newValue;
  renderTasks();
}
