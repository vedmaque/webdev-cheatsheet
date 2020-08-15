<template>
  <div id="app">
    <JSCheatSheet />
    <HTMLCheatSheet />
  </div>
</template>

<script>
import JSCheatSheet from './components/JSCheatSheet.vue';
import HTMLCheatSheet from './components/HTMLCheatSheet.vue';

export default {
  name: 'App',
  components: {
    JSCheatSheet,
    HTMLCheatSheet,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
