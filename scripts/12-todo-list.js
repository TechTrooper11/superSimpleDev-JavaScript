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

    todoList.forEach((todoObject, index) => {

      // const name = todoObject.name;
      // const dueDate = todoObject.dueDate;
      //applying shortcut for an object => using destructuring.
      const { name, dueDate } = todoObject;
      // const { dueDate } = todoObject;


      //div don't have any prestyling.
      const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class = "delete-todo-button js-delete-todo-button"
      >Delete</button>
      `;
      todoListHTML += html;
    });


    //Generating the HTML using javascript.
    // for(let i = 0; i < todoList.length; i++) {
    //   const todoObject = todoList[i];


    //   // const name = todoObject.name;
    //   // const dueDate = todoObject.dueDate;
    //   //applying shortcut for an object => using destructuring.
    //   const { name, dueDate } = todoObject;
    //   // const { dueDate } = todoObject;


    //   //div don't have any prestyling.
    //   const html = `
    //   <div>${name}</div>
    //   <div>${dueDate}</div>
    //   <button onclick = "
    //     todoList.splice(${i}, 1);
    //     renderTodoList();
    //     " class = "delete-todo-button"
    //   >Delete</button>
    //   `;
    //   todoListHTML += html;
    // }
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

  console.log(document.querySelectorAll('.js-delete-todo-button'));//it will give us all the elements. means all the delete buttons and you can see in the console.

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
        renderTodoList();
    });
  });

  // console.log(index); // as soon as we end the forEach loop index does not exist any more, in console you will get index not defined.
}

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  })
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