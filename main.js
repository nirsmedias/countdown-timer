CountDownTimer('08/28/2022 07:30 PM', 'countdown');

function CountDownTimer(dt, id) {
    let end = new Date(dt);
    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;
    let timer;

    function showRemaining() {
        let now = new Date();
        let distance = end - now;
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById(id).innerHTML = 'The event started! Mazal Tov Omri!';
            
            return;
        }
        
        let days = Math.floor(distance / _day);
        let hours = Math.floor((distance % _day) / _hour);
        let minutes = Math.floor((distance % _hour) / _minute);
        let seconds = Math.floor((distance % _minute) / _second);

        document.getElementById(id).innerHTML = days + " : ";
        document.getElementById(id).innerHTML += hours + " : ";
        document.getElementById(id).innerHTML += minutes + " : ";
        document.getElementById(id).innerHTML += seconds + " <br/>";
    }
    showRemaining();
    timer = setInterval(showRemaining, 1000);
}

function hourslettersindication(id) {
    document.getElementById(id).innerHTML = "D ";
    document.getElementById(id).innerHTML += "H ";
    document.getElementById(id).innerHTML += "M ";
    document.getElementById(id).innerHTML += "S";
}

hourslettersindication('countdownletters');
