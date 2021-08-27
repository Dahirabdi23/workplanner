var date = moment().format("dddd, MMM Do");
$("#currentDay").text(date);
var hour = moment().format("HH");
var timeblocks = $(".time-block")
//console.log(hour)
console.log(timeblock);
for (let i = 0; i < timeblocks.length; i++) {
    var timeblock = timeblocks[i];
    console.log(timeblock.id)
    if (parseInt(timeblock.id) < hour) {
        timeblock.setAttribute("class", "past");
    }
    else if (parseInt(timeblock.id) > hour) {
        timeblock.setAttribute("class", "future");
    }
    else
    timeblock.setAttribute("class", "present");
}

function name(params) {
    $()
}