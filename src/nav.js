//generate nav bar
//<nav><li>home</li><li>menu</li><li>contact us</li></nav>

const navBar = () => {
  const nav = document.createElement('nav');
  nav.classList.add('menu');
  const entries = ['default project', 'hobbies', 'work i guess'];

  const burger = document.createElement('span');
  burger.innerHTML = '-';
  burger.classList.add('nav-burger');
  nav.append(burger);

  const list = document.createElement('ul');
  list.classList.add('nav-links');

  for (let i = 0; i < entries.length; i++) {
    const element = entries[i];
    let entry = document.createElement('li');
    let linkText = document.createTextNode(element);
    let a = document.createElement('a');
    a.append(linkText);
    a.title = element;
    entry.appendChild(a);
    list.append(entry);
  }
  nav.append(list);

  return nav;
};

export default navBar;
