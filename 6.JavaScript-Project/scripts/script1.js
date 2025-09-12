let tasks = []

let add_notes_button = document.querySelector("#add-notes-button");
let targetElement = document.querySelector(".add-notes-pop-up");
let closeButton =document.querySelector("#close-pop-up");
let taskForm = document.querySelector("#task-form");

let isEdit = false;   //keep track of whether we are currently in edit mode,
let TaskEditIndex = null;  //which task is being edited.
let addNotesFormContainer = document.querySelector(".add-notes-form")

// search 
// let searchInput = document.querySelector(".search-bar input")


// Open popup — Add new task start
add_notes_button.addEventListener("click", (event) => {
    targetElement.classList.add("active");
});

// Close popup
closeButton.addEventListener("click",() => {
    targetElement.classList.remove("active");
});

// Auto-submit on mouse leave
addNotesFormContainer.addEventListener("mouseleave",() => {
    document.getElementById("formSubmitButton").click();
});

// Form submit handler
taskForm.addEventListener("submit", (event) => {
event.preventDefault();
try{
    if(isEdit && TaskEditIndex != null){
        // update existing task 
        tasks[TaskEditIndex].title = event.target["title"].value;
        tasks[TaskEditIndex].description = event.target["description"].value;

    } else {
        // add new task
            if (!event.target["title"].value || !event.target["description"].value) {
                throw ("empty fields !");
            }
             tasks.push({
                title: event.target["title"].value,
                description: event.target["description"].value,
                timeStamp: `T: ${new Date().toLocaleTimeString()} D: ${new Date().toLocaleDateString()}`
            });
    }
    // clear form inputs, close popup, refresh UI
        event.target["title"].value = "";
        event.target["description"].value = "";
        closeButton.click();
        displayTask();
        } catch (err) {
            console.log("please added task data before submitting ! : ", err);
        }
});

// displayTask
function displayTask() {
    document.querySelector('.tasks-container').innerHTML = "";
    tasks.forEach((task, index) => {
        let singleTask = document.createElement("div");
        singleTask.classList.value = "task border p-4";
        singleTask.innerHTML = `
            <h4 class="title">${task.title}</h4>
            <p class="description">${task.description}</p>
            <span class="timeStamp">${task.timeStamp}</span>
            <button onClick='deleteTask(${index})'>delete</button>
            <button onClick='editTask(${index})'>edit</button>
        `;
        document.querySelector('.tasks-container').appendChild(singleTask);
    });
}

// delete task 
function deleteTask(deleteIndex) {
    let confirmDelete = window.confirm(`do you really want to delete ${deleteIndex} element ?`);


    if (confirmDelete) {
        tasks = tasks.filter((task, index) => {return index != deleteIndex});
        displayTask();
    } else {
        alert("Delete cancelled!");
    }
}

// edit task 
function editTask(editIndex) {
 // open pop up
    targetElement.classList.add("active")
    // access the data for selected task
    console.log(tasks[editIndex].title)
    console.log(tasks[editIndex].description)
    // put selected data into input fields
    taskForm["title"].value = tasks[editIndex].title
    taskForm["description"].value = tasks[editIndex].description
    // edit variable set
    isEdit = true
    TaskEditIndex = editIndex
}

// // search task 
// searchInput.addEventListener("input", () => {
//     const query = searchInput.value.trim()
//     if (query === "") {
//         displayTask()
//     } else {
//         const regex = new RegExp(query, "i")
//         const filteredTasks = tasks.filter(task => regex.test(task.title))
//         displayTask(filteredTasks);
//     }
// });
