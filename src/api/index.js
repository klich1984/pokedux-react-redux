const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151'

export const getPokemons = async () => {
  try {
    let res = await fetch(URL)

    if (!res.ok) {
      throw {
        err: true,
        status: res.status,
        statusText: !res.statusText ? 'Ocurrio un error' : res.statusText,
      }
    }
    let json = await res.json()

    return json.results
  } catch (error) {
    console.log(error)
  }
}

export const getPokemonDetail = async (pokemon) => {
  try {
    const detailsPokemons = await fetch(pokemon.url)
    const jsonDetail = await detailsPokemons.json()

    return jsonDetail
  } catch (error) {
    console.log('Ocurrio un error', error)
  }
}
