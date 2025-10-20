let monthInput = document.getElementById("month");
monthInput.addEventListener("change", displayMonth);

let content = document.getElementById("information-weather-display")


function displayMonth(){
    const choice = monthInput.value;
    
   switch (choice) {
    case "January":
    case "Feburary":
    case "December":
        content.textContent = " Cold and snowy — winter chill fills the air.";
        break;

    case "March":
    case "April":
    case "May":
        content.textContent = "Mild and breezy — spring blossoms and fresh air.";
        break;

    case "June":
    case "July":
    case "August":
        content.textContent = "Hot and sunny — summer days full of warmth";
        break;

    case "September":
    case "October":
    case "November":
        content.textContent = "Cool and crisp 🍂 — autumn leaves and cozy evenings.";
        break;

    default:
        content.textContent = '';
   }
}

