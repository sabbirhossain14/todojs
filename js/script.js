let input = document.querySelector(".input")
let btn = document.querySelector(".btn")
let erorr = document.querySelector(".erorr")
let main = document.querySelector(".main")
let ol = document.querySelector("ol")
let olErr = document.querySelector("olErr")


todoArr = []

let arrindex;

btn.addEventListener("click", function () {
    if (input.value == "") {
        erorr.innerHTML = " Write your text "
    } else {
        if (btn.innerHTML == "Add") {
            erorr.innerHTML = ""
            todoArr.push(input.value);
            input.value = ""
            todo()
        } else {
            todoArr[arrindex] = input.value
            todo()
            btn.innerHTML = "Add"
            input.value = ""
            
        }
    }
})

function todo() {
    ol.innerHTML = ""
    todoArr.map((item) => {

        ol.innerHTML += `<li>${item}<button class= "edit">Edit</button> <button class=" delete">Delete</button></li>`

        // delete oparetion

        let deletebtn = document.querySelectorAll(".delete")
        let deletebtnArr = Array.from(deletebtn)
        deletebtnArr.map((deleteitem, index) => {
            deleteitem.addEventListener("click", function () {
                todoArr.splice(index, 1)
                todo()
            
            })
        })
        // delete oparetion end

        // edit oparetion start
        let editbtn = document.querySelectorAll(".edit")
        let editbtnArr = Array.from(editbtn)
        editbtnArr.map((edititem, index) => {
            edititem.addEventListener("click", function () {
                btn.innerHTML = "update"
                input.value = todoArr[index]
                arrindex = index
            })
        })


    })
}