<template>
  <div class="side">
    <dice-manager></dice-manager>
    <dice-result-feed></dice-result-feed>
  </div>
</template>
<script>
import DiceManager from './Side/DiceManager.vue'
import DiceResultFeed from './Side/DiceResultFeed.vue'

export default {
  name: 'SidePanel',
  components: {
    DiceManager,
    DiceResultFeed
  },
  props: {},
  data() {
    return {
    }
  },
  methods: {},
}
</script>
<style scoped>
.side {
  position: relative;
  z-index: 1;
  flex: 1;
  border: 1px solid #fff;
}
</style>