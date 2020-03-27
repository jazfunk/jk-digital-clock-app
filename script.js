let isMilitaryTime = false;

document.getElementById("btn24hr").value = isMilitaryTime === false
    ? "Switch to 24-Hour Format" 
    : "Switch to 12-Hour Format";

window.onload = function() {
  showCurrentTime();
  setInterval(showCurrentTime, 1000);
  document.getElementById("btn24hr").addEventListener("click", function(e) {
    isMilitaryTime = !isMilitaryTime;
    showCurrentTime();
    document.getElementById("btn24hr").value = isMilitaryTime
      ? "Switch to 12-Hour Format"
      : "Switch to 24-Hour Format";
  });
}

function showCurrentTime(){
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
    const today = new Date();   
    const day = daysOfWeek[today.getDay()];
    const month = monthsOfYear[today.getMonth()];
    const date = today.getDate();    
    let hour = today.getHours();
    if (isMilitaryTime === false) {
        hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);
    } 
    hour = addLeadingZero(hour);
    const minutes = addLeadingZero(today.getMinutes());
    const seconds = addLeadingZero(today.getSeconds());
    if (isMilitaryTime === false) {
        document.getElementById("am-pm-display").innerText = today.getHours() >= 12 ? "PM" : "AM";
    } else {
      document.getElementById("am-pm-display").innerText = "24";
    }
    document.getElementById("day-of-week-and-date").innerText = `${day}, ${month} ${date}`;               
    document.getElementById("clock-display").innerText = `${hour} : ${minutes}`;
    document.getElementById("seconds-display").innerText =`: ${seconds}`;
}

function addLeadingZero(time) {    
    return time < 10 ? '0' + time : time;
}









