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
          <div class="conditionsActions">
            <ezselect :data="getConditions()" defaultLabel="Scegli una Condizione" name="conditions" id="conditions" :resetOnSelect="true" @ez_select:select="applyCondition"></ezselect>
            <div class="buttonWrapper randomCondition">
              <icon name="dice" :size="20" color="#b33641" @click="randomCondition" />
            </div>
          </div>

          <!-- Applied Conditions -->
          <div v-for="(condition, k) of conditions" :key="k" class="condition">
            <div class="conditionName">{{ condition }}</div>
            <div class="actionWrap">
              <icon name="book" @click="readCondition(condition)"></icon>
              <icon color="#b33641" name="cross" @click="removeCondition(condition)"></icon>
            </div>
          </div>
        </div>
      </div>
      <!--  Dice -->
      <dice />
    </div>
  </div>
</template>
<script>
import Stat from "./Stat.vue"
import Ezselect from "./Form/Ezselect.vue"
import { Conditions } from "../data/conditions.js"
import Icon from "./Icon/Icon.vue"
import Dice from './Dice.vue'

export default {
  name: "Player",
  components: {
    Stat,
    Icon,
    Ezselect,
    Dice
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
      return Conditions.sort((a, b) => a.name.localeCompare(b.name)).map((e) => {
        return { ...e }
      })
    },
    applyCondition(condition) {
      if (!this.conditions.includes(condition)) this.conditions.push(condition)
    },
    removeCondition(el) {
      this.conditions = this.conditions.filter((e) => e != el)
    },
    randomCondition() {
      let conditions = this.getConditions().map((el) => el.name)
      let randomCondition = conditions[Math.floor(Math.random() * conditions.length)]
      this.applyCondition(randomCondition)
    },
    readCondition(condition)
    {
      let cond = Conditions.find(e => e.name === condition);
      this.$emit('modal:open', {
          title: cond.name,
          contents: [
            cond.desc, cond.monster_desc
          ],
          images: cond.card
        })
    }
  }
}
</script>
<style scoped>
.randomCondition svg {
  background: #b33641;
  color: #fff;
}
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
  margin-top: 8px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.condition svg {
  cursor: pointer;
}
.condition .actionWrap > *
{
  margin: 0 5px;
}
.conditionsActions {
  display: flex;
  align-items: center;
}
</style>
