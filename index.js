'use strict';

console.log('funguju!');

const button = document.querySelector('button');
const inputElm = document.querySelector('input');
const newTask = () => {
  return inputElm.value
}
const btnClick = (event) => {
  const todoList = document.querySelector('.todo__tasks');
  todoList.innerHTML += `<div class="task">${newTask()}</div`;

}

button.addEventListener('click', btnClick);
