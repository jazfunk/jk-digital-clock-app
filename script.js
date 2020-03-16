function showCurrentTime(){

    var monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var daysOfMonth = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    
    var today = new Date();
    var day = today.getDay();
    var month = today.getMonth();
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();

    hour = formatDisplayTime(hour);
    min = formatDisplayTime(min);
    sec = formatDisplayTime(sec);

    document.getElementById("clockDisplay").innerText = 
                hour + " : " +
                min + " : " +
                sec;
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