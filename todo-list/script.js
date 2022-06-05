"use strict";

// console.log(`fix: (1) add new task bug (2) sort tasks (3) edit task content`);
console.log(`fix: (2) sort tasks (3) edit task content`);

const inputNewTask = document.querySelector("input");
const listEl = document.querySelector("ul");

inputNewTask.addEventListener("keypress", function (e) {
  inputNewTask.textContent = "";

  if (e.key === "Enter" && !inputNewTask.textContent) {
    return alert(`Please type in the task!`);
  }

  if (inputNewTask.textContent && e.key === "Enter") {
    const html = `
    <li class="todo" value="1">
        <div class="todo-item">
            <div class="todo-box">
                <ion-icon
                    class="icon-todo icon-check"
                    name="square-outline"
                ></ion-icon>
            </div>
            <label>
                <p class="todo-text">${inputNewTask.textContent.slice(
                  0,
                  -5
                )}</p>
            </label>
        </div>
        <div class="todo-tool">
            <div class="todo-edit">
                <ion-icon class="icon-todo" name="pencil-outline"></ion-icon>
            </div>
            <div class="todo-del">
                <ion-icon
                    class="icon-todo icon-del"
                    name="trash-outline"
                ></ion-icon>
            </div>
        </div>
    </li>
      `;
    listEl.innerHTML += html;
    inputNewTask.textContent = "";
  }
});

const taskCheck = document.querySelectorAll(".icon-check");
taskCheck.forEach(function (check) {
  check.addEventListener("click", function () {
    check.closest("li").classList.toggle("todo-text--done");
    if (check.name === "square-outline") {
      check.name = "checkmark-done-outline";
      check.closest("li").value = "2";
    } else if (check.name === "checkmark-done-outline") {
      check.name = "square-outline";
      check.closest("li").value = "1";
    }
  });
});

// ////////////////////////////////////////////////////
// have NOT finished yet
// ////////////////////////////////////////////////////
const iconEditEl = document.querySelectorAll(".todo-edit");
iconEditEl.forEach(function (edit) {
  edit.addEventListener("click", function () {
    console.log("edited!");
    const curTodo = edit.closest(".todo");
    const curTodoText = edit.closest(".todo").textContent.trim();
  });
});

const iconDelEl = document.querySelectorAll(".todo-del");
iconDelEl.forEach(function (del) {
  del.addEventListener("click", function (e) {
    const curTodo = del.closest(".todo");
    const curTodoText = del.closest(".todo").textContent.trim();
    const confirmMsg = confirm(`Are you sure to DELETE *${curTodoText}* ?`);
    if (confirmMsg) curTodo.remove();
  });
});
