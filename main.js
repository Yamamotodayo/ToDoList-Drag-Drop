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
    let taskListItem = document.createElement('li') // li要素生成
        taskListItem.classList.add("task-list-item") // li要素にクラス名付与
        // taskListItem.id = "item-1"

    let value = taskValue.value // テキストボックスの値を取得

    taskList.appendChild(taskListItem) // ul要素の子要素にliを追加
    taskListItem.appendChild(document.createTextNode(value)) // テキストボックスの値をテキストノードに変換してliの子要素に追加

    taskValue.value = "" // テキストボックスの値を元に戻す
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
