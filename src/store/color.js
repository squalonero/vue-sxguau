import { defineStore } from 'pinia'

export const useColorStore = defineStore('colors', {
    state: () => ({
        colors: [
            { name: 'red', color: '#b33641' },
            { name: 'yellow', color: '#a88d1e' },
            { name: 'blue', color: '#1e2aa8' },
            { name: 'green', color: '#26873c' },
        ]
    }),
    getters: {
        allColors: state => state.colors,
    },
    actions: {
        getColor(colorName)
        {
            return this.colors.reduce((color, { name, ...r }) =>
            {
                return colorName == name ? r.color : color
            }, '')
        },
    },
})