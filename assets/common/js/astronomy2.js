$("document").ready(function() {
    var long = -77.3;
    var lat = 33.8;
    var datetime = new Date();
    var prefTimeFormat = "HH:mm:ss"; //for moment.js
    var prefDateTimeFormat = "MMMM Do YYYY, HH:mm:ss";
    
    var sunTimes = SunCalc.getTimes (datetime, lat, long);
    var sunPosition = SunCalc.getPosition (datetime, lat, long)
    var moonPosition = SunCalc.getMoonPosition (datetime, lat, long);
    var moonIllumination = SunCalc.getMoonIllumination (datetime);
    var moonTimes = SunCalc.getMoonTimes (datetime, lat, long);
    
    var moonPhase = moonIllumination.phase;
    if (moonPhase >= 0 && moonPhase <= .25) {
        moonPhase = "Waxing Crescent";
    } else if (moonPhase > .25 && moonPhase <= .5) {
        moonPhase = "Waxing Gibbous";
    } else if (moonPhase > .5 && moonPhase <= .75) {
        moonPhase = "Waning Gibbous";
    } else if (moonPhase > .75 && moonPhase <= 1) {
        moonPhase = "Waning Crescent";
    }
    
    var targetDom2 = $("#div-solar");
    var targetDom3 = $("#div-lunar");
    
    var html2 = `
        <div class="row" id="solar-header">
            <div class="col">Solar Morning</div>
            <div class="col">Solar Evening</div>
        </div>
        <div class="row" id="zenith">
            <div class="col">Nadir: ${ moment(sunTimes.nadir).format(prefTimeFormat)}</div>
            <div class="col">Solar Noon: ${ moment(sunTimes.solarNoon).format(prefTimeFormat)}</div>
        </div>
<p>Morning Astronomical Twilight: ${ moment(sunTimes.nightEnd).format(prefTimeFormat)}</p>
<p>Morning Nautical Twilight: ${ moment(sunTimes.nauticalDawn).format(prefTimeFormat)} </p>
<p>Morning Civil Twilight: ${ moment(sunTimes.dawn).format(prefTimeFormat)}</p>
<p>Sunrise Start: ${ moment(sunTimes.sunrise).format(prefTimeFormat)}</p>
<p>Sunrise End: ${ moment(sunTimes.sunriseEnd).format(prefTimeFormat)}</p>
<p>Sunset Start: ${ moment(sunTimes.sunsetStart).format(prefTimeFormat)}</p>
<p>Evening Civil Twilight: ${ moment(sunTimes.sunset).format(prefTimeFormat)}</p>
<p>Evening Nautical Twilight: ${ moment(sunTimes.dusk).format(prefTimeFormat)}</p>
<p>Evening Astronomical Twilight: ${ moment(sunTimes.nauticalDusk).format(prefTimeFormat)}</p>
<p>Night: ${ moment(sunTimes.night).format(prefTimeFormat)}</p>
`;
    
    var html3 = `
<p>Moon Illumination: ${ (Math.round(moonIllumination.fraction *10000)/100) + "%"}</p> 
<p>Moon Phase: ${ moonPhase}</p>
<p>Moon Rise: ${moment(moonTimes.rise).format(prefDateTimeFormat)}</p>
<p>Moon Set: ${moment(moonTimes.set).format(prefDateTimeFormat)}</p>
<p>Moon Distance: ${Number(Math.round(moonPosition.distance*100)/100).toLocaleString() + " kilometers"}</p>
`;
    
    targetDom2.html(html2);
    targetDom3.html(html3);
});
