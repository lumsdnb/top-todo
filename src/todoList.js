import todoItem from './todoItem';

class todoList {
  constructor(listName) {
    this.listName = listName;
    this.todos = [];
  }

  addTodo(item) {
    const t = new todoItem(item, '', '2021-04-17', '!!');
    this.todos.push(t);
  }

  removeTodo(i) {
    this.todos.splice(i, 1);
  }

  get domElement() {
    const el = document.createElement('div');
    for (let i = 0; i < this.todos.length; i++) {
      const item = this.todos[i];
      item.setId = i;
      el.append(item.domElement);
    }

    const title = document.createElement('h1');
    title.innerHTML = this.listName;
    title.setAttribute('contenteditable', 'true');
    el.classList.add('todo-list');
    el.prepend(title);
    return el;
  }
}

export default todoList;
