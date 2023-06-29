export const getItem = (item) => {
  const pokemonsFavorite = localStorage.getItem(item)

  return JSON.parse(pokemonsFavorite) || []
}

export const setItem = (item, data) => {
  localStorage.setItem(item, JSON.stringify(data))
}
