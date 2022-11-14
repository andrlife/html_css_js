
// Function https://www.jscamp.app/ru/docs/javascript09/

// function имя(параметры) {
//     ... тело ...  // Алгоритм
//     return итоговоеЗначение
//   }

function sum (a, b) {
    console.log(a + b)
}

sum(8, 6) // вызов функции с обьявением параметров

// стрелочная функция
const sumPlus = (a, b) => {
    console.log(a + b)
}

// также функция может произвести вычисления и вернуть результат в обьявленную переменную

const sumNum = (a, b) => {
    const c = a + b

    return c  // на return выполнение функции заканчиваеться
    // console.log(c) не будет работать
}

// можно сократить до одной строчки
const sumNom = (a, b) => {
    return a + b
}

const sumNpm = (a, b) => a + b // при такой записи return не нужен выражение будет автоматически возвращаться

const v = sumNpm(9, 8)
console.log(v)
// так же можно вызывать функцию в консоли
console.log(sumNpm(9, 8))
sumNpm(9, 8)


const cc = 5
const sumNpom = (a, b) => cc + b // если в самой функции нет параметра сс то функция будет искать его на уровень выше
const t = sumNpom(9, 8)
console.log(t)


// Функции⚙️, начинающиеся с…
// "get.."     – возвращают🔄 значение,
// "calc.."    – что-то вычисляют,
// "create.."  – что-то создают,
// "check.."   – что-то проверяют и возвращают🔄 логическое значение, и т.д.

// Примеры таких имён:

// showMessage(..)     // показывает сообщение
// getAge(..)          // возвращает возраст (в каком либо значении)
// calcSum(..)         // вычисляет сумму и возвращает результат
// createForm(..)      // создаёт форму (и обычно возвращает её)
// checkPermission(..) // проверяет доступ, возвращая true/false


const age = prompt('Сколько вам лет?')

function isOldEnough (age) {
    if(age >= 18) {
        return true
    }
        return false
}

const message = isOldEnough(age) ? 'Welcome' : 'Bye'
alert(message)
