<script>
	import { enhance , applyAction } from "$app/forms";
  import { invalidateAll } from '$app/navigation'
  import {z} from 'zod';
  import toast from 'svelte-french-toast';

  export let form

  let trainerName = ''
  
  $: {
    // console.log(form?.data)
    if (form?.error) {
      toast.error(form.error)
    }
  }
  $: errorUser = false
  $: errorPass = false

  const scheme = z.object({
    username: z.string().min(3).max(16).trim(),
    // password: z.string().min(5).max(16).trim()
  })

  const handleSubmit = ({ form , action , data , cancel}) => {
    const {username , password} = Object.fromEntries(data)

    try {
      const result = scheme.parse({username , password})
    } catch (err) {
      const {fieldErrors} = err.flatten()
      // console.log(fieldErrors)
      cancel ()
      const usernameError = fieldErrors?.username ? fieldErrors.username[0] : ''
      const passwordError = fieldErrors?.password ? fieldErrors.password[0] : ''
      if (passwordError) {
        errorPass = true
        toast.error(`Password: ${passwordError}`)
      }
      if (usernameError) {
        errorUser = true
        toast.error(`Username: ${usernameError}`)
      }
    }

    return async({result , update}) => {
      switch (result.type) {
        case 'redirect':
          // console.log(result.type)
          toast.success('Welcome trainer')
          // update()
          form.reset()
          await invalidateAll()
          await applyAction(result)
          // redirect(303 , '/pokedex')
          break
        default: break
      }
    }

  }
</script>

<div class="flex flex-col items-center justify-evenly h-screen w-screen">
  <h1 class="text-2xl">Please <a href="/register" class="btn btn-sm" disabled>register</a> or <a href="/" class="btn btn-sm">login</a> to continue</h1>

  <div class='dex-home flex flex-col relative'>

      <div class="place-self-center w-40 text-center relative top-12 flex flex-col gap-y-5 text-lg">
        <span>Trainer's Name:</span>
        <b>{trainerName}</b>
      </div>

      <form action="?/login" method="post" use:enhance={handleSubmit}
      class="flex flex-col items-center absolute inset-x-1/2 bottom-6 gap-y-3">
        <label for="username">
          <input type="text" name="username" placeholder="Type your username" 
          class='w-40 input input-ghost input-sm {errorUser ? 'input-error' : ''}' bind:value={trainerName}/>
        </label>
        <label for="password">
          <input type="password" name="password" placeholder="password" disabled
          class='w-40 input input-ghost input-sm {errorPass ? 'input-error' : ''}'/>
        </label>
        <button type="submit" class="btn btn-sm btn-outline btn-error w-12" name="submit">Go!</button>
      </form>
    </div>
</div>



<style>
  .dex-home {
    background-image: url("../dex.png");
    background-size: cover;
    height: 370px;
    width: 500px;
  }
</style>