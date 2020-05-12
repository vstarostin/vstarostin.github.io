// let inp = document.getElementById("newTask");   //создаю input
// inp.addEventListener("keydown", addTask);   //обработчик на input

// let addBtn = document.getElementById("addBtn"); //создаю кнопку
// addBtn.addEventListener("click", addTask);  //обработчик на кнопку

// function addTask(e) {   //функция создает li и добавляет задачу
//     if (e.key == "Enter" || e.target.tagName == "BUTTON") {
//         let newTask = inp.value;
//         if (newTask.length <= 0) {
//             return;
//         }

//         let li = document.createElement("li");
//         let input = document.createElement("input");
//         input.setAttribute("type", "text");
//         input.setAttribute("readonly", true);
//         input.value = newTask;
//         input.addEventListener("dblclick", (e) => { //по dblclick input становится доступным для редактирования
//             if (e.target.tagName == "INPUT") {
//                 changeInp(e.target);
//             }
//         });
        
//         let btnDone = document.createElement("button"); //кнопка Done
//         btnDone.classList.add("done-btn");
//         btnDone.classList.add("undone");
//         btnDone.innerHTML = "Done";
        
//         let btnDelete = document.createElement("button"); //кнопка Delete
//         btnDelete.classList.add("delete-btn");
//         btnDelete.innerHTML = "Delete";

//         let btnEdit = document.createElement("button"); //кнопка Edit
//         btnEdit.classList.add("edit-btn");
//         btnEdit.classList.add("unedit");
//         btnEdit.innerHTML = "Edit";
       
//         let todolist = document.getElementById("todolist");
//         li.append(input, btnDone, btnDelete, btnEdit);
//         todolist.append(li);                                //добавляем li в ul

//         document.querySelector("div").style.display = "block";  //когда есть li, есть и кнопки фильтрации

//         inp.value = null;   //обнуляем поле ввода после добавления 
//     }

    
// }



// let todolist = document.getElementById("todolist");
// todolist.addEventListener("click", (e) => {
//     if (e.target.classList.contains("delete-btn")) {
//         deleteTask(e);
//     } else if (e.target.classList.contains("done-btn")) {
//         doneTask(e);
//     } else if (e.target.classList.contains("edit-btn")) {
//         if (e.target.classList.contains("unedit")) {
//             changeInp(e.target.parentNode.firstChild);
//         } else if (e.target.classList.contains("edit")) {
//             blockChange(e.target.parentNode.firstChild);
//         }   
//     }
// });

// function deleteTask(e) {
//     e.target.parentNode.remove();
//     if (document.getElementById("todolist").children.length <= 0) {
//         document.querySelector("div").style.display = "none";
//     }

// }

// function doneTask(e) {
//     if (e.target.classList.contains("undone") & !e.target.previousSibling.classList.contains("completed")) {
//         e.target.classList.remove("undone");
//         e.target.classList.add("done");
//         e.target.innerHTML = "Undone";
//         e.target.previousSibling.classList.add("completed");
//     } else {
//         e.target.classList.remove("done");
//         e.target.classList.add("undone");
//         e.target.innerHTML = "Done";
//         e.target.previousSibling.classList.remove("completed");
//     }
// }

// let allBtn = document.querySelector(".allBtn");
// let activeBtn = document.querySelector(".activeBtn");
// let completedBtn = document.querySelector(".completedBtn");
// allBtn.addEventListener("click", filterTasks);
// activeBtn.addEventListener("click", filterTasks);
// completedBtn.addEventListener("click", filterTasks);




// function filterTasks() {
//     let btns = document.querySelectorAll("div button");
//     for (const btn of btns) {
//         if (btn.classList.contains("selected")) {
//             btn.classList.remove("selected")
//         } 
//     }
//     this.classList.add("selected");
//     let liElements = document.querySelectorAll("li");
    
//     if (this.classList.contains("allBtn")) {
//         filterAll(liElements);
//     } else if (this.classList.contains("completedBtn")) {
//         filterCompleted(liElements);
//     } else {
//         filterActive(liElements);
//     }
// }

// function filterCompleted(liElements) {
//     for (const li of liElements) {
//         if (!li.firstChild.classList.contains("completed")) {
//             li.style.display = "none";
//         } else {
//             li.style.display = "";
//         }
//     }
// }

// function filterAll(liElements) {
//     for (const li of liElements) {
//         li.style.display = "";
//     }
// }

// function filterActive(liElements) {
//     for (const li of liElements) {
//         if (li.firstChild.classList.contains("completed")) {
//             li.style.display = "none";
//         } else {
//             li.style.display = "";
//         }
         
//     }
// }


// function changeInp(e) {
//     e.readOnly = false;
//     e.focus();
//     e.classList.add("edited");
//     e.parentNode.lastChild.classList.remove("unedit");
//     e.parentNode.lastChild.classList.add("edit");
//     if (e.classList.contains("completed")) {
//         e.classList.add("edit-completed");
//     }
//     e.onkeydown = function(event) {
//         if (event.key == "Enter") {
//             blockChange(e);
//         }
//     };
//     e.onblur = function(event) {
//         blockChange(e);
//     };
// }
// function blockChange(e) {
//     if (e.classList.contains("edited") & e.parentNode.lastChild.classList.contains("edit")) {
//         e.parentNode.lastChild.classList.remove("edit");
//         e.parentNode.lastChild.classList.add("unedit");
//         e.classList.remove("edited");
//         e.classList.remove("edit-completed");
//         e.readOnly = true;
//     }
// }

fetch('https://jsonplaceholder.typicode.com/todos/1', {mode: "no-cors"})
    .then(response => response.json()
    .then(js => console.log(js)))







