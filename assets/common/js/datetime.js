//Perhaps in the future, I will turn this into a standalone widget...
//Which can easily be injected into other websites/projects
var dateTimeFormat = "HH:mm:ss [<br>] MMMM DD, YYYY";
var target = "#div-datetime";
var updateInterval = 1000;

function displayDateTime () {
  $(target).html(moment().format(dateTimeFormat));
}

window.setInterval(displayDateTime, updateInterval);
