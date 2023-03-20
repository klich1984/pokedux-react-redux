import { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [pokemons, setPokemons] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch(url)

        if (!res.ok) {
          // eslint-disable-next-line no-throw-literal
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? 'Ocurrio un error' : res.statusText,
          }
        }
        let json = await res.json()

        let arrayPokemons = []

        json?.results?.forEach(async (el) => {
          let res = await fetch(el.url),
            json = await res.json()

          // console.log(json)
          let pokemon = {
            id: json.id * 1,
            name: json.name,
            avatar: json.sprites.other.home.front_default,
          }
          // setPokemons((pokemons) => [...pokemons, pokemon])
          arrayPokemons.push(pokemon)
          setPokemons(arrayPokemons)
        })

        setIsPending(false)
        setError({ err: false })
      } catch (error) {
        console.log(error)
        setIsPending(true)
        setError(err)
      }
    }

    getData()
  }, [])

  return { pokemons, isPending, error }
}
