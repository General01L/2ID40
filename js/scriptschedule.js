// Weekly schedule

// shows all the values in textboxes when the slider changes
function showValue() {
    var hours0 = Math.floor(document.getElementById("sliderTime0").value);
    var mins0 = (document.getElementById("sliderTime0").value * 60) % 60;
    
    hours0 = ("0" + hours0).slice(-2);
    mins0 = ("0" + mins0).slice(-2);
    
    document.getElementById("textTime0").value = hours0 + ":" + mins0;
    
    // ----------
    
    var hours1 = Math.floor(document.getElementById("sliderTime1").value);
    var mins1 = (document.getElementById("sliderTime1").value * 60) % 60;
    
    hours1 = ("0" + hours1).slice(-2);
    mins1 = ("0" + mins1).slice(-2);
    
    document.getElementById("textTime1").value = hours1 + ":" + mins1;
    
    // ----------
    
    var hours2 = Math.floor(document.getElementById("sliderTime2").value);
    var mins2 = (document.getElementById("sliderTime2").value * 60) % 60;
    
    hours2 = ("0" + hours2).slice(-2);
    mins2 = ("0" + mins2).slice(-2);
    
    document.getElementById("textTime2").value = hours2 + ":" + mins2;
    
    // ----------
    
    var hours3 = Math.floor(document.getElementById("sliderTime3").value);
    var mins3 = (document.getElementById("sliderTime3").value * 60) % 60;
    
    hours3 = ("0" + hours3).slice(-2);
    mins3 = ("0" + mins3).slice(-2);
    
    document.getElementById("textTime3").value = hours3 + ":" + mins3;
    
    // ----------
    
    var hours4 = Math.floor(document.getElementById("sliderTime4").value);
    var mins4 = (document.getElementById("sliderTime4").value * 60) % 60;
    
    hours4 = ("0" + hours4).slice(-2);
    mins4 = ("0" + mins4).slice(-2);
    
    document.getElementById("textTime4").value = hours4 + ":" + mins4;
    
    // ----------
    
    var hours5 = Math.floor(document.getElementById("sliderTime5").value);
    var mins5 = (document.getElementById("sliderTime5").value * 60) % 60;
    
    hours5 = ("0" + hours5).slice(-2);
    mins5 = ("0" + mins5).slice(-2);
    
    document.getElementById("textTime5").value = hours5 + ":" + mins5;
    
    // ----------
    
    var hours6 = Math.floor(document.getElementById("sliderTime6").value);
    var mins6 = (document.getElementById("sliderTime6").value * 60) % 60;
    
    hours6 = ("0" + hours6).slice(-2);
    mins6 = ("0" + mins6).slice(-2);
    
    document.getElementById("textTime6").value = hours6 + ":" + mins6;
    
    // ----------
    
    var hours7 = Math.floor(document.getElementById("sliderTime7").value);
    var mins7 = (document.getElementById("sliderTime7").value * 60) % 60;
    
    hours7 = ("0" + hours7).slice(-2);
    mins7 = ("0" + mins7).slice(-2);
    
    document.getElementById("textTime7").value = hours7 + ":" + mins7;
    
    // ----------
    
    var hours8 = Math.floor(document.getElementById("sliderTime8").value);
    var mins8 = (document.getElementById("sliderTime8").value * 60) % 60;
    
    hours8 = ("0" + hours8).slice(-2);
    mins8 = ("0" + mins8).slice(-2);
    
    document.getElementById("textTime8").value = hours8 + ":" + mins8;
    
    // ----------
    
    var hours9 = Math.floor(document.getElementById("sliderTime9").value);
    var mins9 = (document.getElementById("sliderTime9").value * 60) % 60;
    
    hours9 = ("0" + hours9).slice(-2);
    mins9 = ("0" + mins9).slice(-2);
    
    document.getElementById("textTime9").value = hours9 + ":" + mins9;
    
}

// change sliders accordingly to the textbox values
function setSliders(){
    var time0 = (document.getElementById("textTime0").value).replace(":", "").replace(".", "");
    
    if (time0.length == 4) {
        var hours = parseInt(time0.substring(0, 2));
        var mins = parseInt(time0.substring(2, 4))/60;
        
        document.getElementById("sliderTime0").value = hours + mins;
    } else if (time0.length == 3) {
        var hours = parseInt(time0.substring(0, 1));
        var mins = parseInt(time0.substring(1, 3))/60;
        
        document.getElementById("sliderTime0").value = hours + mins;
    } else if (time0.length < 3 && time0.length > 0) {
        var hours = time0;
        
        document.getElementById("sliderTime0").value = hours;
    }

    // ----------
    
    var time1 = (document.getElementById("textTime1").value).replace(":", "").replace(".", "");
    
    if (time1.length == 4) {
        var hours = parseInt(time1.substring(0, 2));
        var mins = parseInt(time1.substring(2, 4))/60;
        
        document.getElementById("sliderTime1").value = hours + mins;
    } else if (time1.length == 3) {
        var hours = parseInt(time1.substring(0, 1));
        var mins = parseInt(time1.substring(1, 3))/60;
        
        document.getElementById("sliderTime1").value = hours + mins;
    } else if (time1.length < 3 && time1.length > 0) {
        var hours = time1;
        
        document.getElementById("sliderTime1").value = hours;
    }

    // ----------
    
    showValue();
}

