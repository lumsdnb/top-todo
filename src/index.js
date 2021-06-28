import todoItem from './todoItem';
import todoList from './todoList';
import navBar from './nav';

const container = document.getElementById('content');

function component() {
  const element = document.createElement('div');
  element.classList.add('card');

  const defaultList = new todoList('default');
  defaultList.addTodo('TODOd title');

  const addBtn = document.createElement('button');
  addBtn.classList.add('add-todo-button');
  addBtn.innerHTML = '+';

  container.parentElement.prepend(navBar());
  element.append(defaultList.domElement, addBtn);

  const addTodo = () => {
    defaultList.addTodo('new todo');
    console.log(defaultList);
    console.log(element.childNodes);
    //todo: figure out how to remove and re render list properly
    //element.append(defaultList.domElement);
  };

  addBtn.addEventListener('click', addTodo);

  return element;
}

container.appendChild(component());
