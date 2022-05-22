import { defineStore } from 'pinia'

export const useIconStore = defineStore('icons', {
    state: () => ({
        icons: [
            { name: 'heart', color: '#b33641' },
            { name: 'power', color: '#a88d1e' },
            { name: 'number', color: '#1e2aa8' },
        ]
    }),
    getters: {
        allIcons: state => state.icons,
    },
    actions: {
        getColor(icon)
        {
            return this.icons.reduce((color, { name, ...r }) =>
            {
                return icon == name ? r.color : color
            }, '')
        },
    },
})