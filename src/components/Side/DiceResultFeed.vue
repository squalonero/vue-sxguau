<template>
  <div id="diceResultFeed">
    <div>Storico risultati:</div>
    <div class="feed d-flex" v-for="(result, n) in dStore.feed" :key="n">
      <div class="result" v-for="(v, icon) of result" :key="icon">
        <icon :name="icon != 'number' ? icon : 'enlarge2'" :color="iStore.getColor(icon)" />
        <span class="result-val">: {{ v }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from '../Icon/Icon.vue'
import { useIconStore } from '@/store/icon.js'
import { useDiceStore } from '@/store/dice.js'

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
    return {
      // you can return the whole store instance to use it in the template
      iStore,
      dStore
    }
  },
  methods: {
  }
}
</script>
<style scoped>
#diceResultFeed {
  padding: 10px;
  color: #fff;
}
.result {
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
}
.feed {
  border: 1px solid #fff;
}
</style>
