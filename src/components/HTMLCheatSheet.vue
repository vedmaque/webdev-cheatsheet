<template>
  <div>
    <h1>
      HTML CheatSheet
    </h1>

    <div class="wrapper">
      <div class="section">
        <div class="part">
          <h2>Базовая структура</h2>
          <pre><code>{{`
<!DOCTYPE html>
<html lang="ru">
  <head>
    <!-- чтобы дать браузеру понять, на каком языке тексты -->
    <meta charset="utf-8">

    <!-- для правильной версии internet explorer -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- для мобильной версии -->
    <meta name="viewport" content="width=device-width,initial-scale=1.0">

    <title>Заголовок страницы</title>

    <!-- подключени стилей -->
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>

    <!-- подключение javascript -->
    <script src="code.js"></script>
  </body>
</html>
`}}
          </code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import { onMounted } from 'vue';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);

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
