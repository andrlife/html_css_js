// document.write('<h1>Hello from JS</h1>')

// const age = prompt('Сколько Вам лет?')

// let access = ''

// if (age > 18) {
//     access = 'Доступ разрешен'
// } else if (age < 18 && age > 16 || age == 16) {
//     access = 'Доступ запрещен, приходи через пару лет'
// } else {
//     access = 'Доступ запрещен'
// }





//тернарный оператор

// let access = (age > 18) ? 'Доступ разрешен' : 'Доступ Запрещен'

// document.write(`<h3> ${access} </h3>`)





// Оператор switch  

// https://www.jscamp.app/ru/docs/javascript15

// Конструкция switch служит для сравнения значения на равенство с различными вариантами.

// При этом равенство подразумевается в смысле оператора строгое равенство ===, сравнивать 
// с регулярным выражением или как-то еще switch не умеет. То есть значения должны быть
//  одного типа, чтобы выполнялось равенство.

// function learnJavaScript() {
//     let number = 2
//     let str
//     if (number === 0) {
//       str = 'Вы ввели число 0'
//     }
  
//     if (number === 1) {
//       str = 'Вы ввели число 1'
//     }
  
//     if (number === 2 || number === 3) {
//       str = 'Вы ввели число 2, а может и 3'
//     }
//     return str
//   }




// function learnJavaScript() {
//     let number = 2
//     let str
//     switch (number) {
//       case 0:
//         str = 'Вы ввели число 0'
//         break
  
//       case 1:
//         str = 'Вы ввели число 1'
//         break
  
//       case 2:
//       case 3:
//         str = 'Вы ввели число 2, а может и 3'
//         break
//     }
//     return str
//   }




//   Циклы
// https://www.jscamp.app/ru/docs/javascript16

// Оператор while создает🏗️ цикл, выполняющий заданную инструкцию,
// пока истинно проверяемое условие. Логическое значение условия 
// вычисляется ➕ перед исполнением тела цикла.

// while (условие) {
//     инструкция // код алгоритма - инструкции
//   }

// let num = 0

// while (num <= 10) {
//     document.write(`<h4>${num}</h4>`)
//     // num = num + 1;
//     num++
//     if (num == 11) {
//         break
//     }
// }

// let age = prompt('сколько Вам лет?')

// while (true) {
//     if (age > 0 && age < 100) {
//         continue // Выход из цикла
//     } else {
//         age = prompt('Не коректный ввод, Сколько Вам лет?')
//         break // полностью выходит из цикла
//     }

//     // В отличии от break, который полностью выходит из цикла,
//     //  оператор continue лишь пропускает одну итерацию в цикле.
// }



// Выражение for создаёт цикл, состоящий из 3
//  необязательных выражений в круглых скобках, разделённых точками с запятой.

// for ([инициализация]; [условие]; [финальное выражение])выражение

// for (let i = 0; i < 10; i++) {
//     document.write(`<h4>${i}</h4>`)
// }

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for





//практика


// let num = 1

// while (num < 11) {
//     document.write(`<h3>${num}</h3>`)
//     num++
//     if (num == 11) {
//         break
//     }
// }


