const toDoList = [];

function addTask(){
    const inputElement =document.querySelector("#taskinput");
    const Screemdisplay = document.querySelector(".to-do-list-display");
    const input = inputElement.value;

    if (input.trim() !== ""){
        //append the input to the array
        toDoList.push({
            task: input,
        });
        console.log(toDoList);
        /*renderDisplay();*/
        inputElement.value = "";

        //this list will hold the display for all the task elements
        const TaskList = document.createElement("li");
        TaskList.classList.add("todo-item");
        
        //span element to hold content within list
        const TaskListDisplay = document.createElement("span");
        TaskListDisplay.textContent = input;
        TaskListDisplay.classList.add("task-text");
        
        //adding buttons for editing and deletion
        const EditButton = document.createElement("button");
        EditButton.textContent = "edit";
        EditButton.addEventListener("click", () => editTask(TaskListDisplay));
        EditButton.classList.add("btn",  "btn-edit")

        const DeleteButton = document.createElement("button");
        DeleteButton.textContent = "Remove";
        DeleteButton.addEventListener("click", () => RemoveTask(TaskList));
        DeleteButton.classList.add("btn, btn-remove");

        //Appending the task text and buttons to list item for display
        TaskList.appendChild(TaskListDisplay);
        TaskList.appendChild(EditButton);
        TaskList.appendChild(DeleteButton);

        //Append the taskList with all of its childs to the screen display
        Screemdisplay.appendChild(TaskList);
    }

    else{
        alert("Please Enter a Task")
    };

};

/*
function renderDisplay(){

   const display = document.querySelector(".to-do-list-display");
   const displayTasks = toDoList.map((task) => `<li> ${task.task} <button>edit</button> <button>remove</button></li>`)
   .join('');

   display.innerHTML = displayTasks;
};
*/
   