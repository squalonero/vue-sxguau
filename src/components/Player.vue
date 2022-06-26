<template>
  <div class="playerboard">
    <div class="statsWrapper">
      <!-- Name & Image -->
      <div class="heroSection">
        <div class="heroNameWrapper">
          <small class="playerID">#{{ id + 1 }} {{ data.name }}</small>
        </div>
        <div
          class="heroImg"
          v-if="data.image"
          :style="`background-image: url(` + data.image.split('/revision')[0] + ');'"
        ></div>
      </div>

      <!-- Base stats -->
      <div class="heroSection mainStats">
        <stat
          code="speed"
          :value="stats.speed"
          icon="rocket"
          color="#26873c"
          @plusStat="stats.speed++"
          @minusStat="stats.speed--"
        ></stat>
        <stat
          code="health"
          :value="stats.health"
          icon="heart"
          color="#b33641"
          @plusStat="stats.health++"
          @minusStat="stats.health--"
        ></stat>
        <stat
          code="stamina"
          :value="stats.stamina"
          icon="droplet"
          color="#a88d1e"
          @plusStat="stats.stamina++"
          @minusStat="stats.stamina--"
        ></stat>
      </div>
    </div>
    <!--  statsWrapper -->

  </div>
</template>
<script>
import Stat from './Stat.vue'
import Icon from './Icon/Icon.vue'
import Dice from './Dice/Dice.vue'

export default {
  name: 'Player',
  components: {
    Stat,
    Icon,
    Dice
  },
  props: {
    id: Number,
    data: Object
  },
  data() {
    return {
      stats: { ...this.data },
    }
  },
  watch: {},
  computed: {},
  mounted() {},
  methods: {

  }
}
</script>
<style scoped>
.mainStats {
  margin-left: auto;
}

.playerboard {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.heroNameWrapper {
  margin-bottom: 20px;
  color: #fff;
}
.heroImg {
  width: 100px;
  height: 100px;
  border: 3px solid gold;
  border-radius: 50%;
  background-size: 200%;
  background-position: 20% 20%;
}
.statsWrapper {
  display: flex;
  align-items: center;
  align-items: stretch;
  gap: 30px;
  padding: calc(10px + 1vh);
}

</style>
