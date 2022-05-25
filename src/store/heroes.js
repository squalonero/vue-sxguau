import { defineStore } from 'pinia'
import Heroes from '../data/HEROES.json'

export const useHeroStore = defineStore('heroes', {
    state: () => ({
        heroes: Heroes
    }),
    getters: {
        allHeroes: state => state.heroes,
    },
    actions: {
        getHero(heroName)
        {
            return this.heroes.reduce((hero, { name, ...r }) =>
            {
                return heroName == name ? {name, ...r} : hero
            }, '')
        },
    },
})