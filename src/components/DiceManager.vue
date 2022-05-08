<template>
    <!--  Dice -->
    <dice tpl="blue" />
    <dice tpl="red" />
    <dice tpl="grey" />
    <dice tpl="black" />
    <dice tpl="brown" />

    <!-- <dice-sample :width="10" tpl="blue" /> -->
    <!-- <dice-sample :width="10" tpl="red" />
    <dice-sample :width="10" tpl="grey" />
    <dice-sample :width="10" tpl="black" />
    <dice-sample :width="10" tpl="brown" /> -->
</template>
<script>
import Dice from './Dice/Dice.vue'
import DiceSample from './Dice/DiceSample.vue'

export default {
    name: 'DiceManager',
    components: {
        Dice, DiceSample
    },
    props: {
        Dices: [
            'blue',
            'red',
            'grey',
            'brown',
            'black',
        ]
    },
    setup()
    {

    },
}
</script>
<style scoped>
</style>