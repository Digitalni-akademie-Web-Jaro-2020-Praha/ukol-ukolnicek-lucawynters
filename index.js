'use strict';

console.log('funguju!');

const todoList = [
  'Vyprat ponožky',
  'Naučit se funkce vyššího řádu',
  'Nakoupit na víkend',
];

const updateTasks = () => {
  const listElm = document.querySelector('.todo__tasks');
  listElm.innerHTML = '';
  for (let i = 0; i < todoList.length; i += 1) {
    listElm.innerHTML += `<li>${todoList[i]}</li>`;
  }
};

const button = document.querySelector('button');
const tasks = document.querySelector('input');

const btnClick = (event) => {

  todoList.push(tasks.value)
  updateTasks()
  tasks.value = tasks.defaultValue;
}

button.addEventListener('click', btnClick);