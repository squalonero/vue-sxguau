<template>
  <div id="Home">
    <div class="homepage">
      <h1>Seleziona un Eroe</h1>
      <div class="list-wrap">
        <div class="form-group" v-for="(hero, k) in hStore.heroes" :key="k">
          <button @click="selectHero">{{ hero.name }}</button>
        </div>
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
  },
  methods: {
    selectHero(e) {
      this.selectedHero = e.target.innerText
      this.redirectToHero()
    },
    redirectToHero()
    {
      window.location.pathname = '/game/' + encodeURIComponent(this.selectedHero)
    }
  }
}
</script>
<style scoped>
button{
  all: unset;
}
h1 {
  color: white;
}
#Home {
  display: flex;
  flex-direction: column;
}
.list-wrap {
  overflow-y: auto;
  max-height: 100%;
  width: 100%;
  font-size: 1.5rem;
}
.homepage {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
}
</style>