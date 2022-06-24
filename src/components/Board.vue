<template>
  <div class="Board">
    <player :id="0" :data="hero[0]" @modal:open="modalOpen"/>
    <modal :show="this.modalShow" :title="this.modalData.title" :contents="this.modalData.contents" :images="this.modalData.images"
    @modal:close="modalClose" ></modal>
  </div>
</template>
<script>
import Player from './Player.vue'
import Modal from "./Modal.vue"

export default {
  name: 'Board',
  components: {
    Player, Modal
  },
  props: {
    hero: Array,
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
  created()
  {
    console.log(this.hero)
  }
};
</script>
<style scoped>
.Board{
  display: flex;
  flex-direction: column;
  flex: 0 0 30vw;
  max-height: 100%;
}
</style>
