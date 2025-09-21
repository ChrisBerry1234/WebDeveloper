const toDoList = [{

}];

function addTask(){
    const inputElement = document.querySelector('#taskinput');
    const input = inputElement.value;

    if(input){

        toDoList.push({
            task: input,
        });
        console.log(toDoList);
        inputElement.value = '';
};


    
};
