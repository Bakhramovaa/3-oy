// const inputBox = document.querySelector(".inputField input");
// const addBtn = document.querySelector(".inputField button");
// const todoList = document.querySelector(".todoList");

// inputBox.onkeyup = () => {
//   let userDate = inputBox.value;
//   if (userDate.Data.trim() != 0) {
//     addBtn.classList.add("active");
//   } else {
//     addBtn.classList.remove("active");
//   }
// };

// addBtn.onclick = () => {
//   let userData = inputBox.value;
//   let getLocalStorage = localStorage.getItem("New Todo");
//   if (localStorage == null) {
//     listArr = [];
//   } else {
//     listArr = JSON.parse(getLocalStorage);
//   }
//   listArr.push(userData);
//   localStorage.setItem("New Todo", JSON.stringify(listArr));
//   showTasks();
// };

// function showTasks() {
//   let getLocalStorage = localStorage.getItem("New Todo");
//   if (localStorage == null) {
//     listArr = [];
//   } else {
//     listArr = JSON.parse(getLocalStorage);
//   }
//   let newLiTag = "";
//   listArr.forEach((element, index) => {
//     newLiTag += `<li> ${element}
//           Buy a new MacBook <span><i class="fas fa-trash"></i></span>
//         </li>`;
//   });
//   todoList.innerHTML = newLiTag;
// }

const A = document.querySelector("#task-area");
const B = document.querySelector("#single-task");
const C = document.querySelector("#tasks");

function addTask(event) {
  event.preventDefault();
  if (B.value === "") return;
  const task = createTask(B.value);
  C.appendChild(task);
  B.value = "";
}

function createTask(taskName) {
  const task = document.createElement("li");
  task.classList.add("task");
  task.innerHTML = `
     <input type="checkbox">
     <label>${taskName}</label>
     <span class="delete">&times;</span>
  `;

  const deleteButton = task.querySelector(".delete");
  deleteButton.addEventListener("click", deleteTask);

  return task;
}

function deleteTask(event) {
  event.target.parentElement.remove();
}

A.addEventListener("submit", addTask);
