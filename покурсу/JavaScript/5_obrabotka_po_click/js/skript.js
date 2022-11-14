// Типы событий

function AleRt () {
    alert('Вызванная функция через клик')
}


function AleRt2 () {
    alert('Вызванная с помощью id')
}
const li = document.getElementById('test1')
li.onclick = AleRt2

const li2 = document.getElementById('test2')
li2.addEventListener('click', function () {
    console.log('Привет из листнера')
})

// addEventListener // Добавляет
// removeEventListener // убирает


// при нажатии добавляем и убираем клас
let heading = document.getElementById('h2')
    heading.onclick = function () {
        console.log(this)
        this.classList.toggle('active')
    }


    //checkTarget
    // event событие (название) некий обьект который имеет информацию о содержимом

function checkTarget(event) {
    event.preventDefault() // отменить событие браузерное по умолчанию
    console.log(event)
    console.log(event.target)
    console.log(event.currentTarget)
    console.log(this.innerHTML)
}
