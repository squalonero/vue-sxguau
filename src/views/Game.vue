<template>
  <div id="game">
    <board :players="players"></board>
    <side-panel></side-panel>
  </div>
</template>
<script>
import Board from '../components/Board.vue'
import SidePanel from '../components/SidePanel.vue'
import Heroes from '../data/heroes.json'
export default {
  components: {
    Board,
    SidePanel
  },
  data() {
    return {
      players: Heroes.heroes
    }
  },
  setup() {}
}
</script>