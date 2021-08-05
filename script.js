"use strict";

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');

//  box.style.backgroundColor = 'blue';
//  box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

//  for(let i = 0; i < hearts.length; i++) {
//      hearts[i].style.backgroundColor = 'blue';
//  }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div'); // Только внутри js!
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

wrapper.append(div); // В КОНЕЦ (body и тд) добавляем переменную div

// wrapper.appendChild(div); Более устаревшая версия append()

// wrapper.prepend(div);  В НАЧАЛО (body и тд) добавляем переменную div

// hearts[0].before(div); Вставляет переменную div ПЕРЕД первым элементом

// hearts[0].after(div); Вставляет переменную div ПОСЛЕ первым элементом

// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove(); Удаляет элемент со страницы

// wrapper.removeChild(hearts[1]); 

// hearts[0].replaceWith(circles[0]); ЗАМЕНЯЕТ элемент на тот который был передан

// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello World</h1>";

// div.textContent = "<h1>Hello World</h1>";

div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');