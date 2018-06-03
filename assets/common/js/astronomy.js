$("document").ready(function() {
    var long = -77.3;
    var lat = 33.8;
    var datetime = new Date();
    var prefTimeFormat = "HH:mm:ss"; //for moment.js
    
    var sunTimes = SunCalc.getTimes (datetime, lat, long);
    var sunPosition = SunCalc.getPosition (datetime, lat, long)
    var moonPosition = SunCalc.getMoonPosition (datetime, lat, long);
    var moonIllumination = SunCalc.getMoonIllumination (datetime);
    var moonTimes = SunCalc.getMoonTimes (datetime, lat, long);
    
    var targetDom1 = $("#div-astronomy");
    var targetDom2 = $("#div-solar");
    var targetDom3 = $("#div-lunar");
    var html = `
<p>Sunrise: ${ moment(sunTimes.sunrise).format(prefTimeFormat)}</p>
<p>Sunset: ${ moment(sunTimes.sunset).format(prefTimeFormat)}</p>
<p>Solar Noon: ${ moment(sunTimes.solarNoon).format(prefTimeFormat)}</p>
<p>Moon Position: ${moonPosition.distance.toFixed(2)} kilometers</p>
<p>Moon Illumination: ${(moonIllumination.phase*100).toPrecision(4)}% </p>
<p>Moon Rise: ${ moment(moonTimes.rise).format(prefTimeFormat)}</p>
<p>Moon Set: ${ moment(moonTimes.set).format(prefTimeFormat)}</p>
`;
    
    var html2 = `
<p>Morning Astronomical Twilight: ${ moment(sunTimes.nightEnd).format(prefTimeFormat)}</p>
<p>Morning Nautical Twilight: ${ moment(sunTimes.nauticalDawn).format(prefTimeFormat)} </p>
<p>Morning Civil Twilight: ${ moment(sunTimes.dawn).format(prefTimeFormat)}</p>
<p>Sunrise: ${ moment(sunTimes.sunrise).format(prefTimeFormat)}</p>
<p>Sunrise: </p>
<p>Solar Noon: </p>
`;
    targetDom.html(html);
    targetDom2.html(html2);
});
