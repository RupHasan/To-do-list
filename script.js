let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let input = document.querySelector("#input");
let addBtn = document.querySelector("#task-submit-btn");
let container = document.querySelector("#to-do-container");
let ding = new Audio("ding-101377.mp3");
let doneBtn;

// show tasks even when browser refreshed
tasks.forEach((task) => {
  let taskDiv = document.createElement("div");
  doneBtn = document.createElement("button");
  doneBtn.innerText = " ";
  taskDiv.innerText = task.name;
  doneBtn.classList.add("done-btn");

  taskDiv.append(doneBtn);
  taskDiv.classList.add("task");
  container.append(taskDiv);
});

addBtn.addEventListener("click", () => {
  if (input.value !== "") {
    let task = {
      name: input.value,
    };
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    let taskDiv = document.createElement("div");
    doneBtn = document.createElement("button");
    doneBtn.innerText = "✔️";
    taskDiv.innerText = input.value;
    doneBtn.classList.add("done-btn");

    taskDiv.append(doneBtn);
    taskDiv.classList.add("task");
    container.append(taskDiv);
    input.value = "";
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {
    alert("Write something first");
  }
});

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && input.value !== "") {
    if (input.value !== "") {
      let task = {
        name: input.value,
      };
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      let taskDiv = document.createElement("div");
      doneBtn = document.createElement("button");
      doneBtn.innerText = " ";
      taskDiv.innerText = input.value;
      doneBtn.classList.add("done-btn");

      taskDiv.append(doneBtn);
      taskDiv.classList.add("task");
      container.append(taskDiv);
      input.value = "";
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      alert("Write something first");
    }
  }
});

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("done-btn")) {
    e.target.parentElement.remove();
    tasks = tasks.filter((task) => task.name !== e.target.parentElement.innerText);
    localStorage.removeItem("tasks", JSON.stringify(tasks.filter((task) => task.name !== e.target.parentElement.innerText)));
    ding.play();
  }
});

