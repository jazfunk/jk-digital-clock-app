
// Run function first time
window.onload = function() {
    showCurrentTime(12);
    // Add click event listener for te button
    document.getElementById("btn24hr").addEventListener("click", changeTimeFormat);
}

function showCurrentTime(timeFormat){

    // Fill Array to convert Month (Integer) to Month (String)
    var monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Fill Array to convert Day (Integer) to Day (String)
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']; 

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

    // If 12 hour time format is chosen
    // If 24-hour value is 0, then change value to 12
    // ElseIf 24-hour is greater than 12, then change value to 24-hour value - 12
    // Else retain 24-hour value
    // Else retain 24-hour value
    if (timeFormat == 12) {
        hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);
    } 
    
    // Get current hour, minute, and second; adding a "0" before single digit numbers
    // If hour is less than 10, then affix a leading "0" to maintain 2-Digit values
    // Else hour is already a 2-Digit value
    hour = (hour < 10) ? "0" + hour : hour;
    var min = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
    var sec = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();

    // Determine Am/Pm
    if (timeFormat == 12) {
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

    //var displayTime = setTimeout(function(){ showCurrentTime() }, 1000);
    //setTimeout(function(){ showCurrentTime() }, 1000);
    setTimeout(showCurrentTime, 1000, (timeFormat > 12) ? 24 : 12);
}



function changeTimeFormat(){
    var tF = 0
    // run showCurrentTime() with appropriate argument
    // If time is currently PM, then we are in 12 hour mode, need to switch to 24 hour
    if (document.getElementById("amPmDisplay").Value = "PM") {
        tf = 24;
    } else {
        tf = 12;
    }

   showCurrentTime(tf);
}



