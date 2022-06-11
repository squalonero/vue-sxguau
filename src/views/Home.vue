<template>
  <div id="Home">
    <!-- <select name="hero" id="hero" v-model="selectedHero">
      <option value="" selected>Seleziona un eroe</option>
      <option v-for="(hero, k) in hStore.heroes" :key="k">{{ hero.name }}</option>
    </select> -->
    <div class="list-wrap">
      <div class="form-group" v-for="(hero, k) in hStore.heroes" :key="k">
        {{ hero.name }}
      </div>
    </div>
  </div>
</template>
<script>
import { useHeroStore } from '@/store/heroes.js'

export default {
  name: 'Home',
  data() {
    return {
      selectedHero: ''
    }
  },
  setup() {
    const hStore = useHeroStore()
    return {
      // you can return the whole store instance to use it in the template
      hStore
    }
  }
}
</script>
<style scoped>
.list-wrap
{
  overflow-y: auto;
  max-height: 100%;
}
</style>