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
var monDay = document.getElementById("monDay");
var monNight = document.getElementById("monNight");
var monSwitch = document.getElementById("thuSwitch");

var tueDay = document.getElementById("tueDay");
var tueNight = document.getElementById("tueNight");
var tueSwitch = document.getElementById("thuSwitch");

var wedDay = document.getElementById("wedDay");
var wedNight = document.getElementById("wedNight");
var wedSwitch = document.getElementById("thuSwitch");

var thuDay = document.getElementById("thuDay");
var thuNight = document.getElementById("thuNight");
var thuSwitch = document.getElementById("thuSwitch");

var friDay = document.getElementById("friDay");
var friNight = document.getElementById("friNight");
var friSwitch = document.getElementById("thuSwitch");

var satDay = document.getElementById("satDay");
var satNight = document.getElementById("satNight");
var satSwitch = document.getElementById("thuSwitch");

var sunDay = document.getElementById("sunDay");
var sunNight = document.getElementById("sunNight");
var sunSwitch = document.getElementById("thuSwitch");
