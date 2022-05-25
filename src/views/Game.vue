<template>
  <div id="game">
    <div id="playerNav">
      <router-link to="/game/stats">Stats</router-link>
      <router-link to="/game/conditions">Conditions</router-link>
      <router-link to="/game/dices">Dices</router-link>
      <router-link to="/game/dices-history">DicesHistory</router-link>
    </div>
    <board :players="players"></board>
    <side-panel></side-panel>
  </div>
</template>
<script>
import Board from '../components/Board.vue'
import SidePanel from '../components/SidePanel.vue'
import Heroes from '../data/HEROES.json'
export default {
  components: {
    Board,
    SidePanel
  },
  data() {
    return {
      players: Heroes
    }
  },
  setup() {}
}
</script>