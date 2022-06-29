<template>
  <div id="descent-helper">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link :to="`/hero/${hero}`">Hero</router-link>
      <router-link to="/conditions">Conditions</router-link>
    </div>
    <router-view id="vue" class="d-flex" />
  </div>
</template>

<script>
import { useIconStore } from '@/store/icon'
import { useHeroStore } from '@/store/heroes'
import AppConfig from './app.config.json'

export default {
  name: 'App',
  setup() {
    const icons = useIconStore()
    const hero = useHeroStore()
    return {
      // you can return the whole store instance to use it in the template
      icons,
      hero
    }
  },
  mounted() {},
  created() {
    // console.log('logging from created');
    // // console.log(this._pStores.icons.allIcons)
    // // console.log(this._pStores.icons.getColor('heart'))
    // console.log(this)
  }
}
</script>

<style>
button {
  all: unset;
  display: flex;
  align-items: center;
}
#nav {
  position: absolute;
  right: 0;
  padding: 10px;
  background: #000;
  z-index: 10;
}
/* removes text highlight color */
::selection {
  background: transparent;
}
html,
body {
  margin: 0;
  background-color: #000;
  height: 100%;
  max-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0;
  position: relative;
  max-height: 100%;
  display: block;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
#descent-helper {
  max-height: 100%;
  display: flex;
}

body::before {
  content: '';
  inset: 0;
  position: fixed;
  background: url('https://i.pinimg.com/originals/8b/68/a5/8b68a5de2c9381a6666ec55ec1f40b6d.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.1;
  z-index: 0;
}
#vue {
  /* position: relative;
  width: 100vw;
  height: 100vh;
  z-index: auto; */
  flex-shrink: 0;
  width: 100%;
  padding: 10px;
}

.flex-break {
  flex-basis: 100%;
  height: 0;
}


.buttonWrapper svg,
.buttonWrapper button {
  padding: 3px;
  background-color: #fff;
  color: #666;
  margin: 0 5px;
  transition: 250ms;
  cursor: pointer;
  border-radius: 5px;
}

.buttonWrapper svg:hover,
.buttonWrapper button:hover {
  background-color: #b33641;
  color: #fff;
}

.buttonWrapper {
  display: flex;
  justify-content: center;
}

.d-flex {
  display: flex;
}
.action,
.actions > * {
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
}
.scrollbar {
  margin-left: 30px;
  float: left;
  height: 300px;
  width: 65px;
  background: #f5f5f5;
  overflow-y: scroll;
  margin-bottom: 25px;
}
.scrollbar::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

.scrollbar::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

.scrollbar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #d62929;
}
</style>
