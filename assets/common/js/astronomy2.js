$("document").ready(function() {
    var long = -77.3064;
    var lat = 38.8462;
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
    
    $("#nadir").html(moment(sunTimes.nadir).format(prefTimeFormat));
    $("#solar-noon").html(moment(sunTimes.solarNoon).format(prefTimeFormat));
    $("#morning-astronomical-twilight").html(moment(sunTimes.nightEnd).format(prefTimeFormat));
    $("#morning-nautical-twilight").html(moment(sunTimes.nauticalDawn).format(prefTimeFormat));
    $("#morning-civil-twilight").html(moment(sunTimes.dawn).format(prefTimeFormat));
    $("#sunrise-start").html(moment(sunTimes.sunrise).format(prefTimeFormat));
    $("#sunrise-end").html(moment(sunTimes.sunriseEnd).format(prefTimeFormat));
    $("#sunset-start").html(moment(sunTimes.sunsetStart).format(prefTimeFormat));
    $("#evening-civil-twilight").html(moment(sunTimes.sunset).format(prefTimeFormat));
    $("#evening-nautical-twilight").html(moment(sunTimes.dusk).format(prefTimeFormat));
    $("#evening-astronomical-twilight").html(moment(sunTimes.nauticalDusk).format(prefTimeFormat));
    $("#night").html(moment(sunTimes.night).format(prefTimeFormat));
    
    $("#moon-illumination").html((Math.round(moonIllumination.fraction *10000)/100) + "%"); 
    $("#moon-phase").html(moonPhase);
    $("#moon-rise").html(moment(moonTimes.rise).format(prefDateTimeFormat));
    $("#moon-set").html(moment(moonTimes.set).format(prefDateTimeFormat));
    $("#moon-distance").html(Number(Math.round(moonPosition.distance*100)/100).toLocaleString() + " kilometers");

 
    
});
