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

  const getSpecie = async(id) => {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`
    const res = await axios.get(url)
    const specie = await res.data
    return specie
  }

  const spec = await getSpecie(params.pokemon)
  const chain = await spec.evolution_chain.url

  const evolutionChain = async(url) => {
    const res = await axios.get(url)
    const chain = await res.data
    if (chain) {
      return chain
    }
    return undefined
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