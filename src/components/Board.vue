<template>
<!-- delete -->
  <div class="Board">
    <player :id="0" :data="hero[0]" @modal:open="modalOpen"/>
  </div>
</template>
<script>
import Player from './Player.vue'

export default {
  name: 'Board',
  components: {
    Player
  },
  props: {
    hero: Array,
  },
  data() {
    return {

    };
  },
  methods: {

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
