function addTodo() {
  const todoInput = document.getElementById('todoInput');
  const todoText = todoInput.value.trim();

  if (todoText === '') {
    alert('please ENTER a task');
    return;
  }

  const todoList = document.getElementById('todoList');
  const todoItem = document.getElementById('li');

  todoItem.textContent = todoText;

  todoItem.addEventListener('click', () => {
    todoItem.classList.toggle('completed');
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    if (todoItem) {
      todoList.removeChild(todoItem);
    } else {
      console.error('todoItem is null');
    }
  });

  todoItem.appendChild(deleteButton);
  todoList.appendChild(todoItem);

  todoInput.value = '';
} 

document.getElementById('todoInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter'){
    addTodo();
  }
});
