// API.js
export const getPokemon = name =>
fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => res.json());
