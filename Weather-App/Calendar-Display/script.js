//Get User Selected Month From Options
let getMonth = document.getElementById("month");
let month_header = document.getElementById("display-month");

// Add Eevent Listener by changing and selecting option
getMonth.addEventListener('change', () => {
    createCalendar(getMonth.value);
})

//Parent Element to hold list day elements
let calendarDay_list = document.getElementById("days");
    
function createCalendar(month){

    let days = 31;

   switch(month) {
    case "September":
    case "April":
    case "June":
    case "November":
        days = 30;
        break;

    case "February":
        days = 28;
        break;

   default: 
        days = 31;
}

calendarDay_list.innerHTML = '';
month_header.innerHTML = month;

for (let i = 1; i<=days; i++){
    const calendarDay = document.createElement("li");
    calendarDay.textContent = i;
    calendarDay_list.appendChild(calendarDay);
}
}

createCalendar("January");