
// Global Time Format Value
var tFormat = 12

// Set Text to Display while loading
document.getElementById("clockDisplay").innerText = ":";
document.getElementById("dayOfWeekAndDate").innerText = "Loading...";
document.getElementById("amPmDisplay").innerText = "--";
document.getElementById("secondsDisplay").innerText = ":";

// Initialize Button Text based on intializing <tFormat> to 12
document.getElementById("btn24hr").value="Switch to 24-Hour Format"

window.onload = function() {    
    // Set Timer and run function, with appropriate time format
    setTimeout(showCurrentTime, 1000);

    // Add click event listener for te button
    document.getElementById("btn24hr").addEventListener("click", changeTimeFormat);
}

function showCurrentTime(){
    // Fill Array to convert Month (Integer) to Month (String)
    var monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Fill Array to convert Day (Integer) to Day (String)
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
    // Set variable for current Date/Time
    var today = new Date();   

    // Convert Day of Week (Integer) to Day of Week (String)
    var day = today.getDay();
    var strDay = daysOfWeek[day];

    // Convert Month (Integer) to Month (String)
    var month = today.getMonth();    
    var strMonth = monthsOfYear[month];
        
    // Set Day of Month
    var dayDate = today.getDate();

    // Set hour variable
    var hour = today.getHours();

    // Format hour value
    if (tFormat == 12) {
        hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);
    } 
    
    // Add leading zero to hour, min, and sec, if necessary
    hour = (hour < 10) ? "0" + hour : hour;
    var min = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
    var sec = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();

    // Determine Am/Pm
    if (tFormat == 12) {
        var amOrPM = today.getHours() >= 12 ? "PM" : "AM";
    } else {
        var amOrPM = "24";        
    }

    // Set values for div element ID's
    document.getElementById("dayOfWeekAndDate").innerText = 
                strDay + ", " +
                strMonth + " " +
                dayDate;
    document.getElementById("clockDisplay").innerText = 
                hour + " : " +
                min;
    document.getElementById("amPmDisplay").innerText = 
                amOrPM;
    document.getElementById("secondsDisplay").innerText = 
                ": " + sec;

    setTimeout(showCurrentTime, 1000);
}

function changeTimeFormat(){
    // Toggle 12/24
    var btnText = ""
    if (tFormat == 12) {
        tFormat = 24;
        btnText = "Switch to 12-Hour Format"
    } else {
        tFormat = 12;
        btnText = "Switch to 24-Hour Format"
    }
    // Set Button Text
    document.getElementById("btn24hr").value = btnText   
}
