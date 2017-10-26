// Weekly schedule

// Days, getting values from schedule.html
var switch0 = document.getElementById("switch0");
var switchTime0 = document.getElementById("switchTime0");
var switchTime00 = document.getElementById("switchTime00");

var switch1 = document.getElementById("switch1");
var switchTime1 = document.getElementById("switchTime1");
var switchTime11 = document.getElementById("switchTime11");

var switch2 = document.getElementById("switch2");
var switchTime2 = document.getElementById("switchTime2");
var switchTime22 = document.getElementById("switchTime22");

var switch3 = document.getElementById("switch3");
var switchTime3 = document.getElementById("switchTime3");
var switchTime33 = document.getElementById("switchTime33");

var switch4 = document.getElementById("switch4");
var switchTime4 = document.getElementById("switchTime4");
var switchTime44 = document.getElementById("switchTime44");

var switch5 = document.getElementById("switch5");
var switchTime5 = document.getElementById("switchTime5");
var switchTime55 = document.getElementById("switchTime55");

var switch6 = document.getElementById("switch6");
var switchTime6 = document.getElementById("switchTime6");
var switchTime66 = document.getElementById("switchTime66");

var switch7 = document.getElementById("switch7");
var switchTime7 = document.getElementById("switchTime7");
var switchTime77 = document.getElementById("switchTime77");

var switch8 = document.getElementById("switch8");
var switchTime8 = document.getElementById("switchTime8");
var switchTime88 = document.getElementById("switchTime88");

var switch9 = document.getElementById("switch9");
var switchTime9 = document.getElementById("switchTime9");
var switchTime99 = document.getElementById("switchTime99");

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
  
  var scheduleStart = document.getElementById("dayNow2"); // variable in schedule
  if (scheduleStart != null) {
    scheduleStart.innerHTML = CurrentDay;
  }
  
  
  Time = get("time", "time");
  document.getElementById("timeNow").innerHTML = Time;
  CurrentTemperature = get("currentTemperature", "current_temperature");
  document.getElementById("tempNow").innerHTML = CurrentTemperature;
}

$(document).ready(getAll);
