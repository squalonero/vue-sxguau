<template>
  <div class="statContainer" :class="`${code}`">
    <div class="iconWrapper" :style="`background-color: ${color};`">
      <icon :name="icon" :size="40" color="#fff" />
      <div class="stat">
        {{ value }}
      </div>
    </div>

    <div class="inputWrapper">
      <div class="buttonWrapper reset">
        <!-- <icon name="spinner11" @click="$emit('resetStat', code)"></icon> -->
      </div>
      <div class="flex-break"></div>
      <div class="buttonWrapper plus">
        <icon name="plus" @click="$emit('plusStat', code)"></icon>
      </div>
      <div class="buttonWrapper minus">
        <icon name="minus" @click="$emit('minusStat', code)"></icon>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from './Icon/Icon.vue';
import { iconList } from 'vue-icomoon';
import iconSet from './Icon/selection.json';

export default {
  name: 'Stat',
  components: {
    Icon,
  },
  props: {
    code: String,
    value: Number,
    icon: String,
    color: String,
  },
};
</script>
<style scoped>
.statContainer {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.stat {
  color: #fff;
  min-width: 50px;
  margin-left: 5px;
  font-size: 40px;
}
.inputWrapper {
  display: flex;
  flex-wrap: wrap;
}
.reset {
  flex: 1;
  margin: 0 auto;
}

.iconWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
}
.buttonWrapper {
  display: flex;
}
</style>
