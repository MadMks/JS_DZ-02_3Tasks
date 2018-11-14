var car = {
    manufacturer: "BMW",
    model: "M5",
    year: 2000,
    averageSpeed: 70
};

function showCarInfo(obj) {
    var str = "Производитель: " + obj.manufacturer + "\n"
        + "Модель: " + obj.model + "\n"
        + "Год выпуска: " + obj.year + "\n"
        + "Средняя скорость: " + obj.averageSpeed;
    alert(str);
}

showCarInfo(car);