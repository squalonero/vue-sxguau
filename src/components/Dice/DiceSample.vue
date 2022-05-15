<template>
  <div class="diceWrapper">
    <div class="dice-container" :style="`width: ${width}vmin`">
      <div class="dice" ref="dice" :style="`width: ${width}vmin`">
        <div
          v-for="(face, pos) in template.schema"
          :key="pos"
          class="face"
          :class="`${pos} ${template.background}-bg`"
          :style="`width: ${width}vmin`"
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
  </div>
</template>
<script>
import { Dices } from './Dices'
import Icon from '../Icon/Icon.vue'

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
  created() {
    //get the current dice template, only first face
    this.template = Dices.filter(({ name, ...rest }) => {
      return name === this.tpl
    }).reduce((acc, { schema: { ...faces }, ...rest }) => {
      return {
        schema: {
          [Object.keys(faces).find((f) => faces[f].length > 0)]: Object.values(
            faces
          ).find((f) => f.length > 0) //get first nonEmpty face
        },
        ...rest
      }
    }, {})
  },
  watch: {
    template: {
      handler(v) {
        return v
      },
      deep: true
    }
  },
  data() {
    return {
      template: {},
      dotMap: [
        { name: 'top', val: 10, transform: 'translateY', adj: '-' },
        { name: 'right', val: 10, transform: 'translateX', adj: '' },
        { name: 'bottom', val: 10, transform: 'translateY', adj: '' },
        { name: 'left', val: 10, transform: 'translateX', adj: '-' },
        { name: 'center', val: 50, transform: 'translateX', adj: '-' },
        { name: 'middle', val: 50, transform: 'translateY', adj: '-' }
      ]
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
          if (pos === name) return transform + `(${adj + val}%)`
          return n
        }, '')

        return {
          ...acc,
          [cssPos]:
            this.dotMap.reduce((n, { name, val }) => {
              if (pos === name) return val
              return n
            }, 0) + '%',
          transform: 'transform' in acc ? (acc.transform += ' ' + adjust) : adjust
        }
      }, {})

      return {
        'line-height': 1,
        ...positions
      }
    }
  }
}
</script>
<style scoped>
/** Default DostylePosition */
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
  background: radial-gradient(circle at center, rgb(190, 0, 0), rgb(160, 0, 0));
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
  aspect-ratio: 1;
  align-self: center;
  justify-self: center;
}

.point {
  border-radius: 100%;
  background: #444;
  box-shadow: inset 5px 0 10px #222;
}

.roll-btn {
  padding: 1vmin 1.5vmin;
  border: none;
  border-radius: 1vmin;
  cursor: pointer;
  font-weight: bolder;
}
</style>
