import todoItem from './todoItem';
import todoList from './todoList';
import navBar from './nav';

const container = document.getElementById('content');
let projectList = ['default', 'hobbies', 'work i guess'];
let currentList = 0;

export function addProject(e) {
  projectList.push(e);
  changeProjectView(currentList);
}

export function changeProjectView(e) {
  currentList = e;
  const old = document.querySelector('.card');
  container.innerHTML = '';
  container.appendChild(component());
}

function component() {
  const element = document.createElement('div');
  element.classList.add('card');

  //create project objects from named list
  const projectObjects = [];
  projectList.forEach((p) => {
    const list = new todoList(p);
    projectObjects.push(list);
  });
  projectObjects[currentList].addTodo('TODOd title');

  const addBtn = document.createElement('button');
  addBtn.classList.add('add-todo-button');
  addBtn.innerHTML = '+';

  container.prepend(navBar(projectList));
  element.append(projectObjects[currentList].domElement, addBtn);

  const addTodo = () => {
    projectList[currentList].addTodo('new todo');
    //todo: figure out how to remove and re render list properly
    //element.append(defaultList.domElement);
  };

  addBtn.addEventListener('click', addTodo);

  return element;
}

container.appendChild(component());
