var fractionOne = {};
fractionOne.numerator = 1;
fractionOne.denomerator = 2;

var fractionAnswer = {};

// Вывод объекта дроби.
function showFraction(obj) {
    return obj.numerator + "/" + obj.denomerator;
}


// Вычисление суммы.
function sum(obj1, obj2) {  
    // TODO: реализовать вычисление суммы.
    return obj1;
}
// Вычисление суммы.
function sum(obj1, obj2) {  
    // TODO: реализовать вычисление вычитания.
    return obj1;
}
// Вычисление суммы.
function sum(obj1, obj2) {  
    // TODO: реализовать вычисление умножения.
    return obj1;
}
// Вычисление суммы.
function sum(obj1, obj2) {  
    // TODO: реализовать вычисление деления.
    return obj1;
}
// Вычисление суммы.
function sum(obj1, obj2) {  
    // TODO: реализовать вычисление сокращения.
    return obj1;
}


// Показать вычисление.
function showCompute(sign) {

    switch (sign) {
        case '+':
            fractionAnswer = sum(fractionOne, fractionOne);
            break;
        case '-':
            // TODO
            break;
        case '*':
            // TODO
            break;
        case '/':
            // TODO
            break;
        case '?????':   // TODO: сокращение дроби.
            // TODO
            break;
    
        default:
            alert("[error] недопустимый знак вычисения!")
            return;
    }
    
    // Выводим формулу и результат вычисления.
    alert(
        showFraction(fractionOne) 
        + " " + sign + " " 
        + showFraction(fractionOne) 
        + " = " 
        + showFraction(fractionAnswer)
        );
}