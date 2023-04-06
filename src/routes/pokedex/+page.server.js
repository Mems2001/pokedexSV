import { redirect } from "@sveltejs/kit"
import { user } from "../../stores/userStore"

export const actions = {
  logout: async(locals) => {
    user.set('')
    locals.user = undefined

    throw redirect(303 , '/')
  }
}