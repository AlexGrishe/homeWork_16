var userObj = {
    firstName: 'Vladimir',
    lastName: 'Zelensky',
    age: 42,
    fullName: function () {
        return userObj.firstName + ' ' + userObj.lastName;
    }
};
console.log(userObj.fullName());

function defUpperStr(myText) {
    return (myText || 'Default text').toUpperCase();
}

console.log(defUpperStr("пример"));
console.log(defUpperStr());

function evenFn(n) {
    let arr = [];

    for (let i = 1; i <= n; i++) if (i % 2 === 0) arr.push(i);

    return arr;

}

console.log(evenFn(n = 250));
console.log(evenFn(n = 19));

function weekFn(n) {

    let a = '';

    switch (n) {
        case 1:
            a = 'Понедельник';
            break;
        case 2:
            a = 'Вторник';
            break;
        case 3:
            a = 'Среда';
            break;
        case 4:
            a = 'Четверг';
            break;
        case 5:
            a = 'Пятница';
            break;
        case 6:
            a = 'Суббота';
            break;
        case 7:
            a = 'Воскресенье';
            break;
        default:
            a = null;
    }

    return a;
}

console.log(weekFn(9));
console.log(weekFn(4));
console.log(weekFn('f'));
console.log(weekFn(2));


function ageClassification(n) {


    //Ваш вариант
    return n > 0
        ? n > 24
            ? n > 44
                ? n > 65
                    ? n > 75
                        ? n > 90
                            ? n > 122
                                ? null
                                : 'долгожители'
                            : 'старческий возраст'
                        : 'пожилой возраст'
                    : 'средний возраст'
                : 'молодой возраст'
            : 'детский возраст'
        : null;


    // Мой вариант, не сработал(
    // return n < 0 ? null :
    //     n < 25 ? 'детский возраст' :
    //         n < 45 ? 'молодой человек' :
    //             n < 66 ? 'средний возраст' :
    //                 n < 76 ? 'пожилой возраст' :
    //                     n < 91 ? 'старческий возраст' :
    //                         n < 123 ? 'долгожители' :
    //                             null;

}

console.log('--старт возраст');

console.log('--нул -2');
console.log(ageClassification(-2));

console.log('--детский 0/12/24');
console.log(ageClassification(0));
console.log(ageClassification(12));
console.log(ageClassification(24));

console.log('--молодой 25/30/44');
console.log(ageClassification(25));
console.log(ageClassification(30));
console.log(ageClassification(44));

console.log('--средний 45/55/65');
console.log(ageClassification(45));
console.log(ageClassification(55));
console.log(ageClassification(65));

console.log('--пожилой 66/70/75');
console.log(ageClassification(66));
console.log(ageClassification(70));
console.log(ageClassification(75));

console.log('--старческий 76/86/90');
console.log(ageClassification(76));
console.log(ageClassification(86));
console.log(ageClassification(90));

console.log('--долгожители 91/110/122');
console.log(ageClassification(91));
console.log(ageClassification(110));
console.log(ageClassification(122));

console.log('--нул 125/150/200');
console.log(ageClassification(125));
console.log(ageClassification(150));
console.log(ageClassification(200));

function oddFn(n) {

    var odd = [];
    var s = 0;

    while (s++ < n) if (s % 2 !== 0) odd.push(s);


    return odd;

}
console.log(oddFn(20));
console.log(oddFn(80));
console.log(oddFn(100));


function mainFunc(a, b, func) {
 if (func && typeof func === 'function') return func(a, b);

 return false;

}

function cbRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function cbPow(num, pow) {
    return Math.pow(num, pow);
}
function cbAdd(a, b) {
    return a + b;
}
console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(2, 5, cbPow));
console.log(mainFunc(2, 5, cbAdd));
console.log(mainFunc(2, 5, 'not a func'));

// function mySandwich (param1, param2, callback) {
//     alert('Начинаем есть бутерброд.\n\n\
//             Параметры: ' + param1 + ', ' + param2);
//     callback();
// }
// mySandwich('ветчина', 'сыр', function() {
//     alert('Заканчиваем есть бутерброд.');
// });



// function mainFunc(a, b, func) {
//     var a = 8;
//     var b = 20;
//     function func (a, b, callback) {
//         func = a + b;
//     }
// }
// console.log(mainFunc(func));

