import { AppState } from "../AppState.js";
import { Pokemon } from "../models/PokeDex.js";
import { pokeApi } from "./AxiosService.js";





class PokeDexService {
    async getPokeByIndex(pokemonName) {
        const res = await pokeApi.get(`${pokemonName}`)
        console.log('got pokemon', res.data);
        const newPokemon = new Pokemon(res.data)
        AppState.activePokemon = newPokemon
    }


    async getPokemon() {
        const res = await pokeApi.get('pokemon')
        console.log('got pokemon', res.data)
        AppState.pokemons = res.data.results
    }
}

export const pokeDexService = new PokeDexService