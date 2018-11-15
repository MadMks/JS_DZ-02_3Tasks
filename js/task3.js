var time = {
    hh : 20,
    mm : 30,
    ss : 45
};


function showTime() {
    alert(time.hh 
        + ":"
        + ('0' + time.mm).slice(-2)
        + ":" 
        + ('0' + time.ss).slice(-2)
        );
}

function setSecond(second) {

    // Проверяем нужно ли менять минуты.
    if (time.ss + second > 59) {
        // узнать сколько минут
        var mm = Math.floor(second / 60);

        // и сколько секунд оставить
        if (mm == 0) {
            setMinute(1);
            second = (time.ss + second) - 60;
            time.ss = 0;
        }
        else{
            setMinute(mm);
            second = (time.ss + second) - (mm * 60);
            time.ss = 0;
        }
    }

    // Меняем секунды.
    time.ss += second;
}

function setMinute(minute) {

    // Проверяем нужно ли менять часы.
    if (time.mm + minute > 59) {
        // узнать сколько часов
        var hh = Math.floor(minute / 60);

        // и сколько минут оставить
        if (hh == 0) {
            setHour(1);
            minute = (time.mm + minute) - 60;
            time.mm = 0;
        }
        else{
            setHour(hh);
            minute = (time.mm + minute) - (hh * 60);
            time.mm = 0;
        }
    }

    time.mm += minute;
}

function setHour(hour) {
    // TODO: set hour

    time.hh += hour;
}



function changeSeconds() {
    var ss = prompt("Введите кол-во секунд для изменения времени", "");

    setSecond(+ss);

    showTime();
}

function changeMinutes() {
    var mm = prompt("Введите кол-во минут для изменения времени", "");

    setMinute(+mm);

    showTime();
}

function changeHours() {
    
}