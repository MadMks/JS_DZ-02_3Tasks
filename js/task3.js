var time = {
    hh : 20,
    mm : 30,
    ss : 45
};


function showTime() {
    alert(time.hh + ":" + time.mm + ":" 
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
        // TODO: изменить минуты в зависимости от секунд.
    }

    time.ss += second;
}

function setMinute(minute) {
    time.mm += minute;
}

function changeSeconds() {
    var ss = prompt("Введите кол-во секунд для изменения времени", "");

    setSecond(+ss);

    showTime();
}

function changeMinutes() {
    
}