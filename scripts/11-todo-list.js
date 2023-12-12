//how do we group the name and due date together.
//By using an object.

const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'}
  ,{
  name: 'wash dishes',
  dueDate: '2022-12-20'}];

renderTodoList();

function renderTodoList(){ //render means to display something on the page.

  let todoListHTML = '';

    //Generating the HTML using javascript.

    for(let i = 0; i < todoList.length; i++) {
      const todoObject = todoList[i];
      // const name = todoObject.name;
      // const dueDate = todoObject.dueDate;

      //applying shortcut for an object => using destructuring.
      const { name, dueDate } = todoObject;
      // const { dueDate } = todoObject;


      //div don't have any prestyling.
      const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick = "
        todoList.splice(${i}, 1);
        renderTodoList();
        " class = "delete-todo-button"
      >Delete</button>
      `;
      todoListHTML += html;
    }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    name, //---> by using shorthand property syntax.
    // dueDate: dueDate,
    dueDate
  });

  inputElement.value = '';
  
  renderTodoList();
}