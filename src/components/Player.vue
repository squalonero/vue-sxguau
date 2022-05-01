<template>
  <div class="playerboard">
    <div class="statsWrapper">
      <!-- Name & Image -->
      <div class="heroSection">
        <div class="heroNameWrapper">
          <small class="playerID">#{{ id + 1 }} {{ data.hero }}</small>
        </div>
        <img class="heroImg" v-if="data.image" :src="data.image" />
      </div>
      <!-- Base stats -->
      <div class="heroSection">
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
          code="fatigue"
          :value="stats.fatigue"
          icon="droplet"
          color="#a88d1e"
          @plusStat="stats.fatigue++"
          @minusStat="stats.fatigue--"
        ></stat>
      </div>
      <!-- Conditions -->
      <div class="heroSection" style="border: 1px solid #fff; padding: 10px">
        <div class="conditionsWrapper">
          <select name="conditions" id="conditions">
            <option value="">Scegli una Condizione</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Stat from './Stat.vue';
import { Conditions } from './../data/conditions.json';

export default {
  name: 'Player',
  components: {
    Stat,
  },
  props: {
    id: Number,
    data: Object,
  },
  data() {
    return {
      stats: { ...this.data },
      // conditions: [...Conditions],
    };
  },
  watch: {},
  computed: {},
  mounted() {
    console.log(Conditions);
  },
  methods: {},
};
</script>
<style scoped>
.playerboard {
  position: relative;
  padding: 10px;
  margin-top: 10px;
}
.heroNameWrapper {
  margin-bottom: 20px;
  color: #fff;
}

.heroImg {
  max-width: 100px;
  border: 3px solid gold;
  border-radius: 50%;
}
.statsWrapper {
  margin-top: 10px;
  display: flex;
  align-items: center;
  align-items: stretch;
  gap: 30px;
}
</style>
