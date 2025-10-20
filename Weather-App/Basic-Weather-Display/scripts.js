let monthInput = document.getElementById("month");
monthInput.addEventListener("change", displayMonth);

let content = document.getElementById("information-weather-display")


function displayMonth(){
    const choice = monthInput.value;
    
    if(choice === 'December'){
        content.textContent = "Hey";
    }
    else{
        console.log("Waiting");
        content.textContent = '';
    }
   
}

