import todoItem from './todoItem';
import todoList from './todoList';

function component() {
  const element = document.createElement('div');

  const testItem = new todoItem('TODO title', '', '2021-04-17', '!!');

  const defaultList = new todoList('default');
  element.append(testItem.domElement);

  return element;
}

document.body.appendChild(component());
