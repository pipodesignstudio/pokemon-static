import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, For } from "solid-js";


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
                    pokemon => <h1>{pokemon.name}</h1>
                }
            </For>
        </div>
        
        </>
    )
}