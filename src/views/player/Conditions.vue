<template>
  <!-- Conditions -->
  <div class="heroSection conditions">
    <div class="conditionsActions">
      <ezselect
        :data="cStore.allConditions"
        defaultLabel="Scegli una Condizione"
        name="conditions"
        id="conditions"
        :resetOnSelect="true"
        @ez_select:select="applyCondition"
      ></ezselect>
      <div class="buttonWrapper randomCondition">
        <button role="button" @click="randomCondition">
          <span>Random</span>
          <icon name="dice" :size="20" color="#b33641" />
        </button>
      </div>
    </div>
    <div class="conditionsWrapper">
      <!-- Applied Conditions -->
      <div
        v-for="(condition, k) of cStore.getAppliedConditions"
        :key="k"
        class="condition"
      >
        <div class="conditionName">{{ condition }}</div>
        <div class="actionWrap">
          <icon name="book" @click="readCondition(condition)"></icon>
          <icon
            color="#b33641"
            name="cross"
            @click="removeCondition(condition)"
          ></icon>
        </div>
      </div>
    </div>
    <modal
      :show="this.modalShow"
      :title="this.modalData.title"
      :contents="this.modalData.contents"
      :images="this.modalData.images"
      @modal:close="modalClose"
    ></modal>
  </div>
</template>
<script>
import Ezselect from '@/components/Form/Ezselect.vue'
import Icon from '@/components/Icon/Icon.vue'
import Modal from '@/components/Modal.vue'
import { useConditionStore } from '@/store/condition.js'
import { mapWritableState } from 'pinia'
import { MutationType } from 'pinia'
import { storeToRefs } from 'pinia'

export default {
  name: 'Conditions',
  components: {
    Ezselect,
    Icon,
    Modal
  },
  setup() {
    const cStore = useConditionStore()
    cStore.$subscribe(
      (mutation, state) => {
        localStorage.setItem('appliedConditions', JSON.stringify(state.appliedConditions))
      },
      { detached: true }
    )
    return {
      cStore
    }
  },
  watch: {
    appliedConditions: {
      handler(newVal) {
        localStorage.setItem('appliedConditions', JSON.stringify(newVal))
      },
      deep: true
    }
  },
  data() {
    return {
      modalShow: false,
      modalData: {}
    }
  },
  computed: {
    ...mapWritableState(useConditionStore, {
      appliedConditions: 'appliedConditions'
    })
  },
  methods: {
    randomCondition() {
      let conditions = this.conditions.map((el) => el.name)
      let randomCondition = conditions[Math.floor(Math.random() * conditions.length)]
      this.applyCondition(randomCondition)
    },
    applyCondition(condition) {
      let l = localStorage.getItem('appliedConditions')
      console.log('loggin l...')
      console.log(l)
      if (!this.appliedConditions.includes(condition))
        this.appliedConditions.push(condition)
      else console.log('Condition already applied')
    },
    removeCondition(condition) {
      this.appliedConditions = this.appliedConditions.filter(
        (e) => e.tag != condition.tag
      )
    },
    readCondition(condition) {
      let cond = this.cStore.conditions.find((e) => e.name === condition)
      this.modalOpen({
        title: cond.name,
        contents: [cond.desc, cond.monster_desc],
        images: {
          front: `/assets/images/conditions/filtered/${cond.tag}_front.png`,
          back: `/assets/images/conditions/filtered/${cond.tag}_back.png`
        }
      })
      this.$emit('modal:open', {
        title: cond.name,
        contents: [cond.desc, cond.monster_desc],
        images: {
          front: `/assets/images/conditions/filtered/${cond.tag}_front.png`,
          back: `/assets/images/conditions/filtered/${cond.tag}_back.png`
        }
      })
    },
    modalOpen(content) {
      this.modalData = content
      this.modalShow = true
    },
    modalClose() {
      this.modalShow = false
      this.modalData = {}
    }
  }
}
</script>
<style scoped>
.conditionsWrapper {
  flex: 1;
  max-height: 100%;
  overflow: auto;
  position: relative;
}
.conditionsWrapper > :nth-child(1) {
  padding-top: 40px;
}
.conditions {
  flex: 1;
  padding: 10px;
  max-height: 100%;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  position: relative;
}
.condition {
  margin-top: 8px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #222;
  padding: 5px 0;
}
.condition svg {
  cursor: pointer;
}
.condition .actionWrap > * {
  margin: 0 5px;
}
.conditionsActions {
  display: flex;
  align-items: center;
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0; */
  padding-bottom: 10px;
  z-index: 2;
}
.randomCondition {
  /* margin-left: auto; */
}
.randomCondition button,
.randomCondition svg {
  background: #b33641;
  color: #fff;
}
</style>