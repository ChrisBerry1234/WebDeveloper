//Get User Selected Month From Options
let getMonth = document.getElementById("month");
let month_header = document.getElementById("month-display");

// Add Eevent Listener by changing and selecting option
getMonth.addEventListener('change', () => {
    createCalendar(getMonth.value);
})

//Get Current Date from Date() constructor 
const current_date = new Date();

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

getMonth.value = month;
calendarDay_list.innerHTML = '';
month_header.innerHTML = `${month} ${current_date.getFullYear()}`;

for (let i = 1; i<=days; i++){
    const calendarDay = document.createElement("li");
    calendarDay.textContent = i;
    calendarDay.classList.add("day-text");
    calendarDay_list.appendChild(calendarDay);
    calendarDay.addEventListener("dblclick", () =>{
        alert(`You clicked day ${calendarDay.textContent}`);
    })

}
}

window.addEventListener("load", () => {
    createCalendar(current_date.toLocaleString('default', { month: 'long'}))
});
