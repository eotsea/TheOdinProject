const todoInput = document.querySelector("input");
const addButton = document.getElementById("addButton");
const showTodo = document.querySelector(".showTodo");

let todoList = [];


const showTodoVisible = () => {
  showTodo.style.visibility = "visible";
};

const showTodoHideVisible = () => {
  showTodo.style.visibility = "hidden";
};

const cancelTodo = (todo) => {
  const index = todoList.indexOf(todo);
  const li = document.getElementById(`but${todo.id}`);
  // let todoTempIndex = 0; 
  // for (const element of todoList) {
  //   if (element.id == id) {
  //     break;
  //   }
  //   todoTempIndex++;
  // }
  console.log(index);
  todoList.splice(index, 1);
  showTodo.children[index].remove();
  console.log(todoList);
};

const renderTodo = (todo) => {
  console.log(todo);
  const li = document.createElement("li");
  li.innerHTML = `
    <div class ="todo">
    <div id="but${todo.id}" class="data">${todo.data}</div>
    <button class="cancelButton">DELETE</button>
    </div>`;
    li.addEventListener("click", (event) => {
      if(event.target.classList.contains('cancelButton')){
        cancelTodo(todo);
      }
    });
  showTodo.append(li);
  todoInput.value = "";
};

const addTodo = () => {
  const data = todoInput.value;
  if (data.trim() !== "") {
    const todo = {
      id: Math.random().toString(),
      data: data,
    };
    todoList.push(todo);
    renderTodo(todo);
  }
};

addButton.addEventListener("click", addTodo);