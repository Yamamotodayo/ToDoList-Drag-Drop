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

    let deleteBtn = document.createElement('button') // button要素生成
        deleteBtn.classList.add("task-list-deleteBtn") // button要素にクラス名付与
        deleteBtn.append("削除")
        // taskListItem.id = "item-1"

    let value = taskValue.value // テキストボックスの値を取得

    taskList.appendChild(taskListItem) // ul要素の子要素にliを追加

    taskListItem.appendChild(document.createTextNode(value)) // テキストボックスの値をテキストノードに変換してliの子要素に追加
    taskListItem.appendChild(deleteBtn) // li要素の子要素にbuttonを追加

    taskValue.value = "" // テキストボックスの値を元に戻す


    deleteBtn.addEventListener('click', () => {
        let deleteTask = deleteBtn.parentNode // deleteBtnの親要素liを取得
            deleteTask.remove() // 取得したliを削除
    })

    
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
