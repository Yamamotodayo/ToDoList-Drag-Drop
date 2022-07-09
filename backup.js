'use strict'

// const taskValue = document.getElementsByClassName('task-value')[0]
// const taskSubmit = document.getElementsByClassName('task-submit')[0]
// const taskList = document.getElementsByClassName('task-list')[0]

const taskValue = document.getElementById("task-value")
const taskSubmit = document.getElementById("task-submit")
const ul = document.getElementById("task-list")


const todos = JSON.parse(localStorage.getItem("todos"))
if(todos) {
    todos.forEach((todo) => {
        addTask(todo)
        console.log(todo);
    })
}

taskSubmit.addEventListener('click', function(event) {  // addTask() とするとボタンを押していないのに押した時の動きになってる
    event.preventDefault()
    addTask()
})



function addTask(todo) {

    let value = taskValue.value // テキストボックスの値を取得

    if(todo) {
        value = todo.Text
        console.log(value);
    }
    
    if(value) {

        const li = document.createElement('li') // li要素生成

        // li.innerText = value
        li.classList.add("list-item") // li要素にクラス名付与

        // li.setAttribute('draggable', true)

    let p = document.createElement('p')
        p.appendChild(document.createTextNode(value))

    let deleteBtn = document.createElement('button') // button要素生成
        deleteBtn.classList.add("list-item-deleteBtn") // button要素にクラス名付与
        deleteBtn.append("削除")

    // デリートボタン
    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault()
        let deleteTask = deleteBtn.parentNode // deleteBtnの親要素liを取得
            deleteTask.remove() // 取得したliを削除
            saveDate()
    })
        

    ul.appendChild(li) // ul要素の子要素にliを追加
    li.appendChild(deleteBtn) // li要素の子要素にbuttonを追加
    li.appendChild(p)
    
    taskValue.value = "" // テキストボックスの値を元に戻す
    saveDate()
    }

   
    // // ローカルストレージ にセーブ
    function saveDate() {
        const lists = document.querySelectorAll("p")
        const todos = []
        console.log(lists);

            lists.forEach((p) => {
                todos.push({Text:p.innerText}) // 修正する
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
