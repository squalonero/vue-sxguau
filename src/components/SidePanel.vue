<template>
    <div class="side">
        <dice-manager></dice-manager>
    </div>
</template>
<script>
import  Dice from './Dice/Dice'
import  DiceManager from './DiceManager'

export default {
    name: 'SidePanel',
    components: {
        DiceManager
    },
    props: {

    },
    setup()
    {

    },
}
</script>
<style scoped>
.side {
    position: relative;
    z-index: 1;
    flex: 1;
    border: 1px solid #fff;
}
</style>