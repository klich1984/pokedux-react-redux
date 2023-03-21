const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151'

export const getPokemons = async () => {
  try {
    let res = await fetch(URL)

    if (!res.ok) {
      // eslint-disable-next-line no-throw-literal
      throw {
        err: true,
        status: res.status,
        statusText: !res.statusText ? 'Ocurrio un error' : res.statusText,
      }
    }
    let json = await res.json()
    // console.log('🚀 ~ file: index.js:16 ~ getPokemons ~ json:', json)

    // json?.results?.forEach(async (el) => {
    //   let res = await fetch(el.url),
    //     json = await res.json()

    //   // console.log(json)
    //   let pokemon = {
    //     id: json.id * -1,
    //     name: json.name,
    //     avatar: json.sprites.front_default,
    //   }
    //   // console.log('🚀 ~ file: index.js:28 ~ json?.results?.forEach ~ pokemon:', pokemon)

    //   arrPokemons.push(pokemon)
    // })

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
