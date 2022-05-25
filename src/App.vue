<template>
  <div id="descent-helper">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/game">Game</router-link>
      <router-link to="/game2">Game2</router-link>
      <router-link to="/test">Test</router-link>
    </div>
    <router-view id="vue" class="d-flex" />
  </div>
</template>

<script>
import { useIconStore } from '@/store/icon'
import AppConfig from './app.config.json'

export default {
  name: 'App',
  setup() {
    const icons = useIconStore()
    return {
      // you can return the whole store instance to use it in the template
      icons
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
  overflow: hidden;
}
#descent-helper {
  padding: 10px;
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
  position: relative;
  z-index: auto;
}

.flex-break {
  flex-basis: 100%;
  height: 0;
}

.buttonWrapper svg {
  padding: 5px;
  background-color: #fff;
  color: #666;
  margin: 0 5px;
  transition: 250ms;
  cursor: pointer;
  border-radius: 5px;
}

.buttonWrapper svg:hover {
  background-color: #f3f3f3;
  color: #333;
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
</style>
