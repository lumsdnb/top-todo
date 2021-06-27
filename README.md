# top-todo

## Assignment

Your ‘todos’ are going to be objects that you’ll want to dynamically create, which means either using factories or constructors/classes to generate them.

- Brainstorm what kind of properties your todo-items are going to have. At a minimum they should have a title, description, dueDate and priority. You might also want to include notes or even a checklist.

todo class
includes:
add/update title
add/update desc
add/update due date
add/update priority
check/uncheck item
nice to have:
add/update nested todo

```js

function listFactory = (todos[]) => {
let \_listName = ""
let \_listItems=[]
const getList = () => todos
const changeOrder = () => {

    }
    const setName = (name) => {
        _listName = name
    }
    const addTodo = (todo) =>{

    }
    return { getList, getName, setName, changeOrder}

}

```

render to dom (should this be in class?)

project /list factory
holds todo items
includes:
add/update project name
add/remove todo item
nice to have:
set item order
sort by
set color

- Your todo list should have projects or separate lists of todos. When a user first opens the app, there should be some sort of ‘default’ project to which all of their todos are put.
  Users should be able to create new projects and choose which project their todos go into.
- You should separate your application logic (i.e. creating new todos, setting todos as complete, changing todo priority etc.) from the DOM-related stuff, so keep all of those things in separate modules.
- The look of the User Interface is up to you, but it should be able to do the following:
  - view all projects
  - view all todos in each project (probably just the title and duedate.. perhaps changing color for different priorities)
  - expand a single todo to see/edit its details
  - delete a todo
- For inspiration, check out the following great todo apps. (look at screenshots, watch their introduction videos etc.)
  - Todoist
  - Things
  - any.do
- Use localStorage to save user’s projects and todos between sessions.
- Since you are probably already using webpack, adding external libraries from npm is a cinch! You might want to consider using the following useful library in your code:
  date-fns gives you a bunch of handy functions for formatting and manipulating dates and times.

```

```
