import { addProject, changeProjectView } from './index';
const navBar = (listItems) => {
  const handleAddProject = (p) => {
    addProject(p);
  };

  const selectProject = (e) => {
    changeProjectView(e.target.parentNode.dataset.id);
  };

  const nav = document.createElement('nav');
  const navInner = document.createElement('div');
  navInner.classList.add('menu');

  let viewState = false;
  const toggleView = () => {
    viewState = !viewState;
    viewState
      ? navInner.classList.add('menu-hidden')
      : navInner.classList.remove('menu-hidden');
  };

  const burger = document.createElement('span');
  navInner.classList.contains('menu-hidden')
    ? (burger.innerHTML = '-')
    : (burger.innerHTML = '+');

  burger.classList.add('nav-burger');
  nav.append(burger);

  const list = document.createElement('ul');
  list.classList.add('nav-links');

  //project list

  for (let i = 0; i < listItems.length; i++) {
    const element = listItems[i];
    let entry = document.createElement('li');
    entry.dataset.id = i;
    let linkText = document.createTextNode(element);
    let a = document.createElement('a');
    a.append(linkText);
    a.title = element;
    entry.appendChild(a);
    entry.addEventListener('click', selectProject);
    list.append(entry);
  }

  // add project btn

  const addBtn = document.createElement('span');
  addBtn.innerHTML = '+ add project +';
  addBtn.classList.add('add-project');
  addBtn.addEventListener('click', () => handleAddProject('new list'));

  //append everything

  navInner.append(list, addBtn);
  nav.append(navInner);

  burger.addEventListener('click', toggleView);

  return nav;
};

export default navBar;
