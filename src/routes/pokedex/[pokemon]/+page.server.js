import axios from "axios"

export const load = async({params}) => {

  const url = `https://pokeapi.co/api/v2/pokemon/${params.pokemon}`

  const pokemanLoad = async(url) => {
    const res = await axios.get(url)
    const poke = res.data
    return poke
  }

  return {
    pokeman: pokemanLoad(url)
  }
}