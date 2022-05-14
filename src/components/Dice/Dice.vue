<template>
  <div class="diceWrapper">
    <div class="dice-container" :style="`width: ${width}vmin`">
      <div class="dice" ref="dice" :style="`width: ${width}vmin`">
        <div
          v-for="(face, pos) in template.schema"
          :key="pos"
          class="face"
          :class="`${pos} ${template.background}-bg`"
          data-id=""
          :style="faceStyle()"
        >
          <div
            v-for="(dotClass, k) of face"
            :key="k"
            :class="dotClass[1]"
            :style="dotStylePosition(dotClass[1])"
          >
            <icon
              v-if="typeof dotClass[0] === 'string'"
              :name="dotClass[0]"
              :size="width * 2"
              :color="template.color"
            />
            <div
              v-else
              class="number"
              :style="`color: ${template.color}; font-size:${width / 4}rem`"
            >
              {{ dotClass[0] }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <button class="roll-btn" ref="rollbtn" @click="canRoll && roll()">ROLL</button> -->
  </div>
</template>
<script>
import { Dices } from './Dices'
import Icon from '../Icon/Icon.vue'

export default {
  name: 'Dice',
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
  created() {
    this.template =
      Dices.find(({ name, ...rest }) => {
        if (name === this.tpl) return { name, ...rest }
      }) || this.defaultTemplate
  },
  watch: {
    template: {
      handler(v) {
        return v
      },
      deep: true
    },
    canRoll: (v) => {
      return v
    }
  },
  data() {
    return {
      rollMax: 6,
      rollMin: 2,
      angleX: 0,
      angleY: 0,
      result: 1,
      delay: 0,
      canRoll: true,
      resultMap: [
        { n: 1, name: 'top', x: 0, y: 0 },
        { n: 2, name: 'back', x: 0, y: 90 },
        { n: 3, name: 'left', x: 270, y: 0 },
        { n: 4, name: 'right', x: 90, y: 0 },
        { n: 5, name: 'front', x: 0, y: 180 },
        { n: 6, name: 'bottom', x: 0, y: 270 }
      ],
      defaultTemplate: {
        top: ['point point-middle point-center'],
        bottom: [
          'point point-top point-right',
          'point point-top point-right',
          'point point-middle point-right',
          'point point-top point-left',
          'point point-middle point-left',
          'point point-bottom point-right',
          'point point-top point-right',
          'point point-top point-right',
          'point point-bottom point-left'
        ],
        front: [
          'point point-top point-right',
          'point point-top point-left',
          'point point-middle point-center',
          'point point-bottom point-right',
          'point point-bottom point-left'
        ],
        back: ['point point-top point-right', 'point point-bottom point-left'],
        left: [
          'point point-top point-right',
          'point point-middle point-center',
          'point point-bottom point-left'
        ],
        right: [
          'point point-top point-right',
          'point point-top point-left',
          'point point-bottom point-right',
          'point point-bottom point-left'
        ]
      },
      template: {}
    }
  },
  methods: {
    dotStylePosition(classes) {
      classes = classes.replaceAll('point-', '').split(' ')
      let positions = classes.reduce((acc, pos) => {
        let cssPos = pos
        if (['middle', 'center'].includes(pos)) {
          cssPos = pos === 'middle' ? 'top' : 'left'
        }
        return {
          ...acc,
          [cssPos]:
            (['top', 'bottom', 'left', 'right'].includes(pos)
              ? this.width / 10
              : (this.width * 10) / 25) + 'vmin'
        }
      }, {})

      return {
        width: `${this.width / 5}vmin`,
        ...positions
      }
    },
    faceStyle() {
      return {
        width: `${this.width}vmin`,
        'transform-origin': `50% 50% ${(-12.5 * this.width) / 25}vmin`
      }
    },
    getClasses(classes) {
      if (typeof classes[0] === 'string') return classes.join(' ')

      return classes[1]
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    getRandomFromArray(array) {
      return array[Math.floor(Math.random() * array.length)]
    },
    async giveResult() {},
    async roll() {
      /**
       * @results
       * 0 0:1
       * 0 90:2
       * 270 0:3
       * 90 0:4
       * 0 180:5
       * 0 270:6
       */

      //roll lock
      this.canRoll = false

      //animation delay
      const xTurn = this.getRandomInt(this.rollMin, this.rollMax),
        yTurn = this.getRandomInt(this.rollMin, this.rollMax)
      this.delay = Math.max(xTurn, yTurn) * 250

      //actual result calculation
      let result = this.getRandomFromArray(this.resultMap)
      this.$refs.dice.style.transform =
        'rotateX(' + result.x + 'deg) rotateY(' + result.y + 'deg)'
      this.$refs.dice.style.transitionDuration = this.delay + 'ms'

      //roll unlock
      return new Promise((res) =>
        setTimeout(() => {
          this.canRoll = true
          res({
            number: result.n,
            face: result.name,
            diceName: this.tpl
          })
        }, this.delay)
      )

      //this.$emit('result', result.n, result.name, this.tpl)

      //propagate to parent
    }
  }
}
</script>
<style scoped>
.number {
  font-size: 4rem;
}

.dice-container {
  width: 25vmin;
  aspect-ratio: 1;
  cursor: pointer;
}

.dice {
  position: relative;
  width: 25vmin;
  aspect-ratio: 1;
  border-radius: 1vmin;
  transform-style: preserve-3d;
  transform-origin: 50% 50% -5vmin;
  /* transform: rotateX(180deg) rotateY(180deg); */
  transition: transform 2s ease-in-out;
}

.face {
  position: absolute;
  width: 25vmin;
  aspect-ratio: 1;
  border-radius: 1vmin;
  transform: rotateX(0deg) rotateY(180deg);
  transform-origin: 50% 50% -5vmin;
  /*backface-visibility: hidden;*/
}

.default-bg {
  background: radial-gradient(circle at center, #eee, #ccc);
}

.red-bg {
  background: radial-gradient(circle at center, rgb(190, 0, 0), rgb(63, 0, 0));
}

.brown-bg {
  background: radial-gradient(circle at center, rgb(102, 63, 4), rgb(71, 44, 4));
}

.black-bg {
  background: radial-gradient(circle at center, rgb(19, 19, 19), rgb(29, 29, 29));
}

.blue-bg {
  background: radial-gradient(circle at center, rgb(15, 9, 100), rgb(4, 4, 138));
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

.face > div {
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