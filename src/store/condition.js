import { defineStore } from 'pinia'
import { Conditions } from '@/data/conditions.js'

export const useConditionStore = defineStore('conditions', {
    state: () => ({
        conditions: Conditions,
        appliedConditions: [],
    }),
    getters: {
        allConditions: state => state.conditions,
        getAppliedConditions: (state) => state.appliedConditions,
    },
    actions: {
        getCondition(conditionTag)
        {
            return this.conditions.reduce((condition, { tag, ...r }) =>
            {
                return conditionTag == tag ? r.condition : condition
            }, '')
        },
        setAppliedConditions(conditions)
        {
            this.appliedConditions = [...conditions]
        }
    },
})