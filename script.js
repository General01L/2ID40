// Temperature sliders
var sliderDay = document.getElementById("myDay");
var outputDay = document.getElementById("day");
outputDay.innerHTML = sliderDay.value;

sliderDay.oninput = function() {
    outputDay.innerHTML = this.value;
}

var sliderNight = document.getElementById("myNight");
var outputNight = document.getElementById("night");
outputNight.innerHTML = sliderNight.value;

sliderNight.oninput = function() {
    outputNight.innerHTML = this.value;
}

var sliderOverride = document.getElementById("myOverride");
var outputOverride = document.getElementById("override");
outputOverride.innerHTML = sliderOverride.value;

sliderOverride.oninput = function() {
    outputOverride.innerHTML = this.value;
}

// Weekly schedule

var dayNumber = new Date().getDay(); // day of the week in numbers (1-7)



// Days, getting values from schedule.html
var monDay = document.getElementById("monDay").value;
var monNight = document.getElementById("monNight").value;
var monSwitch = document.getElementById("thuSwitch").value;

var tueDay = document.getElementById("tueDay").value;
var tueNight = document.getElementById("tueNight").value;
var tueSwitch = document.getElementById("thuSwitch").value;

var wedDay = document.getElementById("wedDay").value;
var wedNight = document.getElementById("wedNight").value;
var wedSwitch = document.getElementById("thuSwitch").value;

var thuDay = document.getElementById("thuDay").value;
var thuNight = document.getElementById("thuNight").value;
var thuSwitch = document.getElementById("thuSwitch").value;

var friDay = document.getElementById("friDay").value;
var friNight = document.getElementById("friNight").value;
var friSwitch = document.getElementById("thuSwitch").value;

var satDay = document.getElementById("satDay").value;
var satNight = document.getElementById("satNight").value;
var satSwitch = document.getElementById("thuSwitch").value;

var sunDay = document.getElementById("sunDay").value;
var sunNight = document.getElementById("sunNight").value;
var sunSwitch = document.getElementById("thuSwitch").value;
