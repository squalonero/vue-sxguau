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
        <stat code="speed" :value="stats.speed" icon="rocket" color="#26873c" @plusStat="stats.speed++" @minusStat="stats.speed--"></stat>
        <stat code="health" :value="stats.health" icon="heart" color="#b33641" @plusStat="stats.health++" @minusStat="stats.health--"></stat>
        <stat code="fatigue" :value="stats.fatigue" icon="droplet" color="#a88d1e" @plusStat="stats.fatigue++" @minusStat="stats.fatigue--"></stat>
      </div>
      <!-- Conditions -->
      <div class="heroSection" style="border: 1px solid #fff; padding: 10px">
        <div class="conditionsWrapper">

          <ezselect :data="getConditions()" defaultLabel="Scegli una Condizione" name="conditions" id="conditions" :resetOnSelect="true" @ez-select:select="applyCondition"></ezselect>

          <!-- Applied Conditions -->
          <div v-for="(c, k) of conditions" :key="k" class="condition">
            <div class="conditionName">{{ c }}</div>
            <icon name="cross" @click="removeCondition(c)"></icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Stat from "./Stat.vue"
import Ezselect from "./Form/Ezselect.vue"
import { Conditions } from "../data/conditions.js"
import Icon from "./Icon/Icon.vue"

export default {
  name: "Player",
  components: {
    Stat,
    Icon,
    Ezselect
  },
  props: {
    id: Number,
    data: Object
  },
  data() {
    return {
      stats: { ...this.data },
      conditions: []
    }
  },
  watch: {},
  computed: {},
  mounted() {},
  methods: {
    getConditions() {
      return Conditions.map((e) => {
        return { ...e }
      })
    },
    applyCondition(condition) {
      if (!this.conditions.includes(condition)) this.conditions.push(condition)
    },
    removeCondition(el) {
      this.conditions = this.conditions.filter((e) => e != el)
    }
  }
}
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
.condition {
  margin-top: 5px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.condition svg {
  color: #b33641;
  cursor: pointer;
}
</style>
