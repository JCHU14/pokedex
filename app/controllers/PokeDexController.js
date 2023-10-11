import { AppState } from "../AppState.js";
import { pokeDexService } from "../services/PokedexService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawPokemon() {
    const pokemons = AppState.pokemons
    let content = ''
    pokemons.forEach(pokemon => content += `<div class="text-center mb-2">
    <button onclick="app.PokeDexController.getPokemonByIndex('${pokemon.index}')" class="btn btn-light text-dark boxbrdr w-100">${pokemon.name}</button>
  </div>
  `)
    setHTML('pokemon', content)
}

export class PokeDexController {
    constructor() {
        this.getPokemon()

        AppState.on('account', _drawPokemon)
    }


    async getPokemon() {
        try {
            await pokeDexService.getPokemon()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }


    async getPokemonByIndex(pokemonIndex) {
        try {
            await pokeDexService.getPokeByIndex(pokemonIndex)
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }
}