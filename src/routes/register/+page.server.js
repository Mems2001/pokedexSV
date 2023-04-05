import { error, redirect } from "@sveltejs/kit"

export const actions = {
  create: async({request , locals}) => {
    const trainer = Object.fromEntries( await request.formData())

    console.log(trainer)

    try {
      await locals.pb.collection('trainers').create(trainer)
    } catch (err) {
      console.log(err)
      throw error(500, err)
    }

    throw redirect(303 , '/')
  }
}