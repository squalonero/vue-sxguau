<template>
  <div class="players">
    <div v-for="(heroData, k) in players" :key="k">
      <player :id="k" :data="heroData"></player>
    </div>
  </div>
</template>
<script>
import Player from './Player.vue';

export default {
  name: 'Players',
  components: {
    Player,
  },
  props: {
    players: Array,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped></style>
