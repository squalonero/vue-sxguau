<template>
  <div class="ez_select">
    <select :name="name" :id="id" @change="changedSelect($event)" ref="select">
      <option value="">{{ this.defaultLabel }}</option>
      <option v-for="(opt, k) of data" :key="k" :value="opt.name">{{ opt.name }}</option>
    </select>
    <div class="ez_slect_fake">
      <div class="ez_select_selected_option" @click="this.dropDownOpen = !this.dropDownOpen">
        {{ this.selected || this.defaultLabel }}
      </div>
      <div class="ez_select_fake_list" v-if="this.dropDownOpen" :class="this.dropDownOpen ? 'open' : ''">
        <div class="d_flex ez_select_search_wrap">
          <input ref="search" placeholder="Filtra..." class="search" type="text" v-model="search" @input="filterList" v-focus />
        </div>
        <div class="ez_select_fake_item" v-for="(opt, k) of searchList" :key="k" @click="changeTheSelect(opt.tag)">{{ opt.name }}</div>
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
    dropDownOpen: function () {
      this.searchList = this.data.map((e) => {
        return { ...e }
      })
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
    changedSelect($event) {
      //fallback in case of dropDownOpen:true
      console.log("changed")
      this.$emit("ez_select:select", $event, $event.target.value)
    },
    changeTheSelect(conditionTag) {
      let selectedIndex = this.data.findIndex((option) => option.tag === conditionTag)
      this.$refs.select.options[selectedIndex + 1].selected = true
      this.selected = this.resetOnSelect ? this.defaultLabel : conditionTag
      this.$refs.select.selectedIndex = this.resetOnSelect ? null : selectedIndex + 1
      this.dropDownOpen = false
      this.search = ""

      let result = this.data.find((option) => option.tag === conditionTag)
      this.$emit("ez_select:select", {name: result.name, tag: result.tag})
    },
    filterList() {
      this.searchList = this.data.filter((elem) => elem.name.toLowerCase().includes(this.search.toLowerCase()))
    }
  }
}
</script>
<style scoped>
select {
  display: none;
}
.ez_select_selected_option {
  cursor: pointer;
  background: rgba(255, 255, 255, 1);
  border: 1px solid #aaa;
  padding: 3px 5px;
}

.ez_select_fake_list {
  background: #eee;
  position: absolute;
  inset: 100% 0 auto 0;
  visibility: hidden;
  pointer-events: none;
  opacity: 0;
  height: 0;
  transition: 250ms ease;
  z-index: 2;
}
.ez_select_fake_list.open {
  height: auto;
  opacity: 1;
  pointer-events: all;
  visibility: visible;
}
.ez_select_fake_item {
  cursor: pointer;
  transition: 150ms;
  padding: 0 10px;
}
.ez_select_fake_item:hover {
  background: #333;
  color: #fff;
}
.ez_slect_fake {
  position: relative;
  border-radius: 5px;
}
.ez_select_search_wrap {
  padding: 5px 8px;
}
.search,
.search:focus,
.search:focus-visible,
.search:active {
  margin: 0 auto;
  border: none;
  border-bottom: 1px solid #aaa;
  outline: none;
  max-width: calc(100% - 10px);
}
</style>
