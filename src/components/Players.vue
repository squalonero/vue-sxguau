<template>
  <div class="players">
    <div v-for="(heroData, k) in players" :key="k">
      <player :id="k" :data="heroData" @modal:open="modalOpen"/>
    </div>
    <modal :show="this.modalShow" :title="this.modalData.title" :contents="this.modalData.contents" :images="this.modalData.images"
    @modal:close="modalClose" ></modal>
  </div>
</template>
<script>
import Player from './Player.vue'
import Modal from "./Modal.vue"

export default {
  name: 'Players',
  components: {
    Player, Modal
  },
  props: {
    players: Array,
  },
  data() {
    return {
      modalShow: false,
      modalData: {}
    };
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
};
</script>
<style scoped></style>
