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

// desktop Thermostat keep the heigth/width ratio
//var cw = $('#circle').width();
//$('#circle').css({
    'height': cw + '%';
});