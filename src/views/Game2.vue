<template>
  <div id="game">
    <div id="playerNav">
      <router-link to="/game/stats">Stats</router-link>
      <router-link to="/game/conditions">Conditions</router-link>
      <router-link to="/game/dices">Dices</router-link>
      <router-link to="/game/dices-history">DicesHistory</router-link>
    </div>
    <!-- <board :hero="hero"></board> -->
    <div class="Board">
      <player :id="0" :data="hero[0]" @modal:open="modalOpen" />
      <modal
        :show="this.modalShow"
        :title="this.modalData.title"
        :contents="this.modalData.contents"
        :images="this.modalData.images"
        @modal:close="modalClose"
      ></modal>
    </div>
    <!-- <side-panel></side-panel> -->
  </div>
</template>
<script>
import Board from '../components/Board.vue'
import SidePanel from '../components/SidePanel.vue'
import Heroes from '../data/HEROES.json'
import Player from '../components/Player.vue'
import Modal from '../components/Modal.vue'

export default {
  components: {
    Board,
    SidePanel,
    Player,
    Modal
  },
  data() {
    return {
      hero: '',
      modalShow: false,
      modalData: {}
    }
  },
  methods: {
    modalOpen(content){
      this.modalData = content
      this.modalShow = true
    },
    modalClose()
    {
      this.modalShow = false
      this.modalData = {}
    }
  },
  setup() {},
  created() {
    let hero = this.$route.params.hero
    if (hero) {
      this.hero = Heroes.filter((p) => p.name === hero)
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