import axios from "axios"

export const load = async({params}) => {
  const url = `https://pokeapi.co/api/v2/type/${params.type}`

  const getType = async(url) => {
    const res = await axios.get(url)
    const type = await res.data
    return type
  }

  return {
    type: getType(url)
  }
}