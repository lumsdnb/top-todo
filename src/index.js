import todoItem from './todoItem';
import todoList from './todoList';
import navBar from './nav';

const container = document.getElementById('content');
let projectList = ['default', 'hobbies', 'work i guess'];
let currentList = 0;
const projectObjects = [];

export function addProject(e) {
  projectList.push(e);
  changeProjectView(currentList);
}

export function changeProjectView(e) {
  currentList = e;
  reRender();
}

const reRender = () => {
  const old = document.querySelector('.card');
  container.innerHTML = '';
  container.appendChild(component());
};

function component() {
  const element = document.createElement('div');
  element.classList.add('card');

  //create project objects from named list
  projectList.forEach((p) => {
    const list = new todoList(p);
    projectObjects.push(list);
  });

  const addBtn = document.createElement('button');
  addBtn.classList.add('add-todo-button');
  addBtn.innerHTML = '+';

  container.prepend(navBar(projectList));
  element.append(projectObjects[currentList].domElement, addBtn);

  const addTodo = () => {
    console.log(projectObjects[currentList]);
    projectObjects[currentList].addTodo('new todo');
    reRender();
    //todo: figure out how to remove and re render list properly
    //element.append(defaultList.domElement);
  };

  addBtn.addEventListener('click', addTodo);

  return element;
}

container.appendChild(component());
