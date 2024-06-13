// function addTodo() {
//   const todoInput = document.getElementById('todoInput');
//   const todoText = todoInput.value.trim();

//   if (todoText === '') {
//     alert('please ENTER a task');
//     return;
//   }

//   const todoList = document.getElementById('todoList');
//   const todoItem = document.getElementById('li');

//   todoItem.textContent = todoText;

//   todoItem.addEventListener('click', () => {
//     todoItem.classList.toggle('completed');
//   });

//   const deleteButton = document.createElement('button');
//   deleteButton.textContent = 'Delete';
//   deleteButton.addEventListener('click', () => {
//     if (todoItem) {
//       todoList.removeChild(todoItem);
//     } else {
//       console.error('todoItem is null');
//     }
//   });

//   todoItem.appendChild(deleteButton);
//   todoList.appendChild(todoItem);

//   todoInput.value = '';
// } 

// document.getElementById('todoInput').addEventListener('keypress', function(e) {
//   if (e.key === 'Enter'){
//     addTodo();
//   }
// });
const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")): []

console.log(itemsArray)

document.querySelector("#enter").addEventListener("click", () => {
  const item = document.querySelector("#item")
  createItem(item)
})

function createItem(item){
  itemsArray.push(item.value)
  localStorage.setItem("items", JSON.stringify(itemsArray))
  location.reload()
}

function displayDate(){
  let date = new Date()
  date = date.toString().split(" ")
  document.querySelector("#date").innerHTML = date[1] + " " + date[2] + " " + date[3]
  console.log(date)
}

window.onload = function(){
  displayDate()
  displayItems()
}