function displayDate(){
  let date = new Date()
  date = date.toString().split(" ")
  document.querySelector("#date").innerHTML = date[1] + " " + date[2] + " " + date[3]
  console.log(date)
}

window.onload = function(){
  displayDate();
}

// code below is for inputting data e.t.c 

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
  if(inputBox.value === ''){
    alert("You must enter a task!");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "li"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask(); 