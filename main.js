'use strict'

const task = document.getElementById("task-value");
const button = document.getElementById("task-submit");
const ul = document.getElementById("task-list");



const todos = JSON.parse(localStorage.getItem("todos"));
if(todos) {
    todos.forEach((todo) => {
        add(todo);
    });
}

button.addEventListener('click', add);

function add(todo) {

    let taskValue = task.value;

    if(todo) {
        taskValue = todo.text;
    }

    if(taskValue) {
        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');

        li.innerText = taskValue;
        li.classList.add("list-item");

        deleteBtn.classList.add("list-item-deleteBtn");
        deleteBtn.append("削除");

        deleteBtn.addEventListener('click', () => {
            let deleteTask = deleteBtn.parentNode
            deleteTask.remove()
            saveData()
        });

        ul.appendChild(li);
        li.appendChild(deleteBtn);
        taskValue.value = "";
        
        saveData()
    }
}

function saveData() {
    const lists = document.querySelectorAll("li");
    const todos = [];

    lists.forEach((li) => {

        todos.push({text:li.innerText});

    });
    localStorage.setItem("todos", JSON.stringify(todos));
}