import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, For } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemon";


const getLocalStoragePokemon = ():FavoritePokemon[] => {
    return JSON.parse(localStorage.getItem('favorites') ?? '[]') as FavoritePokemon[];
}


export const FavoritePokemons = () => {

    const [pokemons, setPokemons] =  createSignal(getLocalStoragePokemon())

    return (
        <>
        <div class="">
            <For each={pokemons()}>
                {
                    pokemon =>  <FavoritePokemonCard pokemon={pokemon} />
                }
            </For>
        </div>
        
        </>
    )
}