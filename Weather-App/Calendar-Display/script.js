//Get User Selected Month From Options
let getMonth = document.getElementById("month");
let month_header = document.getElementById("month-display");
let taskDate = document.getElementById("dateInput");

//Modals Selector
const modal = document.getElementById("modal");
const modal_close = document.getElementById("modal-close");

//Adding Event Listener onSubmit button
modal_close.addEventListener("click",()=>{
    modal.close();
})

// Add Eevent Listener by changing and selecting option
getMonth.addEventListener('change', () => {
    createCalendar(getMonth.value);
})

//Get Current Date from Date() constructor 
const current_date = new Date();


//Data Structure to hold months
const monthsData = {
    "January" : { season: "Winter", color: "lightblue", days: 31},
    "February": { season: "Winter", color: "lightblue", days: 28},
    "March":    {season: "Spring", color: "pink", days: 31},
    "April":    {season: "Spring", color: "pink", days: 30},
    "May":      {season: "Spring", color: "pink", days: 31},
    "June":     {season: "Summer", color: "red", days: 30},
    "July":     {season: "Summer", color: "red", days: 31},
    "August":   {season: "Summer", color: "red", days: 31},
    "September":{season: "Fall", color: "orange", days: 30},
    "October":  {season: "Fall", color: "orange", days: 31},
    "November": {season: "Winter", color: "lightblue", days: 30},
    "December": {season: "Winter", color: "lightblue", days: 31},
}

//Parent Element to hold list day elements
let calendarDay_list = document.getElementById("days");
    
function createCalendar(month){

    calendarDay_list.innerHTML = ''
    month_header.innerHTML = `${month} ${current_date.getFullYear()}`;

    for (let i = 1; i<=monthsData[month].days; i++){
        const calendarDay = document.createElement("li");
        calendarDay.textContent = i;
        calendarDay.classList.add("day-text");
        calendarDay_list.appendChild(calendarDay);
        calendarDay.addEventListener("dblclick", () =>{
        modal.showModal();
    })
    
}
renderCalendarInformation(month);
}



function renderCalendarInformation(month){
    //select all days elements 
    const allDays = document.querySelectorAll(".day-text");
    allDays.forEach((day) => {
        day.style.backgroundColor = monthsData[month].color;
    })
}

//ToDoList Functionality

//Empty todo list object
const toDoList = [{

}];

function addTask(){
    const inputElement =document.querySelector("#taskinput");
    const screendisplay = document.querySelector(".to-do-list-display");
    const input = inputElement.value;
    const date =  taskDate.value;

    if (input.trim() !== ""){
        if(!date){
            alert("Enter a date as well")
        }
        else{
        //append the input to the array
        toDoList.push({
            task: input,
            dateAssigned: date,
            completed: false
        });
        console.log(toDoList);
        /*renderDisplay();*/
        inputElement.value = "";
        taskDate.value = " ";

        //this list will hold the display for all the task elements
        const TaskList = document.createElement("li");
        TaskList.classList.add("todo-item");
        
        //span element to hold content within list
        const TaskListDisplay = document.createElement("span");
        TaskListDisplay.textContent = input;
        TaskListDisplay.classList.add("task-text");

        const TaskListDate = document.createElement('span');
        TaskListDate.textContent = date;
        TaskListDisplay.classList.add("task-date");

        
        //adding buttons for editing and deletion
        const EditButton = document.createElement("button");
        EditButton.textContent = "Edit";
        EditButton.addEventListener("click", () => editTask(TaskListDisplay));
        EditButton.classList.add("btn",  "btn-edit")

        const DeleteButton = document.createElement("button");
        DeleteButton.textContent = "Remove";
        DeleteButton.addEventListener("click", () => RemoveTask(TaskList));
        DeleteButton.classList.add("btn", "btn-remove");

        //Appending the task text and buttons to list item for display
        TaskList.appendChild(TaskListDisplay);
        TaskList.appendChild(TaskListDate);
        TaskList.appendChild(EditButton);
        TaskList.appendChild(DeleteButton);

        //Append the taskList with all of its childs to the screen display
        screendisplay.appendChild(TaskList);
    }
    }

    else{
        alert("Please Enter a Task");
    };
};


function editTask(TaskListDisplay){
   const newTask = prompt("Please Enter Your Updated Task");
   console.log(newTask);

   if (newTask !== null && newTask.trim() !== "") {
        TaskListDisplay.textContent = newTask;
   }
};

function RemoveTask(TaskList){
    TaskList.remove();
};
/*
function renderDisplay(){

   const display = document.querySelector(".to-do-list-display");
   const displayTasks = toDoList.map((task) => `<li> ${task.task} <button>edit</button> <button>remove</button></li>`)
   .join('');

   display.innerHTML = displayTasks;
};
*/
   

//Loading Current date data on computer load
window.addEventListener("load", () => {
    createCalendar(current_date.toLocaleString('default', { month: 'long'}))
});
