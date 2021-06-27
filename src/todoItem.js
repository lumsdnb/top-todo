class todoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    let _isChecked = false;
  }
  set setTitle(t) {
    this.title = t;
  }
  set setDescription(d) {
    this.description = d;
  }

  set setDueDate(d) {
    this.dueDate = d;
  }

  set setPriority(p) {
    this.priority = p;
  }

  get info() {
    return `${this.title} ${this.description} ${this.dueDate} ${this.priority}`;
  }
  get domElement() {
    const domEl = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    domEl.classList.add('todo-item');
    const title = document.createElement('span');
    title.setAttribute('contenteditable', 'true');
    title.classList.add('todo-description');
    title.innerHTML = this.title;

    const description = document.createElement('span');
    description.innerHTML = this.description;

    const dueDate = document.createElement('span');
    dueDate.classList.add('todo-duedate');
    dueDate.innerHTML = this.dueDate;

    const priority = document.createElement('span');
    priority.classList.add('todo-priority');
    priority.innerHTML = this.priority;

    domEl.append(checkbox, title, description, dueDate, priority);
    //domEl.innerHTML = `${this.title} ${this.description} ${this.dueDate} ${this.priority}`;
    return domEl;
  }
}

export default todoItem;
