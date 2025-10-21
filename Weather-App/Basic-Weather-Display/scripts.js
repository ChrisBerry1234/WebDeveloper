let monthInput = document.getElementById("month");
monthInput.addEventListener("change", displayMonth);

let content = document.getElementById("information-weather-display");
let month = document.getElementById("month-display");

/**
 * img display content
 */

let weather_img = document.getElementById("weather");

let date = new Date();
let current_month = date.toLocaleString("default", {month: "long"});


function displayMonth() {
    const choice = monthInput.value;
    
    switch (choice) {
        case "January":
        case "February":
        case "December":
            month.textContent = choice;
            content.textContent = "Cold and snowy — winter chill fills the air.";
            weather_img.src = "images/cold.png";
            break;

        case "March":
        case "April":
        case "May":
            month.textContent = choice;
            content.textContent = "Mild and breezy — spring blossoms and fresh air.";
            weather_img.src = "images/spring.png";
            break;

        case "June":
        case "July":
        case "August":
            month.textContent = choice;
            content.textContent = "Hot and sunny — summer days full of warmth.";
            weather_img.src = "images/summer.png";
            break;

        case "September":
        case "October":
        case "November":
            month.textContent = choice;
            content.textContent = "Cool and crisp — autumn leaves and cozy evenings.";
            weather_img.src = "images/fall.jpg";
            break;

        default:
                }
}

window.onload = function() {
    monthInput.value = current_month;
    displayMonth();
};
