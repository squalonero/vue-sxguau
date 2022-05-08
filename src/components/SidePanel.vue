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
    flex: 1;
    border: 1px solid #fff;
}
</style>