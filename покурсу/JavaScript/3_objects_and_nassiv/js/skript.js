
//ovject

const person = {
    firstName: 'Andrii',
    lastName: 'Sokil',
    age: 28,
    city: 'Dnepr',
    maried: false,
    languages: {
        english: 'b2',
        francesh: 'b2'
    },
    lang: ['En', 'Ua'] // массив в нутри обьекта так же может быть обьект в нутри массива
}

console.log(person.firstName, person['lastName'], person.languages.english)

// в обьектах если нужно изменить какой либо ключь, то просто обращаясь к ключу можно менять его
person.age = 29
console.log(person.age)

// аналогичным образом можно задать новый ключь
person.yearBirth = 1994
console.log(person.yearBirth)

//чтобы выыести всю конструкцию на экран можно использовать цикл for

for (let key in person) {
    console.log(key, person[key])
}


//massiv

const nums = [1, 2, 3, 4,]

console.log(nums[0])

//так же для масивов есть вариант обхода

for (let num of nums) {
    console.log(num)
}

// чтобы добавить в конец массива использкеться метот push 

nums.push(5, 6, 7)

// добавит в конец - const nums = [1, 2, 3, 4, 5, 6, 7]

// так же можно добавить в начало unshift

nums.unshift(5, 6, 7)
// добавит в начало - const nums = [5, 6, 7, 1, 2, 3, 4]

// так же можно удалять из массива командой pop 
nums.pop() // команда рор так же как и рush работает с конца элемента

// так же можно удалить с начала элемента
nums.shift()

// длина массива length

console.log('Длина массива ' + nums.length)

// for (let i = 0; i < nums.length; i++) {
//     старый метод обхода массива
// }
