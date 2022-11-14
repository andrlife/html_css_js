// Dom

// document
// document.head
// bom браузер
// location возвращает имя которое в браузере прописано

// К примеру есть элемент с id feature
// создадим переменную и побратимся к ней через getElementById

const feat = document.getElementById('feature'); // выборка по id

const block = document.getElementsByClassName('block'); // выборка по классу

const items = document.querySelector('.price-item.price-item_best') //Выборка по нескольким классам либо id #block

const itemss = document.querySelectorAll('.price-item')  // выборка по нодам


// работа с атрибутами

const btn1 = document.querySelector('.stage__actions.btn.btn-dark')

btn1.hasAttribute('href') //проверка атрибутов к примеру есть ли у кнопки атрибут href как ответ вернеться true false

btn1.getAttribute('href') // чтобы получиь значение конкретного атрибута вернет ссылку (содержимое) href

btn1.setAttribute('href', '#2') //если нужно поменять либо установить новое значение
btn1.setAttribute('id', 'btn1') //так же если нет к примеру атрибута id его можно добавить

btn1.removeAttribute('id') // можно удалить атрибут

btn1.innerText // можно посмотреть что написано в нутри атрибута
btn1.innerHTML

btn1.style //посмотреть стиль атрибута

// так же к нему можно добавить стиль
btn1.style.textTransform = "uppercase" // аналогичным образом можно получить доступ к любому свойству css но писать его через кемелкейс без тере...

btn1.style.display = "none"

btn1.className //  отобразит строку название класса пример "btn btn-dark"

// к примеру если нужно добавить еще клас, то нужно вручную дописать те класы что выдало пример "btn btn-dark" (что бы их не затерло) и дописать клас который хотим добавить

btn1.className.add = "btn btn-dark active" 

// либо удалить
btn1.className.remove = "active"

// есть еще более гипкий способ toggle
btn1.classList.toggle('active') // добавляет и удаляет новый клас

// содержит ли конкретная нода конкретный клас contains
btn1.classList.contains('btn')


// создание новых элементов
const link = document.createElement('a')

// добавляем к элементу ссылку
link.setAttribute('href', '#')

//добавить еще и клас
link.classList.add('btn')

//теперь к сылке добавим содержимое
link.innerText = 'Кликни меня'

// теперь нужно куда-то разместить ссылку (выбрали ноду priceItem)
priceItem.apped(link) // внутри элемента
priceItem.prepend(link) //в начале элемента
priceItem.before(link) //до элемента
priceItem.after(link) //после элемента
