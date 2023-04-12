import axios from "axios"

export const load = async ({locals , url}) => {

  const loadPokemon = async(dir) => {
    const limit = parseInt(dir.searchParams.get('limit')) || 24
    const offset = parseInt(dir.searchParams.get('offset')) || 0
    
    // const url = `https://pokeapi.co/api/v2/pokemon`
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    // console.log(url)
    const res = await axios.get(url)
    return {
      pokemon: res.data.results,
      total: {
        count: res.data.count,
        limit,
        offset
      }
    }
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

  const loadUser = async() => {
    const res = await locals.user
    // console.log(res , 'layout')
    return res
  }

  if (loadUser() !== undefined) {
    return {
      username: loadUser(),
      pokemon: loadPokemon(url),
      types: loadTypes(),
      regions: loadRegions()
    }
  }
  
  return {
    user: undefined
  }
}