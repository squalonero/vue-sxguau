import { defineStore } from 'pinia'
import { Conditions } from '@/data/conditions.js'

export const useConditionStore = defineStore('conditions', {
    state: () => ({
        conditions: Conditions,
        appliedConditions: []
    }),
    getters: {
        allConditions: state => state.conditions,
        appliedConditions: state => state.appliedConditions,
    },
    actions: {
        getCondition(conditionTag)
        {
            return this.conditions.reduce((condition, { tag, ...r }) =>
            {
                return conditionTag == tag ? r.condition : condition
            }, '')
        },
        randomCondition()
        {
            let conditions = this.allConditions().map((el) => el.name)
            let randomCondition = conditions[Math.floor(Math.random() * conditions.length)]
            this.applyCondition(randomCondition)
        },
        applyCondition(condition)
        {
            if (!this.appliedConditions.includes(condition)) this.appliedConditions.push(condition)
        },
        removeCondition(condition)
        {
            this.appliedConditions = this.appliedConditions.filter((e) => e.tag != condition.tag)
        },
        getAppliedConditions()
        {
            return this.appliedConditions
        },
        setAppliedConditions(conditions)
        {
            this.appliedConditions = [...conditions]
        }
    },
})