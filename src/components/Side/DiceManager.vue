<template>
  <!--  Dice -->
  <div class="pick">
    <h3>Aggiungi dadi:</h3>
    <div
      class="dice-sample-wrap"
      v-for="(dice, k) of availableDices"
      :key="k"
      @click="addDice(dice.name)"
    >
      <dice-sample :width="5" :tpl="dice.name" />
    </div>
    <div class="roll-all" @click="rollAll">Tira i dadi</div>
    <div class="reset" @click="reset">Reset</div>
  </div>
  <div class="roll">
    <dice
      v-for="(dice, k) of dices"
      :key="k"
      :tpl="dice"
      :width="5"
      ref="dice"
      @result="catchResult"
    />
  </div>
</template>
<script>
import { Dices } from './../Dice/Dices'
import Dice from './../Dice/Dice.vue'
import DiceSample from './../Dice/DiceSample.vue'

export default {
  name: 'DiceManager',
  components: {
    dice: Dice,
    DiceSample
  },
  props: {},
  data() {
    return {
      availableDices: Dices, //.filter(({ name, ...rest }) => { return name != 'default' }), exclude default template
      dices: [],
      v_result: {}
    }
  },
  watch: {
    v_result: {
      handler(v) {
        return v
      },
      deep: true
    }
  },
  computed: {
    result: {
      get: function () {
        return this.v_result
      },
      set: function (v) {
        this.v_result = v
        // if (v== {}) this.v_result = {}
        // else {
        //   for (const [key, value] of Object.entries(v)) {
        //     if (key in this.v_result) this.v_result[key] += value
        //     else this.v_result[key] = value
        //   }
        // }
      }
    }
  },
  methods: {
    addDice(name) {
      this.dices.push(name)
    },
    async rollAll() {
      this.result = {} //reset result total
      await Promise.all(
        this.$refs?.dice?.map(async (dice) => {
          return await dice.roll().then(({ number, face, diceName }) => {
            return (
              this.availableDices
                //get current face array
                .reduce((acc, { name, schema, ...rest }) => {
                  if (name === diceName) {
                    return [...schema[face].map((e) => e[0])]
                  }
                  return acc
                }, [])
                //group same icons and count them
                .reduce((result, iconName) => {
                  if (typeof iconName === 'number') {
                    return { number: iconName, ...result }
                  }
                  if (iconName in result)
                    return { [iconName]: result[iconName]++, ...result }
                  else
                    return {
                      [iconName]: 1,
                      ...result
                    }
                }, {})
            )
            //console.log(this.result)
          })
        })
      ).then((results) => {
          /**
           * sum same values if multiple dices by icon name
           */
        results.forEach((res) => {
          for (const [key, value] of Object.entries(res)) {
            if (key in this.v_result) this.v_result[key] += value
            else this.v_result[key] = value
          }
        })
        this.$emit('dices:result', this.result)
      })
    },
    reset() {
      this.dices = []
    },
    catchResult(number, face, diceName) {
      this.result = this.availableDices
        //get current face array
        .reduce((acc, { name, schema, ...rest }) => {
          if (name === diceName) {
            return [...schema[face].map((e) => e[0])]
          }
          return acc
        }, [])
        //group same icons and count them
        .reduce((result, iconName) => {
          if (typeof iconName === 'number') {
            return { number: iconName, ...result }
          }
          if (iconName in result) return { [iconName]: result[iconName]++, ...result }
          else
            return {
              [iconName]: 1,
              ...result
            }
        }, {})
    }
  }
}
</script>
<style scoped>
.pick h3 {
  color: #fff;
}

.pick {
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
  flex-wrap: wrap;
}

.dice-sample-wrap {
  margin: 0 10px;
}

.roll {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  position: relative;
  padding: 10px;
}

.roll-all,
.reset {
  position: relative;
  cursor: pointer;
  display: inline;
  background: #fff;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 10px;
}
</style>