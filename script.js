function showCurrentTime(){

    var monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    
    var today = new Date();
    var day = today.getDay();
    var month = today.getMonth();
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();

    var curWeekDay = daysOfWeek[day]
    var curMonth = monthsOfYear[month]

    var amOrPM = hour >= 12 ? "PM" : "AM";


    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);

    hour = formatDisplayTime(hour);
    min = formatDisplayTime(min);
    sec = formatDisplayTime(sec);

    document.getElementById("dayOfWeekAndDate").innerText = 
                curWeekDay + ", " +
                curMonth + " " +
                day;

     document.getElementById("clockDisplay").innerText = 
                hour + " : " +
                min + " : " +
                sec + " " +
                amOrPM;
                

    var displayTime = setTimeout(function(){ showCurrentTime() }, 1000);




}

showCurrentTime();


function formatDisplayTime(x){
    if (x < 10) {
        return "0" + x;
    }
    else {
        return x;
    }

}