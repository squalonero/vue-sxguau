<template>
  <div class="diceWrapper">
    <div class="dice-container" :style="widthStyle()">
      <div class="dice" ref="dice" :style="widthStyle()">
        <div
          v-for="(face, pos) in template.schema"
          :key="pos"
          class="face"
          :class="`${pos} ${template.background}-bg`"
          data-id=""
          :style="widthStyle()"
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
              :size="width * 3"
              :color="template.color"
            />
            <div
              v-else
              class="number"
              :style="`color: ${template.color}; font-size:2rem`"
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
      dotMap: [
        { name: 'top', val: 10, transform: 'translateY', adj:'-' },
        { name: 'right', val: 10, transform: 'translateX', adj:'' },
        { name: 'bottom', val: 10, transform: 'translateY', adj:'' },
        { name: 'left', val: 10, transform: 'translateX', adj:'-' },
        { name: 'center', val: 50, transform: 'translateX', adj:'-' },
        { name: 'middle', val: 50, transform: 'translateY', adj:'-' }
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
      //mapping for dot style
      classes = classes.replaceAll('point-', '').split(' ')
      let positions = classes.reduce((acc, pos) => {
        let cssPos
        if (['middle', 'center'].includes(pos)) {
          cssPos = pos === 'middle' ? 'top' : 'left'
        } else cssPos = pos

        let adjust = this.dotMap.reduce((n, { name, val, transform, adj }) => {
            if (pos === name) return transform + `(${adj+val}%)`
            return n
          }, '')

        return {
          ...acc,
          [cssPos]:
            this.dotMap.reduce((n, { name, val }) => {
              if (pos === name) return val
              return n
            }, 0) + '%',
          transform: ('transform' in acc) ? acc.transform += ' ' + adjust  : adjust
        }
      }, {})

      return {
        'line-height': 1,
        ...positions
      }
    },
    widthStyle() {
      return {
        width: `${this.width}rem`,
        'transform-origin': `50% 50% -${this.width/2}rem`
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
  width: 25px;
  aspect-ratio: 1;
  cursor: pointer;
}

.dice {
  position: relative;
  width: 25px;
  aspect-ratio: 1;
  border-radius: 1px;
  transform-style: preserve-3d;
  transform-origin: 50% 50% -5px;
  /* transform: rotateX(180deg) rotateY(180deg); */
  transition: transform 2s ease-in-out;
}

.face {
  position: absolute;
  width: 25px;
  aspect-ratio: 1;
  border-radius: 1px;
  transform: rotateX(0deg) rotateY(180deg);
  transform-origin: 50% 50% -5px;
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
  /* width: 5px; */
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
  top: 2.5px;
}

.point-middle {
  top: 10px;
}

.point-bottom {
  bottom: 2.5px;
}

.point-left {
  left: 2.5px;
}

.point-center {
  left: 10px;
}

.point-right {
  right: 2.5px;
}

.roll-btn {
  padding: 1px 1.5px;
  border: none;
  border-radius: 1px;
  cursor: pointer;
  font-weight: bolder;
}
</style>