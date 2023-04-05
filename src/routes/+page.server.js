import { redirect } from "@sveltejs/kit"
import { user } from "../stores/userStore"

export const actions = {
  login: async({request}) => {
    const credentials = Object.fromEntries(await request.formData())

    try {
      // await locals.pb.collection('trainers').authWithPassword(credentials.username , credentials.password)
      // console.log({
      //   status: 'success',
      //   credentials
      // })
      user.set(credentials.username)
    } catch (err) {
      console.log(err)
      return {
        error: 'invalid username or password',
        data: {
          username: credentials.username
        }
      }
    }

    throw redirect(303, '/pokedex')
  }
}