const img = document.querySelector(".slider__image");

//выбираем точки по классам
const dots = document.querySelectorAll(".slider__dot"); //querySelectorAll получили массив (колекцию)


//масив из картинок
const imgArr = [
    "./img/images1.jpg", 
    "./img/images2.jpg", 
    "./img/images3.jpg"];

let currentIndex = 0; // первая картинка с индексом 0

//
function changeIndex (ind) {
    currentIndex = ind;
    slide(currentIndex)
}

//функция которая будет обрабатывать клики 

function nextIndex (direction) {
    currentIndex += direction;
    //проверка что индексы не выходят за приделы
    if(currentIndex >= imgArr.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = imgArr.length -1;
    }

    slide(currentIndex)
}

function slide(index) {
    img.style.display = "none";
    setTimeout(() => {
        img.style.display = "block";}, 0);
        
    img.src = imgArr[index]; // источником будет что-то из массива, и по индексу мы это текущее изображение выберем

    updateDots(index);
}

function updateDots(index) {
    for (let dot of dots) {
        dot.classList.remove('active');
    }

    dots[index].classList.add('active');
}



