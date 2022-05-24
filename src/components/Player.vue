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
    <!-- Conditions -->
    <div class="heroSection conditions">
      <div class="conditionsActions">
          <ezselect
            :data="getConditions()"
            defaultLabel="Scegli una Condizione"
            name="conditions"
            id="conditions"
            :resetOnSelect="true"
            @ez_select:select="applyCondition"
          ></ezselect>
          <div class="buttonWrapper randomCondition">
            <icon name="dice" :size="20" color="#b33641" @click="randomCondition" />
          </div>
        </div>
      <div class="conditionsWrapper">


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
  </div>
</template>
<script>
import Stat from './Stat.vue'
import Ezselect from './Form/Ezselect.vue'
import { Conditions } from './Condition/conditions.js'
import Icon from './Icon/Icon.vue'
import Dice from './Dice/Dice.vue'

export default {
  name: 'Player',
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
    readCondition(condition) {
      let cond = Conditions.find((e) => e.name === condition)
      this.$emit('modal:open', {
        title: cond.name,
        contents: [cond.desc, cond.monster_desc],
        images: {
          front: `/assets/images/conditions/filtered/${cond.tag}_front.png`,
          back: `/assets/images/conditions/filtered/${cond.tag}_back.png`
        }
      })
    }
  }
}
</script>
<style scoped>
.conditionsWrapper {
  flex: 1;
  max-height: 100%;
  overflow: auto;
  position: relative;

}
.conditionsWrapper> :nth-child(1)
{
  padding-top: 40px;
}
.conditions {
  flex: 1;
  padding: 10px;
  max-height: 100%;
  overflow: hidden;
  display: flex;
  position: relative;
}
.mainStats {
  margin-left: auto;
}
.randomCondition {
  margin-left: auto;
}
.randomCondition svg {
  background: #b33641;
  color: #fff;
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
.condition {
  margin-top: 8px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #222;
  padding: 5px 0;
}
.condition svg {
  cursor: pointer;
}
.condition .actionWrap > * {
  margin: 0 5px;
}
.conditionsActions {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding-bottom: 10px;
  z-index: 2;
}
</style>
