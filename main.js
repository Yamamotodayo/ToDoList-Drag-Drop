'use strict'

// const taskValue = document.getElementsByClassName('task-value')[0]
// const taskSubmit = document.getElementsByClassName('task-submit')[0]
// const taskList = document.getElementsByClassName('task-list')[0]

const taskValue = document.getElementById("task-value")
const taskSubmit = document.getElementById("task-submit")
const taskList = document.getElementById("task-list")


const todos = JSON.parse(localStorage.getItem("todos"))
if(todos) {
    todos.forEach((todo) => {
        addTask(todo)
    })
}

taskSubmit.addEventListener('click', addTask) // addTask() とするとボタンを押していないのに押した時の動きになってる

function addTask(todo) {

    

    


    let taskListItem = document.createElement('li') // li要素生成
        taskListItem.classList.add("task-list-item") // li要素にクラス名付与

        taskListItem.setAttribute('draggable', true)


    let p = document.createElement('p')

    let deleteBtn = document.createElement('button') // button要素生成
        deleteBtn.classList.add("task-list-deleteBtn") // button要素にクラス名付与
        deleteBtn.append("削除")
        // taskListItem.id = "item-1"

        let value = taskValue.value // テキストボックスの値を取得
        console.log(value);

        if(todo) {
            value = todo.text
            console.log(value);
        }

    taskList.appendChild(taskListItem) // ul要素の子要素にliを追加
    p.appendChild(document.createTextNode(value))

    taskListItem.appendChild(p) // テキストボックスの値をテキストノードに変換してliの子要素に追加
    taskListItem.appendChild(deleteBtn) // li要素の子要素にbuttonを追加

    taskValue.value = "" // テキストボックスの値を元に戻す

    // デリートボタン
    deleteBtn.addEventListener('click', () => {
        let deleteTask = deleteBtn.parentNode // deleteBtnの親要素liを取得
            deleteTask.remove() // 取得したliを削除
            saveDate()
    })

    saveDate()

    // // ローカルストレージ にセーブ
    function saveDate() {
        const lists = document.querySelectorAll("li")
        const todos = []

            lists.forEach((li,value) => {
                todos.push({Text:value.innerHTML}) // 修正する
                console.log(todos);
            })

        localStorage.setItem("todos", JSON.stringify(todos))
    }


    // ドラッグ&ドロップ
    // document.querySelectorAll(".task-list li").forEach (elm => {
    //     elm.ondragstart = function() {
    //         event.dataTransfer.setDate('text/plain', event.target.class)
    //     }
    //     elm.ondragover = function() {
    //         event.preventDefault()
    //         this.style.borderTop = '2px solid blue'
    //     }
    //     elm.ondragleave = function() {
    //         this.style.borderTop = ''
    //     }
    //     elm.ondrop = function() {
    //         event.preventDefault()
    //         let id =event.dataTransfer.getData('text/plain')
    //         let elm_drag = document.getElementById(id)
    //         this.parentNode.insertBefore(elm_drag, this)
    //         this.style.borderTop = ''
    //     }
    // })
    

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
