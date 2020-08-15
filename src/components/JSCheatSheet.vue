<template>
  <div>
    <h1>
      JS CheatSheet
    </h1>

    <div class="wrapper">
      <div class="section">
        <div class="part">
          <h2>Объявление переменной</h2>
          <pre><code>
var text = 'Hello World' // устаревший способ
let speed = 100 // если переменная будет меняться
const pi = 3.14 // если переменная не будет меняться
          </code></pre>
        </div>

        <div class="part">
          <h2>Виды переменных</h2>
          <pre><code>
const string = 'Hello World' // строка
const number = 123 // число
const boolean = true // правда или ложь
const array = [1,2,3] // массив (коллекция)
const object = { name: 'Anna' } // объект (словарь)
          </code></pre>
        </div>

        <div class="part">
          <h2>Складывание строк</h2>
          <pre><code>
const text1 = 'Hello'
const text2 = 'world'
const result = text1 + text2 // 'Hello world'
          </code></pre>
        </div>

        <div class="part">
          <h2>Функция</h2>
          <pre><code>
function sum(a, b) {
  return a + b
}
          </code></pre>
        </div>

        <div class="part">
          <h2>Условие</h2>
          <pre><code>
if (temperature > 18) {
  walk = true
} else {
  sitHome = true
}
          </code></pre>
        </div>

        <div class="part">
          <h2>Операторы логики</h2>
          <pre><code>
// И
a && b

// ИЛИ
a || b

// РАВЕНСТВО
a === b

// НЕРАВЕНСТВО
a !== b
          </code></pre>
        </div>

        <div class="part">
          <h2>Цикл</h2>
          <pre><code>
const fruits = ['apple', 'banana']
for (let fruit of fruits) {
  eat(fruit)
}
          </code></pre>
        </div>
      </div>

      <div class="section">
        <div class="part">
          <h2>Получить 1 элемент</h2>
          <pre><code>
let buttonEl = document.querySelector('.button')
          </code></pre>
        </div>

        <div class="part">
          <h2>Получить все элементы</h2>
          <pre><code>
let buttonEls = document.querySelectorAll('.button')
          </code></pre>
        </div>

        <div class="part">
          <h2>Работа с классами элемента</h2>
          <pre><code>
// добавить класс
el.classList.add('red')

// удалить класс
el.classList.remove('blue')

// удалить класс, если он есть
// добавить класс, если его нет
el.classList.toggle('active')
          </code></pre>
        </div>

        <div class="part">
          <h2>Проверка на то, есть класс или нет</h2>
          <pre><code>
if (el.classList.contains('red')) {
  console.log('у этого элемента есть класс "red"')
}
          </code></pre>
        </div>

        <div class="part">
          <h2>Изменить текст внутри элемента</h2>
          <pre><code>
el.textContent = 'Новый текст'
          </code></pre>
        </div>

        <div class="part">
          <h2>Добавить текст внутри элемента</h2>
          <pre><code>
// получаем текущее значение текста
const currentText = el.textContent
// добавляем к нему новое
el.textContent = el.textContent + 'New text'
          </code></pre>
        </div>

        <div class="part">
          <h2>Получить значение инпута</h2>
          <pre><code>
const password = inputEl.value
          </code></pre>
        </div>

        <div class="part">
          <h2>Получить значение из датасета элемента</h2>
          <pre><code>{{`
// html
<div data-fruit="banana"></div>
// javascript
const fruit = el.dataset.temp`}}
          </code></pre>
        </div>
      </div>

      <div class="section">
        <div class="part">
          <h2>Добавление обработки для клика по элементу</h2>
          <pre><code>
el.onclick = function () {
  console.log('на меня кликнули')
}
          </code></pre>
        </div>

        <div class="part">
          <h2>Следим за изменением значения инпута</h2>
          <pre><code>
inputEl.onchange = function () {
  console.log('что-то изменилось внутри меня')
}
          </code></pre>
        </div>

        <div class="part">
          <h2>Создать элемент</h2>
          <pre><code>
const newEl = document.createElement('div')
          </code></pre>
        </div>

        <div class="part">
          <h2>Добавить элемент внутрь другого</h2>
          <pre><code>
el.append(newEl)
          </code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import { onMounted } from 'vue';

hljs.registerLanguage('javascript', javascript);

export default {
  setup() {
    onMounted(() => {
      document.querySelectorAll('code').forEach((block) => {
        hljs.highlightBlock(block);
      });
    });
    return {};
  },
};
</script>

<style src="highlight.js/styles/github.css"></style>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
.wrapper {
  display: flex;
  justify-content: space-around;
}
.section {
  margin: 0 16px;
}
</style>
