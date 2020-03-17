function showCurrentTime(){

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

    // If 24-hour value is 0, then change value to 12
    // ElseIf 24-hour is greater than 12, then change value to 24-hour value - 12
    // Else retain 24-hour value
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);
    
    // Get current hour, minute, and second; adding a "0" before single digit numbers
    // If hour is less than 10, then affix a leading "0" to maintain 2-Digit values
    // Else hour is already a 2-Digit value
    hour = (hour < 10) ? "0" + hour : hour;
    var min = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
    var sec = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();

    // Determine Am/Pm
    var amOrPM = today.getHours() >= 12 ? "PM" : "AM";

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
                ":" + sec;


                
    //var displayTime = setTimeout(function(){ showCurrentTime() }, 1000);
    //setTimeout(function(){ showCurrentTime() }, 1000);
    setTimeout(showCurrentTime, 1000)
}

// Run function first time
showCurrentTime();

