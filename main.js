'use strict'

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

taskSubmit.addEventListener('click', function(e) {  // addTask() とするとボタンを押していないのに押した時の動きになってる
    e.preventDefault()
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

        li.setAttribute('draggable', true)

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
}



// ドラッグ&ドロップ

//1.要素の取得
const lis = document.querySelectorAll(".list-item")
console.log(lis);
const uls = document.querySelectorAll("#task-list")
console.log(uls);

const ul2 = document.querySelector("#task-list")

uls.forEach((ul2) => {
    new Sortable(ul2, {
        group: "shared",
        animation: 150,
        ghostclass: 'blue-background-class'
    })
})


// 2.ドラッグのトリガー
// lis.addEventListener("dragstart", dragStart)
// lis.addEventListener("dragend", dragEnd)

// 4.task-list要素を取得
// for(const lis of uls) {
//     lis.addEventListener("dragover", dragOver);
//     lis.addEventListener("dragenter", dragEnter);
//     lis.addEventListener("dragleave", dragLeave);
//     lis.addEventListener("drop", dragDrop);
// }


lis.forEach(li => {
    li.addEventListener("dragstart", dragStart)
    li.addEventListener("dragend", dragEnd)
})

uls.forEach(ul => {
    ul.addEventListener("dragover", dragOver);
    ul.addEventListener("dragenter", dragEnter);
    ul.addEventListener("dragleave", dragLeave);
    ul.addEventListener("drop", dragDrop);
})


let dragItem = null

// 3.ドラッグ関数
function dragStart() {
    console.log("start");
    this.className += " hold";

    dragItem = this
    
    setTimeout(() => {
        this.className = " invisible"
    }, 0);
}

function dragEnd() {
    console.log("end");
    this.className = "list-item";
    dragItem = null
}

function dragOver(e) {
    e.preventDefault()
    console.log("over");
}

function dragEnter() {
    console.log("enter");
    this.className += " hovered"
}

function dragLeave() {
    console.log("leave");
    this.className = "task-list"
}

function dragDrop() {
    console.log("drop");
    this.className = "task-list"
    this.append(dragItem)

    saveList()
}

function saveList() {
    
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
