<template>
    <div class="side">
        <dice-manager></dice-manager>
        <dice-result-feed></dice-result-feed>
    </div>
</template>
<script>
import  DiceManager from './Side/DiceManager'
import  DiceResultFeed from './Side/DiceResultFeed'

export default {
    name: 'SidePanel',
    components: {
        DiceManager,
        DiceResultFeed
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