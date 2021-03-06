function wasClosed() {
  console.log(this.parentElement.parentElement);
  //this.parentElement.remove();
}

class todoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    let _isChecked = false;
    let id = 0;
  }
  set setTitle(t) {
    this.title = t;
  }
  set setDescription(d) {
    console.log(e);
    //this.description = d;
  }

  set setDueDate(d) {
    this.dueDate = d;
  }

  set setPriority(p) {
    this.priority = p;
  }

  set setId(i) {
    this.id = i;
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

    const close = document.createElement('span');
    close.classList.add('close-btn');
    close.innerHTML = 'X';
    close.addEventListener('click', wasClosed);

    title.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        console.log('cancel');
        this.setTitle = e.path[0].innerHTML;
        e.preventDefault();
        window.getSelection().removeAllRanges();
        return false;
      }
    });

    domEl.append(checkbox, title, description, dueDate, priority, close);
    //domEl.innerHTML = `${this.title} ${this.description} ${this.dueDate} ${this.priority}`;
    return domEl;
  }
}

export default todoItem;
