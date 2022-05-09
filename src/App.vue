<template>
  <div id="vue">
    <board :players="players"></board>
    <side-panel></side-panel>
  </div>
</template>

<script>
import Board from './components/Board.vue';
import SidePanel from './components/SidePanel.vue';
import Heroes from './data/heroes.json';
import AppConfig from './app.config.json';

export default {
  name: 'App',
  components: {
    Board, SidePanel
  },
  data()
  {
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

#vue {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 60px;
  padding: 1rem;
  position: relative;
  background-color: #000;
  display: flex;


}

#vue::before {
  content: '';
  inset: 0;
  position: fixed;
  background: url('https://i.pinimg.com/originals/8b/68/a5/8b68a5de2c9381a6666ec55ec1f40b6d.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  opacity: .3;
}

.flex-break {
  flex-basis: 100%;
  height: 0;
}

.buttonWrapper svg {
  padding: 5px;
  background-color: #fff;
  color: #666;
  margin: 0 5px;
  transition: 250ms;
  cursor: pointer;
  border-radius: 5px;
}

.buttonWrapper svg:hover {
  background-color: #f3f3f3;
  color: #333;
}

.buttonWrapper {
  display: flex;
  justify-content: center;
}

.d-flex {
  display: flex;
}
</style>
