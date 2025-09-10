let tasks = []

let add_notes_button = document.querySelector("#add-notes-button")

let targetElement = document.querySelector(".add-notes-pop-up")

let closeButton = document.querySelector('#close-pop-up')

let taskForm = document.querySelector("#task-form")

let addNotesFormContainer = document.querySelector(".add-notes-form")

add_notes_button.addEventListener('click', (event) => {
    targetElement.classList.add("active")
})

closeButton.addEventListener('click', () => {
    targetElement.classList.remove("active")
})

// {
//     titile: "some title",
//         description : "some description",
//             timeStamp : "T:12:50:00 D: 09/09/2025"
// }

addNotesFormContainer.addEventListener("mouseleave", () => {
    document.getElementById("formSubmitButton").click()
})

let taskObject = {
    title: "",
    description: "",
    timeStamp: ""
}

taskForm.addEventListener("submit", (event) => {
    event.preventDefault()

let title = e.target["title"].value.trim();
let description = e.target["description"].value.trim();

  if (!title || !description) {
    return console.warn("Please add task data before submitting!");
  }

  // Create new task object
  tasks.push({
    title,
    description,
    timeStamp: `T: ${new Date().toLocaleTimeString()} D: ${new Date().toLocaleDateString()}`
  });

  e.target.reset();   // clear form
  closeBtn.click();   // close popup
  displayTask();      // re-render
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