// --------

var switch0 = document.getElementById("switch0");
var sliderTime0 = document.getElementById("sliderTime0");
var textTime0 = document.getElementById("textTime0");

var switch1 = document.getElementById("switch1");
var sliderTime1 = document.getElementById("sliderTime1");
var textTime1 = document.getElementById("textTime1");

var switch2 = document.getElementById("switch2");
var sliderTime2 = document.getElementById("sliderTime2");
var textTime2 = document.getElementById("textTime2");

var switch3 = document.getElementById("switch3");
var sliderTime3 = document.getElementById("sliderTime3");
var textTime3 = document.getElementById("textTime3");

var switch4 = document.getElementById("switch4");
var sliderTime4 = document.getElementById("sliderTime4");
var textTime4 = document.getElementById("textTime4");

var switch5 = document.getElementById("switch5");
var sliderTime5 = document.getElementById("sliderTime5");
var textTime5 = document.getElementById("textTime5");

var switch6 = document.getElementById("switch6");
var sliderTime6 = document.getElementById("sliderTime6");
var textTime6 = document.getElementById("textTime6");

var switch7 = document.getElementById("switch7");
var sliderTime7 = document.getElementById("sliderTime7");
var textTime7 = document.getElementById("textTime7");

var switch8 = document.getElementById("switch8");
var sliderTime8 = document.getElementById("sliderTime8");
var textTime8 = document.getElementById("textTime8");

var switch9 = document.getElementById("switch9");
var sliderTime9 = document.getElementById("sliderTime9");
var textTime9 = document.getElementById("textTime9");


//Code for getting all data from the server

var ServerUrl = 'http://wwwis.win.tue.nl/2id40-ws/04';
//Backup server
//var ServerUrl = 'http://pcwin889.win.tue.nl/2id40-ws/04';

Type = {
    Day : 'day',
    Night : 'night'
};

Days = {
    Monday : 'Monday',
    Tuesday : 'Tuesday',
    Wednesday : 'Wednesday',
    Thursday : 'Thursday',
    Friday : 'Friday',
    Saturday : 'Saturday',
    Sunday : 'Sunday'
};

var MinTemperature = parseFloat(5.0);
var MaxTemperature = parseFloat(30.0);
var MaxSwitches = 5;

var Time;
var CurrentDay;
var DayTemperature;
var NightTemperature;
var CurrentTemperature;
var TargetTemperature;
var ProgramState;

var Program = {};
Program[Days.Monday]    = [];
Program[Days.Tuesday]   = [];
Program[Days.Wednesday] = [];
Program[Days.Thursday]  = [];
Program[Days.Friday]    = [];
Program[Days.Saturday]  = [];
Program[Days.Sunday]    = [];

/* Retreive day program
*/
function getProgram(day) {
    return Program[day];
}

/* Sorts the heating periods (the periods when the heating is on) and merges overlapping ones
*/
function sortMergeProgram(day) {
    var program = getProgram(day);
    program.sort(function(a, b){return parseTime(a[0])-parseTime(b[0])});
    for (var i = 0; i < program.length - 1; i++) {
        if (parseTime(program[i][1]) >= parseTime(program[i+1][0])) {
            var start = (program[i][0]);
            var end = (parseTime(program[i][1]) > parseTime(program[i+1][1])) ? program[i][1] : program[i+1][1];
            program.splice(i, 2);
            program.push([start, end]);
            sortMergeProgram(day);
            break;
        }
    }
}

/* Retrieves all data from the server except for weekProgram
*/
function get(attribute_name, xml_tag) {
    return requestData(
    "/"+attribute_name,
    function(data) {
        return $(data).find(xml_tag).text();
    }
    );
}

/* Retrieves the week program
*/
function getWeekProgram() {
    return requestData(
    '/weekProgram',
    function(data) {
        $(data).find('day').each(function() {
            var day = $(this).attr('name');
            Program[day] = [];
            $(this).find('switch').each(function() {
                if ($(this).attr('state') == 'on') {
                    if ($(this).attr('type') == Type.Day) {
                        getProgram(day).push([$(this).text(), '00:00']);
                        } else {
                        getProgram(day)[getProgram(day).length - 1][1] = $(this).text();
                    }
                }
            })
        });
        return Program;
    }
    );
}

/* Uploads all data to the server except for currentTemperature and weekProgram
*/
function put(attribute_name, xml_tag, value){
    uploadData("/"+attribute_name, "<" + xml_tag + ">"+ value + "</" + xml_tag + ">");
}

