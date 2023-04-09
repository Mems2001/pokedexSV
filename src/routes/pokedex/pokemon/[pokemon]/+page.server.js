import axios from "axios"
import { user } from "../../../../stores/userStore"
import { redirect } from "@sveltejs/kit"

export const load = async({params}) => {

  const url = `https://pokeapi.co/api/v2/pokemon/${params.pokemon}`

  const pokemanLoad = async(url) => {
    const res = await axios.get(url)
    const poke = res.data
    return poke
  }

  
  const getSpecie = async(pokemon) => {
    try {
      const forId = await pokemanLoad(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      const res = await axios.get(forId.species.url)
      const specie = await res.data
      return specie
    } catch (err) {
      // console.log(err)
      return undefined
    }
    
  }

  const spec = await getSpecie(params.pokemon) 
  let chain
  if (spec) {
     chain = await spec.evolution_chain?.url
  } else {
    chain = undefined
  }

  const evolutionChain = async(url) => {
    try {
      const res = await axios.get(url)
      const chain = await res.data

      return chain
    } catch (err) {
      // console.log(err)
      return undefined
    }
  }

  return {
    pokeman: pokemanLoad(url),
    specie: getSpecie(params.pokemon),
    chain: evolutionChain(chain),
  }
}

export const actions = {
  logout: async(locals) => {
    user.set('')
    locals.user = undefined

    throw redirect(303 , '/')
  }
}