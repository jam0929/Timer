var Timer = function(config) {
    var _config = config ? config : {
        initialTime : 60 * 60 * 1000,
        interval : 1000
    };

    var currentTime = _config.initialTime;

    setInterval(function() {
        document.getElementsByClassName('timer')[0].innerHTML = msToTime(currentTime);
        currentTime = currentTime - _config.interval;
    }, 1000);

    function msToTime(ms) {
        var milliseconds = parseInt((ms%1000)/100)
            , seconds = parseInt((ms/1000)%60)
            , minutes = parseInt((ms/(1000*60))%60)
            , hours = parseInt((ms/(1000*60*60))%24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds;
    }
    
    function codeGuruTest() {
        var a = 123;
        var b = 456;
        
        console.log(a);
    }
};
