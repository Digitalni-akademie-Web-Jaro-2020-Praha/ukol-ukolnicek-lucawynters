'use strict';

console.log('funguju!');

const button = document.querySelector('button');
const tasks = document.querySelector('input');
const updateTasks = () => {
  return tasks.value
}
const btnClick = (event) => {
  const todoList = document.querySelector('.todo__tasks');
  todoList.innerHTML += `<div class="task">${updateTasks()}</div`;
  tasks.value = tasks.defaultValue;
}

button.addEventListener('click', btnClick);
