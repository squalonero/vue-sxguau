<template>
  <div id="app">
    <players :players="players"></players>
  </div>
</template>

<script>
import Players from './components/Players.vue';
import Heroes from './data/heroes.json';
import AppConfig from './app.config.json';

export default {
  name: 'App',
  components: {
    Players,
  },
  data() {
    return {
      players: Heroes.heroes,
    };
  },
};
</script>

<style>
body {
  margin: 0;
}
#app > #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  padding-top: 60px;
  padding: 1rem;
  background: url('https://i.pinimg.com/originals/8b/68/a5/8b68a5de2c9381a6666ec55ec1f40b6d.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
.flex-break {
  flex-basis: 100%;
  height: 0;
}
</style>
