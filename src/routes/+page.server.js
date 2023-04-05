import { redirect } from "@sveltejs/kit"

export const actions = {
  login: async({locals , request}) => {
    const credentials = Object.fromEntries(await request.formData())

    try {
      await locals.pb.collection('trainers').authWithPassword(credentials.username , credentials.password)
      console.log({
        status: 'success',
        credentials
      })
    } catch (err) {
      console.log(err)
      // throw error(500, 'Something went wrong')
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