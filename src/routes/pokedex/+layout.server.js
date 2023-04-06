import { redirect } from "@sveltejs/kit"
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

  const loadUser = async() => {
    const res = await locals.user
    // console.log(res , 'layout')
    return res
  }

  // if (loadUser() !== undefined) {
    return {
      username: loadUser(),
      pokemon: loadPokemon(),
      types: loadTypes(),
      regions: loadRegions()
    }
  // }
  
  // return {
  //   user: 'Trainer'
  // }
}