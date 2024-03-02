import React, { useEffect, useState } from "react";
import PokemonThumbnail from "./Components/PokemonThumbnail";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadPoke, setLoadPoke] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");

  const fetchPokemonData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
      return null;
    }
  };

  const getAllPokemons = async () => {
    const data = await fetchPokemonData(loadPoke);
    if (!data) return;

    setLoadPoke(data.next);

    const pokemonData = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetchPokemonData(pokemon.url);
        return res;
      })
    );

    setAllPokemons((prevPokemons) => [...prevPokemons, ...pokemonData]);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  useEffect(() => {
    console.log(allPokemons);
  }, [allPokemons]);

  return (
    <div className="app-container">
      <h1>PokéHub.</h1>

      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map((pokemon) => (
            <PokemonThumbnail
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              stat1={pokemon.stats[0].stat.name}
              stat2={pokemon.stats[1].stat.name}
              stat3={pokemon.stats[2].stat.name}
              stat4={pokemon.stats[3].stat.name}
              stat5={pokemon.stats[4].stat.name}
              stat6={pokemon.stats[5].stat.name}
              bs1={pokemon.stats[0].base_stat}
              bs2={pokemon.stats[1].base_stat}
              bs3={pokemon.stats[2].base_stat}
              bs4={pokemon.stats[3].base_stat}
              bs5={pokemon.stats[4].base_stat}
              bs6={pokemon.stats[5].base_stat}
            />
          ))}
        </div>
        <button className="load-more" onClick={getAllPokemons}>
          More Pokemons
        </button>
      </div>
    </div>
  );
}

export default App;
