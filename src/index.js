import todoItem from './todoItem';
import todoList from './todoList';
import navBar from './nav';

const container = document.getElementById('content');

function component() {
  const element = document.createElement('div');
  element.classList.add('card');

  const addTodo = (e) => {
    console.log('open modal');
  };

  const defaultList = new todoList('default');
  defaultList.addTodo('TODOd title');
  defaultList.addTodo('another one');
  defaultList.addTodo('another one');
  defaultList.addTodo('another one');
  defaultList.addTodo('another one');
  defaultList.addTodo('another one');

  const addBtn = document.createElement('button');
  addBtn.classList.add('add-todo-button');
  addBtn.innerHTML = '+';

  container.parentElement.prepend(navBar());
  element.append(defaultList.domElement, addBtn);
  addBtn.addEventListener('click', addTodo);

  return element;
}

container.appendChild(component());
