const getPokemon = async () => {
  try {
    const pokemonName = document
      .getElementById("searchName")
      .value.toLowerCase();
    const pokemonData = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!pokemonData.ok) {
      throw new Error("Could not find Pokémon");
    }

    const data = await pokemonData.json();
    const pokemonImage = data.sprites.front_default;
    const displayScreen = document.getElementById("screenTwo");

    displayScreen.innerHTML = `<img src="${pokemonImage}" id="pokemonImg" style="display: block;" alt="">`;
  } catch (error) {
    console.log(error);
    const displayScreen = document.getElementById("screenTwo");
    displayScreen.innerHTML =
      '<p style="color: red;text-align: center;margin-top: 65px;">Not found</p>';
  }
};
