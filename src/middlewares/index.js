import { SET_POKEMONS } from '../actions/types'

export const logger = (store) => (next) => (action) => {
  console.log(action)
  next(action)
}

export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [{ name: 'klich' }, ...actionInfo.action.payload]
  const updateActionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured },
  }
  next(updateActionInfo)
}

export const addNumberToName = (store) => (next) => (actionInfo) => {
  if (actionInfo.type === SET_POKEMONS) {
    const featured = [
      ...actionInfo.payload.map((pokemon, index) => ({
        ...pokemon,
        name: `${index + 1} - ${pokemon.name}`,
      })),
    ]
    const updateActionInfo = {
      ...actionInfo,
      payload: featured,
    }
    next(updateActionInfo)
  } else {
    next(actionInfo)
  }
}

export const upperCaseFirstLetterName = (store) => (next) => (actionInfo) => {
  if (actionInfo.type === SET_POKEMONS) {
    const featured = [
      ...actionInfo.payload.map((pokemon) => ({
        ...pokemon,
        name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
      })),
    ]

    const updateActionInfo = {
      ...actionInfo,
      payload: featured,
    }
    next(updateActionInfo)
  } else {
    next(actionInfo)
  }
}
