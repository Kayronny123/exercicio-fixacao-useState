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
function App(props) {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: "yellow",
    image: "https://bulbapedia.bulbagarden.net/wiki/Pichu_(Pok%C3%A9mon)",
    id: 0
  });
  const [pokemon1, setPokemon1] = useState({
    name: "Chamander",
    type: "Fire",
    evolved: false,
    weight: 3,
    color: "orange",
    image: "https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)",
    id: 1
  });

  // Para fazer seus próximos pokemons, crie novos estados!

  return (
    <>
      <GlobalStyles />

      <FlexContainer>
        {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
        <PokemonCard />

        <PokemonCard />

        {/* Crie aqui seus próximos pokemons! */}
      </FlexContainer>
    </>
  );
}

export default App;
