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
         
         $("#current-weather").html("Weather Right Now: "+weather.temp+"&deg "+weather.units.temp +", with winds bearing " + weather.wind.direction+" at "+ weather.wind.speed + " "+ weather.units.speed+". Humidity at "+weather.humidity+"%, pressure at "+weather.pressure+" "+weather.units.pressure);
         
         //Forecast Column Headers (Dates)
         $("#date-today").html(weather.forecast[0].day + ", " + weather.forecast[0].date);
         $("#date-tomorrow").html(weather.forecast[1].day + ", " + weather.forecast[1].date);
         $("#date-day-after-tomorrow").html(weather.forecast[2].day + ", " + weather.forecast[2].date);
         
         //High Forecast
         $("#high-today").html(weather.high+"&deg "+weather.units.temp);
         $("#high-tomorrow").html(weather.forecast[1].high+"&deg "+weather.units.temp);
         $("#high-day-after-tomorrow").html(weather.forecast[2].high+"&deg "+weather.units.temp);
         
         //Low Forecast
         $("#low-today").html(weather.low+"&deg "+weather.units.temp);
         $("#low-tomorrow").html(weather.forecast[1].low+"&deg "+weather.units.temp);
         $("#low-day-after-tomorrow").html(weather.forecast[2].low+"&deg "+weather.units.temp);
         
         //Condition Forecast
         $("#condition-today").html(weather.text);
         $("#condition-tomorrow").html(weather.forecast[1].text);
         $("#condition-day-after-tomorrow").html(weather.forecast[2].text);
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
