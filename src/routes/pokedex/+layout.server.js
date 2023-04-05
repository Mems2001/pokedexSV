import axios from "axios"

export const load = async ({locals}) => {

  const loadPokemon = async() => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=48'
    const res = await axios.get(url)
    return res.data.results
  }

  const loadTypes = async() => {
    const url = 'https://pokeapi.co/api/v2/type'
    const res = await axios.get(url)
    // console.log(res.data)
    return res.data.results
  }

  const loadRegions = async() => {
    const url = 'https://pokeapi.co/api/v2/region'
    const res = await axios.get(url)
    return res.data.results
  }

  if (locals.user) {
    // console.log(locals.user)
    return {
      user: locals.user,
      pokemon: loadPokemon(),
      types: loadTypes(),
      regions: loadRegions()
    }
  }
  
  return {
    user: undefined
  }
}