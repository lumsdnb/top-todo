import todoItem from './todoItem';

class todoList {
  constructor(listName) {
    this.listName = listName;
    this.todos = [];
  }

  set setTitle(n) {
    this.listName = n;
  }

  get getTitle() {
    return this.listName;
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

    title.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.setTitle = e.path[0].innerHTML;
        e.preventDefault();
        window.getSelection().removeAllRanges();
        return false;
      }
    });

    el.prepend(title);
    return el;
  }
}

export default todoList;
