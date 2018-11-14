var fractionOne = {};
fractionOne.numerator = 1;
fractionOne.denomerator = 2;

var fractionAnswer = {};

// Вывод объекта дроби.
function showFraction(obj) {
    return obj.numerator + "/" + obj.denomerator;
}
// Вычисление суммы.
function sum(obj1, obj2) {  // TODO реализовать вычисление.
    return obj1;
}
// Показать вычисление суммы.
function showComputeSum() {
    fractionAnswer = sum(fractionOne, fractionOne);

    alert(
        showFraction(fractionOne) 
        + " + " 
        + showFraction(fractionOne) 
        + " = " 
        + showFraction(fractionAnswer)
        );
}