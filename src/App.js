import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PokemonCard from "./Components/PokemonCard/PokemonCard";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const pokemon1 = {
  name: "Pichu",
  type: "Electric",
  evolved: false,
  weight: 2,
  color: "yellow",
  image:
    "https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png",
  id: 0
};
const pokemon2 = {
  name: "Pikachu",
  type: "Eletric",
  evolved: true,
  weight: 6,
  color: "Yellow",
  image:
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngarts.com%2Fpt%2Fexplore%2F82425&psig=AOvVaw1dMF2qPZoNceCs3XZOxuFJ&ust=1666823764990000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOjD84Sr_PoCFQAAAAAdAAAAABAe",
  id: 1
};

function App() {
  const [pokemon, setPokemon] = useState(pokemon1);

  // Para fazer seus próximos pokemons, crie novos estados!

  return (
    <>
      <GlobalStyles />

      <FlexContainer>
        {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
        <PokemonCard
          pokemon={pokemon}
          setPokemon={setPokemon}
          pokemon2={pokemon2}
        />

        {/* <PokemonCard /> */}

        {/* Crie aqui seus próximos pokemons! */}
      </FlexContainer>
    </>
  );
}

export default App;
