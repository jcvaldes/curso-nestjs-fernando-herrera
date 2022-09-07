export const pokemonsIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

pokemonsIds.push('sdsdadadsd')

interface Pokemon {
  id: number
  name: string
  age?: number
}

export const bulbassaur: Pokemon = {
  id: 1,
  name: 'Bulbassaur',
  age: 2
}

export const charmander: Pokemon = {
  id: 2,
  name: 'Charmander',
  age: 4
}

export const pokemons: Pokemon[] = [bulbassaur, charmander]

console.log(pokemonsIds)
console.log(pokemons)
