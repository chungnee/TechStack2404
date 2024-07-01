document.addEventListener("DOMContentLoaded", function () {
  const addTodoButton = document.getElementById("add-todo");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");
  const clearTodosButton = document.getElementById("clear-todos");
  const tabs = document.querySelectorAll(".tab");

  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function addTodoItem(text, completed = false) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;
    checkbox.addEventListener("change", updateTodoStatus);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", deleteTodoItem);

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(text));
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  }

  function updateTodoStatus(event) {
    const index = Array.from(todoList.children).indexOf(
      event.target.parentElement
    );
    todos[index].completed = event.target.checked;
    saveTodos();
    filterTodos(document.querySelector(".tab.active").getAttribute("data-tab"));
  }

  function deleteTodoItem(event) {
    const index = Array.from(todoList.children).indexOf(
      event.target.parentElement
    );
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
  }

  function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach((todo) => addTodoItem(todo.text, todo.completed));
  }

  addTodoButton.addEventListener("click", function () {
    const value = todoInput.value.trim();
    if (value !== "") {
      todos.push({ text: value, completed: false });
      saveTodos();
      addTodoItem(value);
      todoInput.value = "";
    }
  });

  clearTodosButton.addEventListener("click", function () {
    todos = [];
    saveTodos();
    renderTodos();
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      filterTodos(tab.getAttribute("data-tab"));
    });
  });

  function filterTodos(tab) {
    const items = todoList.getElementsByTagName("li");
    for (let item of items) {
      const checkbox = item.getElementsByTagName("input")[0];
      switch (tab) {
        case "all":
          item.style.display = "flex";
          break;
        case "active":
          item.style.display = checkbox.checked ? "none" : "flex";
          break;
        case "completed":
          item.style.display = checkbox.checked ? "flex" : "none";
          break;
      }
    }
  }

  renderTodos();
  filterTodos("all");
});
