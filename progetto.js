let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

let currentDay = new Date().getDate();

let currentMonthDays = new Date(currentYear, currentMonth + 1, 0).getDate();

let selectedDate = new Date();

function printCalendar() {
 let calendarHTML = "<h1>" + monthNames[currentMonth] + " " + currentYear + "</h1>";

 calendarHTML += "<div class='dayNames'>";
 for (let i = 0; i < dayNames.length; i++) {
    calendarHTML += "<div>" + dayNames[i] + "</div>";
 }
 calendarHTML += "</div>";

 calendarHTML += "<div class='days'>";
 let currentWeekDay = new Date(currentYear, currentMonth, 1).getDay();
 for (let i = 0; i < currentWeekDay; i++) {
    calendarHTML += "<div class='day'></div>";
 }
 for (let i = 1; i <= currentMonthDays; i++) {
    if (i === currentDay) {
      calendarHTML += "<div class='day current'>" + i + "</div>";
    } else {
      calendarHTML += "<div class='day'>" + i + "</div>";
    }
 }
 calendarHTML += "</div>";

 document.getElementById("calendar").innerHTML = calendarHTML;
}

printCalendar();