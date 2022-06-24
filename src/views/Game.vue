<template>
  <div id="game">
    <div id="playerNav">
      <router-link to="/game/stats">Stats</router-link>
      <router-link to="/game/conditions">Conditions</router-link>
      <router-link to="/game/dices">Dices</router-link>
      <router-link to="/game/dices-history">DicesHistory</router-link>
    </div>
    <board :hero="hero"></board>
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
      hero: ''
    }
  },
  setup() {
    },
  created()
  {
    let hero = this.$route.params.hero
    if(hero)
    {
      this.hero = Heroes.filter(p => p.name === hero)
    }
    // console.log(this.$route.params)

  }
}
</script>
<style scoped>
#playerNav {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  background: #000;
  z-index: 10;
}
</style>