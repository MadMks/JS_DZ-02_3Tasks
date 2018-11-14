var car = {
    manufacturer: "BMW",
    model: "M5",
    year: 2000,
    averageSpeed: 70
};

function showCarInfo(obj) {
    var str = "Производитель: " + obj.manufacturer + "\n"
        + "Модель: " + obj.model + "\n"
        + "Год выпуска: " + obj.year + " г\n"
        + "Средняя скорость: " + obj.averageSpeed + " км/ч";
    alert(str);
}

// showCarInfo(car);

function showTravelTime() {

    var length = prompt("Введите расстояние (км)", "");

    var time = computeTravelTime(length)

    alert("Средняя скорость: " + car.averageSpeed + " км/ч\n"
        + "Расстояние: " + length + " км\n"
        + "Время для преодоления: " + time + " ч");
}

function computeTravelTime(length) {
    return Math.round(
        (length / car.averageSpeed) * 100
        ) / 100;
}

// TODO каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.