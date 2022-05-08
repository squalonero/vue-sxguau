<template>
  <div class="diceWrapper">
    <div class="dice-container" :style="`width: ${ width }vmin`">
      <div class="dice" ref="dice" :style="`width: ${ width }vmin`">
        <!-- <div v-for="(face, pos) in template.schema" :key="pos" class="face"
          :class="`${ pos } ${ template.background }-bg`"
          data-id="" :style="`width: ${ width }vmin`">
          <div v-for="(dotClass, k) of face" :key="k" :class="dotClass[1]">
            <icon v-if="typeof dotClass[0] === 'string'" :name="dotClass[0]" :size="50" :color="template.color" />
            <div v-else class="number" :style="`color: ${ template.color };`">{{ dotClass[0] }}</div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { Dices } from './Dices';
import Icon from '../Icon/Icon.vue';

export default {
  name: 'DiceSample',
  components: {
    Icon
  },
  props: {
    tpl: {
      type: String,
      default: 'default'
    },
    width: {
      type: Number,
      default: 25
    }
  },
  created()
  {
    this.template = Dices.filter(({name, ...rest})=>{
      return name === this.tpl
    })
    .reduce((acc, {schema, ...rest})=>{
      return {
          schema: Object.values(schema).filter(e=>e.length>0), //get first nonEmpty face
          ...rest
          }
    },{})
  console.log(this.template)
  },
  watch: {
    template: {
      handler(v) { return v },
      deep: true
    }
  },
  data()
  {
    return {
      template: {}
    }
  },
};
</script>
<style scoped>
.number {
  font-size: 4rem;
}

.dice-container {
  aspect-ratio: 1;
  cursor: pointer;
}

.dice {
  position: relative;
  aspect-ratio: 1;
  border-radius: 1vmin;
  transform-style: preserve-3d;
  transform-origin: 50% 50% -12.5vmin;
  /* transform: rotateX(180deg) rotateY(180deg); */
  transition: transform 2s ease-in-out;
}

.face {
  position: absolute;
  aspect-ratio: 1;
  border-radius: 1vmin;
  transform: rotateX(0deg) rotateY(180deg);
  transform-origin: 50% 50% -12.5vmin;
  /*backface-visibility: hidden;*/
}

.default-bg {
  background: radial-gradient(circle at center, #eee, #ccc);
}

.red-bg {
  background: radial-gradient(circle at center, rgb(177, 0, 0), rgb(94, 0, 0));
}

.brown-bg {
  background: radial-gradient(circle at center, rgb(87, 52, 0), rgb(53, 32, 1));
}

.black-bg {
  background: radial-gradient(circle at center, rgb(19, 19, 19), rgb(0, 0, 0));
}

.blue-bg {
  background: radial-gradient(circle at center, rgb(0, 0, 196), rgb(0, 0, 133));
}

.yellow-bg {
  background: radial-gradient(circle at center, rgb(218, 196, 0), rgb(218, 185, 0));
}

.face:nth-child(1) {
  transform: rotateY(0deg);
}

.face:nth-child(2) {
  transform: rotateY(90deg);
}

.face:nth-child(3) {
  transform: rotateY(180deg);
}

.face:nth-child(4) {
  transform: rotateY(270deg);
}

.face:nth-child(5) {
  transform: rotateX(90deg);
}

.face:nth-child(6) {
  transform: rotateX(270deg);
}

.face>div {
  position: absolute;
  width: 5vmin;
  aspect-ratio: 1;
  align-self: center;
  justify-self: center;
}

.point {
  border-radius: 100%;
  background: #444;
  box-shadow: inset 5px 0 10px #222;
}

.point-top {
  top: 2.5vmin;
}

.point-middle {
  top: 10vmin;
}

.point-bottom {
  bottom: 2.5vmin;
}

.point-left {
  left: 2.5vmin;
}

.point-center {
  left: 10vmin;
}

.point-right {
  right: 2.5vmin;
}

.roll-btn {
  padding: 1vmin 1.5vmin;
  border: none;
  border-radius: 1vmin;
  cursor: pointer;
  font-weight: bolder;
}
</style>
