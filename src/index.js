import todoItem from './todoItem';
import todoList from './todoList';
import navBar from './nav';

const container = document.getElementById('content');

function component() {
  const element = document.createElement('div');
  element.classList.add('card');

  const defaultList = new todoList('default');

  const addBtn = document.createElement('button');
  addBtn.classList.add('add-todo-button');
  addBtn.innerHTML = '+';

  container.parentElement.prepend(navBar());
  element.append(defaultList.domElement, addBtn);

  return element;
}

container.appendChild(component());
