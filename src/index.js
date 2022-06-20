
  const form = document.getElementById('create-task-form');
const inputValue = document.querySelector('#new-task-description')
const todoList = document.getElementById('task')


document.addEventListener("DOMContentLoaded", () => {

  form.addEventListener('submit', newTask);
 
  // console.log(inputValue)
});

const newTask = (e) =>{
  e.preventDefault();

  let todoList = document.getElementById('new-task-description').value;
  newAppendedTask(todoList)
  e.target.reset()

};

const newAppendedTask = (task) =>{
  let li = document.createElement('li')
  li.textContent = task
  document.getElementById('tasks').appendChild(li)
}
