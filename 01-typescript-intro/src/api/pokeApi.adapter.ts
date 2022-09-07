import axios from 'axios'
import { PokeapiResponse } from '../interfaces/pokeapi-response.interface'

export interface HttpAdapter {
  get<T>(url: string): Promise<T>
}
export class PokeApiFetchAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    // si el dia de mañana axios cambia y ahora se llama getRequest solo cambio aca y no en todo el codigo
    const resp = await fetch(url)
    const data: T = await resp.json()
    return data
  }
}

export class PokeApiAdapter implements HttpAdapter {
  private readonly axios = axios
  async get<T>(url: string): Promise<T> {
    // si el dia de mañana axios cambia y ahora se llama getRequest solo cambio aca y no en todo el codigo
    const { data } = await this.axios.get<T>(url)
    return data
  }
  async post(url: string, data: any) {}
  async patch(url: string, data: any) {}
  async delete(url: string) {}
}
