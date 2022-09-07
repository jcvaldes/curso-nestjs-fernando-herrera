import axios from 'axios'
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface'

export class Pokemon {
  // public id: number
  // public name: string

  // constructor(id: number, name: string) {
  //   this.id = id
  //   this.name = name
  // }
  constructor(public readonly id: number, public name: string) {}

  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`
  }
  scream() {
    console.log(`${this.name.toUpperCase()}!!!`)
  }

  speak() {
    console.log(`${this.name}, ${this.name}`)
  }

  // getMoves() {
  //   return 10
  // }
  async getMoves(): Promise<Move[]> {
    // espera a que la promesa se resuelva
    const { data } = await axios.get<PokeapiResponse>(
      `https://pokeapi.co/api/v2/pokemon/4`
    )
    debugger
    return data.moves
  }
}

export const charmander = new Pokemon(1, 'Charmander')

// charmander.id = 2
// charmander.name = 'Charmmanderrr'
