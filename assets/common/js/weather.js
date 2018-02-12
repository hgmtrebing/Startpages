/**
 * Simple script to display the weather, using simpleWeather.js.
 */


 $("document").ready(function() {
   $.simpleWeather({
     zipcode: "76309",
     woeid: '',
     location: 'Fairfax, VA',
     unit: 'c',
     success: function(weather) {
       //html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
       var html = `
       <p> Weather for ${weather.city}, ${weather.region}, ${weather.country}</p>
       <p> Temperatures - Current: ${weather.temp}&deg ${weather.units.temp}, High: ${weather.high}&deg ${weather.units.temp}, Low: ${weather.low}&deg ${weather.units.temp}</p>
       <p> Conditon: ${weather.currently}</p>
        `
       $("#div-weather").html(html);
     },
     error: function(error) {
       $("#div-weather").html('<p>'+error+'</p>');
     }
   });
 });

 /*IDEAS
  * 1) Create Refresh Button, and last-updated field
  * 2) Create a weather() function, in which the String template is passed in
  * 3) Create a pop-up to set location
  * 4) Create a pop-up to set formatting and output
  */
