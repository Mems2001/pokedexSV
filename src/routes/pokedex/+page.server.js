import { redirect } from "@sveltejs/kit"
import { user } from "../../stores/userStore"
import { newStore} from "../../stores/searchStore"

export const actions = {
  logout: async(locals) => {
    user.set('')
    locals.user = undefined

    throw redirect(303 , '/')
  },

  setSearch: async({request}) => {
    const search = Object.fromEntries(await request.formData())

    newStore(search.searchTerm)
  }
}