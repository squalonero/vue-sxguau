<template>
  <div id="diceResultFeed">
    <div class="heading d-flex">
      <div>Storico risultati:</div>
      <div class="action" @click="dStore.clear()">clear <icon name="cross" :color="cStore.getColor('red')" /></div>
    </div>
    <div class="feed">
      <div
        class="feedRow d-flex"
        :class="n == 0 ? 'latest' : ''"
        v-for="(result, n) in dStore.feed"
        :key="n"
      >
        <div class="result" v-for="(v, icon) of result" :key="icon">
          <icon
            :name="icon != 'number' ? icon : 'enlarge2'"
            :color="iStore.getColor(icon)"
          />
          <span class="result-val">: {{ v }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from '../Icon/Icon.vue'
import { useIconStore } from '@/store/icon.js'
import { useDiceStore } from '@/store/dice.js'
import { useColorStore } from '@/store/color.js'

export default {
  name: 'DiceResultFeed',
  components: { Icon },
  props: {
    feed: {
      type: Array
    }
  },
  setup() {
    const iStore = useIconStore()
    const dStore = useDiceStore()
    const cStore = useColorStore()
    return {
      // you can return the whole store instance to use it in the template
      iStore,
      dStore,
      cStore
    }
  },
  methods: {}
}
</script>
<style scoped>
#diceResultFeed {
  padding: 10px;
  color: #fff;
  display: flex;
  flex-direction: column;
}
.heading{
  justify-content: space-between;
  padding: 10px;
}
.result {
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
}
.feedRow.latest {
  border: 1px solid #eee;
}
.feed{
  overflow-y: auto;
  flex: 1 1 50vh;
}
</style>
