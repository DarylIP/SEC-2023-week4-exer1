let btnSubmitDOM = document.querySelector("#btnSubmit");
let newTaskDOM = document.querySelector("#newTask");
let listContainerDOM = document.querySelector("#ListContainer");
let importantCheckboxDOM = document.querySelector("#importantCheckbox");

initialiseMultipleTasks();

// add task insert in the prompt
function initialiseMultipleTasks() {
  let promptTask = prompt("Insert your prompt(s) here");
  // safe guard
  if (promptTask === null) return;
  let taskArray = promptTask.split(",");

  for (let i = 0; i < taskArray.length; i++) {
    let value = taskArray[i].trim();
    let newLiDOM = createTaskElement(value);

    listContainerDOM.appendChild(newLiDOM);
  }
}

// add new task when press button
btnSubmitDOM.addEventListener("click", newTask);
document.addEventListener("keypress", function (e) {
  if (e.code === "Enter") {
    newTask();
  }
});

function newTask() {
  // safe guard, condition to return
  if (newTaskDOM.value === "") return;

  // create new li using javascript
  let newLiDOM = createTaskElement(newTaskDOM.value);

  let isImportant = importantCheckboxDOM.checked; // boolean
  if (isImportant) {
    //   add style to newLiTask = color ;'red
    newLiDOM.style.color = "red";
  }

  // get the parent and append a child inside it
  // parent : listContainerDOM, child : newLiDOM
  listContainerDOM.appendChild(newLiDOM);

  // empty the form
  resetForm();
}

function resetForm() {
  newTaskDOM.value = "";
  importantCheckboxDOM.checked = false;
}

function createTaskElement(taskText) {
  let newLiDOM = document.createElement("li");
  newLiDOM.innerText = taskText;

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", function () {
    deleteTask(newLiDOM);
  });

  newLiDOM.appendChild(deleteButton);
  return newLiDOM;
}

function deleteTask(taskElement) {
  listContainerDOM.removeChild(taskElement);
}

const newTaskInput = document.getElementById("newTask");

newTaskInput.addEventListener("input", adjustInputWidth);

function adjustInputWidth() {
  const inputLength = newTaskInput.value.length;
  if (inputLength > 20) {
    newTaskInput.classList.add("long-input");
  } else {
    newTaskInput.classList.remove("long-input");
  }
}
