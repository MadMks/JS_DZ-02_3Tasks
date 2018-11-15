var fractionOne = {};
fractionOne.numerator = 2;
fractionOne.denomerator = 4;

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
function reduction(obj) {  
    // TODO: реализовать вычисление сокращения.
    var nod = 1;	// наибольший общий делитель (Нод)
    var tempFract = {
        numerator : obj.numerator,
        denomerator : obj.denomerator
    };
    for (var i = tempFract.numerator; i > 1; i--) {		// проверяем начиная с числителя, до 1
        if ((tempFract.numerator % i == 0) &&		// если числитель и знаменатель деляться на i без остатка,
            (tempFract.denomerator % i == 0)) {		// то
            tempFract.numerator /= i;	// числитель делим на i
            tempFract.denomerator /= i;	// знаменатель делим на i
            nod = i;	// запоминаем число на которое делили (Нод)
        }
    }

    // TODO: попробовать изменить объект, сделать его с НОД
    
    return tempFract;
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
        case '=':
            fractionAnswer = reduction(fractionOne);
            // Выводим результат сокращения
            showReductionResult(fractionOne, fractionAnswer);
            return;
    
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

function showReductionResult(obj1, objAnswer) {
    // Выводим формулу и результат вычисления.
    alert(
        showFraction(obj1) 
        + " = " 
        + showFraction(objAnswer)
        );
}