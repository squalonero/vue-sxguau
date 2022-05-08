<template>
  <div class="diceWrapper">
    <div class="dice-container" :style="`width: ${ width }vmin`" @click="canRoll && roll()">
      <div class="dice" ref="dice" :style="`width: ${ width }vmin`">
        <div v-for="(face, pos) in template.schema" :key="pos" class="face"
          :class="`${ pos } ${ template.background }-bg`"
          data-id="" :style="faceStyle()">
          <div v-for="(dotClass, k) of face" :key="k" :class="dotClass[1]" :style="dotStylePosition(dotClass[1])">
            <icon v-if="typeof dotClass[0] === 'string'" :name="dotClass[0]" :size="width * 2"
              :color="template.color" />
            <div v-else class="number" :style="`color: ${ template.color }; font-size:${ width / 4 }rem`">{{ dotClass[0] }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="roll-btn" ref="rollbtn" @click="canRoll && roll()">ROLL</button>
  </div>
</template>
<script>
import { Dices } from './Dices';
import Icon from '../Icon/Icon.vue';

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
  created()
  {
    this.template = Dices.find(({ name, ...rest }) =>
    {
      if (name === this.tpl) return { name, ...rest }
    });
    // console.log(this.template)
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
      rollMax: 8,
      angleX: 0,
      angleY: 0,
      result: 1,
      delay: 0,
      canRoll: true,
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
        front: ['point point-top point-right', 'point point-top point-left', 'point point-middle point-center', 'point point-bottom point-right', 'point point-bottom point-left'],
        back: ['point point-top point-right', 'point point-bottom point-left'],
        left: ['point point-top point-right', 'point point-middle point-center', 'point point-bottom point-left'],
        right: ['point point-top point-right', 'point point-top point-left', 'point point-bottom point-right', 'point point-bottom point-left']
      },
      template: {}
    }
  },
  methods: {
    dotStylePosition(classes)
    {
      classes = classes.replaceAll('point-', '').split(' ');
      let positions = classes.reduce((acc, pos) =>
      {
        let cssPos = pos;
        if (['middle', 'center'].includes(pos))
        {
          cssPos = (pos === 'middle') ? 'top' : 'left'
        }
        return {
          ...acc,
          [cssPos]: (['top', 'bottom', 'left', 'right'].includes(pos) ? this.width / 10 : this.width * 10 / 25) + 'vmin'
        }
      }, {})

      return {
        width: `${ this.width / 5 }vmin`,
        ...positions
      }
    },
    faceStyle(){
      return {
        width: `${ this.width }vmin`,
        "transform-origin": `50% 50% ${-12.5*this.width/25}vmin`
      }
    },
    getClasses(classes)
    {
      if (typeof classes[0] === 'string')
        return classes.join(' ')

      return classes[1]
    },
    getRandomInt(max)
    {
      return Math.floor(Math.random() * max)
    },
    roll()
    {
      this.canRoll = false

      const xTurn = 4 + this.getRandomInt(this.rollMax),
        yTurn = 4 + this.getRandomInt(this.rollMax)

      this.delay = Math.max(xTurn, yTurn) * 250

      this.angleX += 90 * xTurn
      this.angleY += 90 * yTurn

      // balancing the results
      if (this.angleX % 180)
      {
        this.getRandomInt(4) > 1 && (this.angleX += 90)
      }

      this.$refs.dice.style.transform = 'rotateX(' + this.angleX + 'deg) rotateY(' + this.angleY + 'deg)'
      this.$refs.dice.style.transitionDuration = this.delay + 'ms'

      let x = this.angleX % 360,
        y = this.angleY % 360

      let result
      if (x === 0 || x === 180)
      {
        switch ((x + y) % 360)
        {
          case 0:
            result = 1
            break
          case 90:
            result = 5
            break
          case 180:
            result = 6
            break
          case 270:
            result = 2
            break
          default:
            console.error(123456)
        }
      } else if (x === 90)
      {
        result = 4
      } else if (x === 270)
      {
        result = 3
      }
      console.log('result:', result)
      setTimeout(() => (this.canRoll = true), this.delay)
      return result
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
  transform-origin: 50% 50% -12.5vmin;
  /* transform: rotateX(180deg) rotateY(180deg); */
  transition: transform 2s ease-in-out;
}

.face {
  position: absolute;
  width: 25vmin;
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