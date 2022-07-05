'use strict'

// const taskValue = document.getElementsByClassName('task-value')[0]
// const taskSubmit = document.getElementsByClassName('task-submit')[0]
// const taskList = document.getElementsByClassName('task-list')[0]

const taskValue = document.getElementById("task-value")
const taskSubmit = document.getElementById("task-submit")
const taskList = document.getElementById("task-list")

// let task = document.getElementById("task-Value").value


taskSubmit.addEventListener('click', addTask) // addTask() とするとボタンを押していないのに押した時の動きになってる

function addTask() {
    let taskListItem = document.createElement('li')
        taskListItem.classList.add("task-list-item")
        // taskListItem.id = "item-1"

    let value =  document.getElementById("task-value").value

    taskList.appendChild(taskListItem)
    taskListItem.appendChild(document.createTextNode(value))

    taskValue.value = ""
}



// /**
//  * 
//  * @param {*} hoge 
//  * @returns 
//  */
// function hoge (hoge) {
//     return hoge + "hoge"
// }

// hoge()
