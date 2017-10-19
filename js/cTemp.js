function changeTemp(sliderID, textbox) {
    var x = document.getElementById(textbox);
    var y = document.getElementById(sliderID);
    x.innerHTML = y.value+" C&deg;";
}

function minTemp() {
    var t = document.getElementById("slider").value;
    if (t > 10) {
        t=t-0.5;   
        document.getElementById("slider").value=t;
        document.getElementById("cTemp").innerHTML=t+" C&deg;";           
    } 
}

function plusTemp() {
    var t = document.getElementById("slider").value;
    if (t < 30) {
        t=t-(-0.5);   
        document.getElementById("slider").value=t;
        document.getElementById("cTemp").innerHTML=t+" C&deg;";           
    } 
}