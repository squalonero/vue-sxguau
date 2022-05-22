import { defineStore } from 'pinia'

export const useDiceStore = defineStore('dices', {
    //works like data()
    state: () => ({
            results: []
    }),
    //works like computed
    getters: {
        feed: (state) => state.results,
    },
    //works like methods
    actions: {
        addResult(res)
        {
            this.results.unshift(res)
        },
    },
})