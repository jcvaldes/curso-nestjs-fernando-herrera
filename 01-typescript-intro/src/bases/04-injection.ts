import {
  HttpAdapter,
  PokeApiAdapter,
  PokeApiFetchAdapter
} from '../api/pokeApi.adapter'
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface'

export class Pokemon {
  constructor(
    public readonly id: number,
    public name: string,
    // Todo: inyectar dependencias
    // private http: PokeApiAdapter
    private http: HttpAdapter
  ) {}
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`
  }
  scream() {
    console.log(`${this.name.toUpperCase()}!!!`)
  }
  speak() {
    console.log(`${this.name}, ${this.name}`)
  }
  async getMoves(): Promise<Move[]> {
    const data = await this.http.get<PokeapiResponse>(
      'https://pokeapi.co/api/v2/pokemon/4'
    )
    // console.log(data.moves)
    debugger
    console.log('moves', data.moves)
    return data.moves
  }
}

const pokeApiAxios = new PokeApiAdapter()
const pokeApiFetch = new PokeApiFetchAdapter()

export const charmander = new Pokemon(4, 'Charmander', pokeApiAxios)
export const bulbassaur = new Pokemon(4, 'Bulbassaur', pokeApiFetch)

charmander.getMoves()
