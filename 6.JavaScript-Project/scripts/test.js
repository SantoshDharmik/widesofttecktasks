let tasks = [];

let addNotesBtn = document.querySelector("#add-notes-button");
let targetElement = document.querySelector(".add-notes-pop-up");
let closeBtn = document.querySelector("#close-pop-up");
let taskForm = document.querySelector("#task-form");
let addNotesFormContainer = document.querySelector(".add-notes-form");
let container = document.querySelector(".tasks-container");

addNotesBtn.addEventListener("click", () => targetElement.classList.add("active"));

closeBtn.addEventListener("click", () => targetElement.classList.remove("active"));

addNotesFormContainer.addEventListener("mouseleave", () =>
  document.getElementById("formSubmitButton").click()
);

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let title = e.target["title"].value.trim();
  let description = e.target["description"].value.trim();

  if (!title || !description) {
    return console.warn("Please add task data before submitting!");
  }

  tasks.push({
    title,
    description,
    timeStamp: `T: ${new Date().toLocaleTimeString()} D: ${new Date().toLocaleDateString()}`
  });

  e.target.reset();  
  closeBtn.click(); 
  displayTask();     
});

function displayTask() {
  container.innerHTML = tasks
    .map(
      (task) => `
      <div class="task border p-4">
        <h4 class="title">${task.title}</h4>
        <p class="description">${task.description}</p>
        <span class="timeStamp">${task.timeStamp}</span>
      </div>
    `
    )
    .join("");
}
