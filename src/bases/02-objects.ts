export const pokemonIds = [1, 20, 30, 34, 66];

interface Pokemon {
    id: number, 
    name?: string
}

export const bulbasaur: Pokemon = {
    id: 1, 
    name: 'Bulbasaur'
}

export const squirtle: Pokemon = {
    id: 2, 
    name: 'Squirtle'
}

export const pokemons: Pokemon[] = [];

pokemons.push(bulbasaur, squirtle);