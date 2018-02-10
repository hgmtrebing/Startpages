/* Dependencies for this script are JQuery and MomentJS
 * This script formats the current date and time (according to your specifications)...
 * ...and outputs them into the desired DOM element. Three variables control the output:
 *
 * dateTimeFormat - A string which controls how the date/time will be formatted. The String should contain formatting symbols (described in MomentJS), and valid HTML (in square brackets)
 * target - The DOM element where the date/time is to be inserted. May be a selector or a reference to the DOM element itself.
 * updateInterval - an Integer describing the number of milliseconds when the date/time should be updated
 */

var dateTimeFormat = "HH:mm:ss [<br>] dddd, MMMM DD, YYYY";
var target = "#div-datetime";
var updateInterval = 1000;

$("document").ready(function() {

  function displayDateTime () {
    $(target).html(moment().format(dateTimeFormat));
  }
  window.setInterval(displayDateTime, updateInterval);
  
});
