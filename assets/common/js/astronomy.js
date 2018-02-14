
$("document").ready(function() {
    var long = -77.3;
    var lat = 33.8;
    var datetime = new Date();
    
    var sunTimes = SunCalc.getTimes (datetime, lat, long);
    var sunPosition = SunCalc.getPosition (datetime, lat, long)
    var moonPosition = SunCalc.getMoonPosition (datetime, lat, long);
    var moonIllumination = SunCalc.getMoonIllumination (datetime);
    var moonTimes = SunCalc.getMoonTimes (datetime, lat, long);
    
    var targetDom = $("#div-astronomy");
    var html = `
<p>Sunrise: ${sunTimes.sunrise}</p>
<p>Sunset: ${sunTimes.sunset}</p>
<p>Solar Noon: ${sunTimes.solarNoon}</p>
<p>Moon Position: ${moonPosition.distance} kilometers</p>
<p>Moon Phase: ${moonIllumination.phase} </p>
<p>Moon Rise: ${moonTimes.rise}</p>
<p>Moon Set: ${moonTimes.set}</p>
`;
    
    targetDom.html(html);
});