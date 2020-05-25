'use strict';

console.log('funguju!');

const todoList = [
  'Vyprat ponožky',
  'Naučit se funkce vyššího řádu',
  'Nakoupit na víkend',
];

const listElm = document.querySelector('.todo__tasks');
for (let i = 0; i < todoList.length; i += 1) {
  listElm.innerHTML += `<li>${todoList[i]}</li>`;
}

/*
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

button.addEventListener('click', btnClick);*/