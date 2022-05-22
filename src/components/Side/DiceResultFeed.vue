<template>
  <div id="diceResultFeed">
    <div>Storico risultati:</div>
    <div class="feed d-flex" v-for="result, n in feed" :key="n">
        <div class="result" v-for="v, icon of result" :key="icon">
          <icon :name="icon != 'number' ? icon : 'enlarge2'" :color="getColor(icon)" />
          <span class="result-val">: {{v}}</span>
        </div>
    </div>
  </div>
</template>
<script>
import Icon from '../Icon/Icon.vue';
export default {
    name: "DiceResultFeed",
    components: { Icon },
    props: {
        feed: {
            type: Array
        }
    },
    methods: {
      getColor(icon)
      {
        //@todo: access global store and get icon color from map
        console.log(this.$store.icons)
      }
    }

}
</script>
<style scoped>
#diceResultFeed {
  padding: 10px;
  color: #fff;
}
.result{
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
}
.feed{
  border: 1px solid #fff;
}
</style>