function requestData(address, func) {
    var result;
    $.ajax({
        type: "get",
        url: ServerUrl + address,
        dataType: "xml",
        async: false,
        success: function(data) {
            result = func(data);
        }
    });
    return result;
}

/* Uploads the week program
*/
function setWeekProgram() {
    var doc = document.implementation.createDocument(null, null, null);
    var program = doc.createElement('week_program');
    program.setAttribute('state', ProgramState ? 'on' : 'off');
    for (var key in Program) {
        var day = doc.createElement('day');
        day.setAttribute('name', key);
        
        var daySwitches = [];
        var nightSwitches = [];
        
        var i, text, sw;
        var periods = getProgram(key);
        for (i = 0; i < periods.length; i++ ) {
            daySwitches.push(periods[i][0]);
            nightSwitches.push(periods[i][1]);
        }
        
        for (i = 0; i < MaxSwitches; i++) {
            sw = doc.createElement('switch');
            sw.setAttribute('type', Type.Day);
            
            if (i < daySwitches.length) {
                sw.setAttribute('state', 'on');
                text = doc.createTextNode(daySwitches[i]);
                } else {
                sw.setAttribute('state', 'off');
                text = doc.createTextNode('00:00');
            }
            sw.appendChild(text);
            day.appendChild(sw);
        }
        
        for (i = 0; i < MaxSwitches; i++ ) {
            sw = doc.createElement('switch');
            sw.setAttribute('type', Type.Night);
            
            if (i < nightSwitches.length) {
                sw.setAttribute('state', 'on');
                text = doc.createTextNode(nightSwitches[i]);
                } else {
                sw.setAttribute('state', 'off');
                text = doc.createTextNode('00:00');
            }
            sw.appendChild(text);
            day.appendChild(sw);
        }
        program.appendChild(day);
    }
    doc.appendChild(program);
    uploadData('/weekProgram', (new XMLSerializer()).serializeToString(doc));
}

/* Creates the default week program
*/
function setDefault() {
    var doc = document.implementation.createDocument(null, null, null);
    var program = doc.createElement('week_program');
    program.setAttribute('state', ProgramState ? 'on' : 'off');
    for (var key in Program) {
        var day = doc.createElement('day');
        day.setAttribute('name', key);
        
        var daySwitches = [];
        var nightSwitches = [];
        
        var i, text, sw;
        
        for (i = 0; i < MaxSwitches; i++) {
            sw = doc.createElement('switch');
            sw.setAttribute('type', Type.Night);
            sw.setAttribute('state', 'off');
            text = doc.createTextNode('00:00');
            sw.appendChild(text);
            day.appendChild(sw);
        }
        
        for (i = 0; i < MaxSwitches; i++) {
            sw = doc.createElement('switch');
            sw.setAttribute('type', Type.Day);
            sw.setAttribute('state', 'off');
            text = doc.createTextNode('00:00');
            sw.appendChild(text);
            day.appendChild(sw);
        }
        
        program.appendChild(day);
    }
    doc.appendChild(program);
    uploadData('/weekProgram', (new XMLSerializer()).serializeToString(doc));
}

function uploadData(address, xml) {
    $.ajax({
        type: "put",
        url: ServerUrl + address,
        contentType: 'application/xml',
        data: xml,
        async: false
    });
}

function parseTime(t) {
    return parseFloat(t.substr(0,2)) + parseFloat(t.substr(3,2))/60;
}

/* Adds a heating period for a specific day
*/
function addPeriod(day, start, end) {
    var program = getWeekProgram()[day];
    program.push([start, end]);
    sortMergeProgram(day);
    setWeekProgram();
}

/* Removes a heating period from a specific day.
    idx is the idex of the period with values from 0 to 4
*/
function removePeriod(day, idx) {
    var program = getWeekProgram()[day];
    var start = program[idx][0];
    var end = program[idx][1];
    program.splice(idx,1);
    setWeekProgram();
}

/* Checks whether the temperature is within the range [5.0,30.0]
*/
function inTemperatureBoundaries(temp) {
    temp = parseFloat(temp);
    return ( temp >= MinTemperature && temp <= MaxTemperature);
}

function getAll() {
    CurrentDay = get("day", "current_day");
    
    var todayDay = document.getElementById("dayNow");
    if (todayDay != null) {
        todayDay.innerHTML = CurrentDay;
    }
    
    var scheduleStart = document.getElementById("scheduleDay"); // variable in schedule
    if (scheduleStart != null) {
        scheduleStart.innerHTML = CurrentDay;
    }

    Time = get("time", "time");
    document.getElementById("timeNow").innerHTML = Time;
    CurrentTemperature = get("currentTemperature", "current_temperature");
    document.getElementById("tempNow").innerHTML = CurrentTemperature;
}

$(document).ready(getAll);
