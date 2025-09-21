const toDoList = [];

function addTask(){
    const inputElement =document.querySelector("#taskinput");
    const input = inputElement.value;

    if (input.trim() !== ""){
        //append the input to the array
        toDoList.push({
            task: input,
        });
        console.log(toDoList);
        renderDisplay();
        inputElement.value = "";
    }

};

function renderDisplay(){

   const display = document.querySelector(".to-do-list-display");
   const displayTasks = toDoList.map((task) => `<li> ${task.task} <button>edit</button> <button>remove</button></li>`)
   .join('');

   display.innerHTML = displayTasks;
};
   