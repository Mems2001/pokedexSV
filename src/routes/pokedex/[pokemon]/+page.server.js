import axios from "axios"
import { user } from "../../../stores/userStore"
import { redirect } from "@sveltejs/kit"

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

export const actions = {
  logout: async(locals) => {
    user.set('')
    locals.user = undefined

    throw redirect(303 , '/')
  }
}