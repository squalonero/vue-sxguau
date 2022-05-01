<template>
  <div class="ez-select">
    <select :name="name" :id="id" @change="changedSelect($event)" ref="select">
      <option value="">{{ this.defaultLabel }}</option>
      <option v-for="(opt, k) of data" :key="k" :value="opt.name">{{ opt.name }}</option>
    </select>
    <div class="ez-slect-fake">
      <div class="ez-select-selected-option" @click="this.dropDownOpen = !this.dropDownOpen">
        {{ this.selected || this.defaultLabel }}
      </div>
      <div class="ez-select-fake-list" v-if="this.dropDownOpen" :class="this.dropDownOpen ? 'open': ''">
        <input ref="search" class="search" type="text" v-model="search" @input="filterList" v-focus  />
        <div class="ez-select-fake-item" v-for="(opt, k) of searchList" :key="k" @click="changeTheSelect(opt.name)">{{ opt.name }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Ezselect",
  props: {
    data: Array,
    defaultLabel: String,
    id: String,
    name: String,
    resetOnSelect: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    dropDownOpen: function(){
      this.searchList = this.data.map((e) => {
        return { ...e }
      });
    }
  },
  data() {
    return {
      selected: "",
      search: "",
      searchList: this.data.map((e) => {
        return { ...e }
      }),
      dropDownOpen: false
    }
  },
  methods: {
    changedSelect($event) { //fallback in case of dropDownOpen:true
      console.log("changed")
      this.$emit("ez-select:select", $event, $event.target.value)
    },
    changeTheSelect(condition) {
      let selectedIndex = this.data.findIndex((option) => option.name === condition)
      this.$refs.select.options[selectedIndex + 1].selected = true
      this.selected = this.resetOnSelect ? this.defaultLabel : condition
      this.$refs.select.selectedIndex = this.resetOnSelect ? null : selectedIndex + 1
      this.dropDownOpen = false
      this.search = ''
      this.$emit("ez-select:select", condition)
    },
    filterList() {
      this.searchList = this.data.filter((elem) => elem.name.toLowerCase().includes(this.search.toLowerCase()))
    },
  }
}
</script>
<style scoped>
select{
  display: none;
}
.ez-select-selected-option {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #aaa;
  padding: 3px 5px;
}
.ez-select-fake-list {
  background: rgba(255, 255, 255, 0.9);
  position: absolute;
  inset: 100% 0 auto 0;
  visibility: hidden;
  pointer-events: none;
  opacity: 0;
  height: 0;
  transition: 250ms ease;
  z-index: 2;
}
.ez-select-fake-list.open{
  height: auto;
  opacity: 1;
  pointer-events: all;
  visibility: visible;
}
.ez-select-fake-item {
  cursor: pointer;
  transition: 150ms;
  padding: 0 10px;
}
.ez-select-fake-item:hover {
  background: #333;
  color: #fff;
}
.ez-slect-fake
{
  position: relative;
}
.search,
.search:focus,
.search:focus-visible,
.search:active {
  margin: 0 10px;
  border: none;
  outline: none;
  max-width: calc(100% - 20px);
}
</style>
