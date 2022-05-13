<template>
    <!--  Dice -->
    <div class="pick">
        <h3>Aggiungi dadi:</h3>
        <div class="dice-sample-wrap" v-for="(dice, k) of availableDices" :key="k" @click="addDice(dice.name)">
            <dice-sample :width="5" :tpl="dice.name" />
        </div>
        <div class="roll-all" @click="rollAll">Tira i dadi</div>
        <div class="reset" @click="reset">Reset</div>
    </div>
    <div class="roll">
        <dice v-for="(dice, k) of dices" :key="k" :tpl="dice" :width="10" ref="dice" @result="catchResult" />
    </div>
</template>
<script>
import { Dices } from './Dice/Dices'
import Dice from './Dice/Dice.vue'
import DiceSample from './Dice/DiceSample.vue'

export default {
    name: 'DiceManager',
    components: {
        'dice': Dice,
        DiceSample
    },
    props: {
    },
    data()
    {
        return {
            availableDices: Dices, //.filter(({ name, ...rest }) => { return name != 'default' }),
            dices: []
        }
    },
    methods: {
        addDice(name)
        {
            this.dices.push(name);
        },
        rollAll()
        {
            this.$refs?.dice?.forEach(dice => dice.roll())
        },
        reset()
        {
            this.dices = [];
        },
        catchResult(result)
        {
            console.log(result)
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