// "use strict";

// console.log(`fix: (1) add new task bug (2) sort tasks (3) edit task content`);
console.log(`fix: (2) sort tasks (3) edit task content (4) one more new task`);

const inputNew = document.querySelector(".input-new");
const listEl = document.querySelector("ul");

inputNew.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (!inputNew.value) return alert(`Please describe your task :)`);

    if (inputNew.value) {
      const html = `
            <li class="todo">
                <div class="todo-item">
                    <div class="todo-box">
                        <ion-icon
                            class="icon-todo icon-check"
                            name="square-outline"
                        ></ion-icon>
                    </div>
                    <label>
                        <p class="todo-text">${inputNew.value}</p>
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

      const newTodo = document.createElement("li");
      newTodo.innerHTML = html;
      listEl.appendChild(newTodo);
      inputNew.value = "";
    }
  }
});

const taskCheck = document.querySelectorAll(".icon-check");
taskCheck.forEach(function (check) {
  check.addEventListener("click", function () {
    check.closest("li").classList.toggle("todo-text--done");
    if (check.name === "square-outline") {
      check.name = "checkmark-done-outline";
    } else if (check.name === "checkmark-done-outline") {
      check.name = "square-outline";
    }
  });
});

const iconEditEl = document.querySelectorAll(".todo-edit");
iconEditEl.forEach(function (edit) {
  edit.addEventListener("click", function () {
    console.log("edited!");
    const curTodo = edit.closest(".todo");
    const curTodoText = edit.closest(".todo").textContent.trim();
  });
});

// const para = document.querySelector('p');

// para.addEventListener('click', updateName);

// function updateName() {
//   let name = prompt('輸入新的名字');
//   para.textContent = 'Player 1: ' + name;
// }

const iconDelEl = document.querySelectorAll(".todo-del");
iconDelEl.forEach(function (del) {
  del.addEventListener("click", function (e) {
    const curTodo = del.closest(".todo");
    const curTodoText = del.closest(".todo").textContent.trim();
    const confirmMsg = confirm(`Are you sure to DELETE *${curTodoText}* ?`);
    if (confirmMsg) curTodo.remove();
  });
});

const renderTask = function () {};
