<script>
  export let form
</script>

<div class="flex flex-col w-screen h-screen justify-center items-center">
  <form action="?/create" method="post" class="relative flex flex-col gap-y-4 h-3/5 w-auto justify-evenly bg-red-700 px-8 rounded-2xl shadow-2xl">
    <h1 class="place-self-center text-xl">Trainer's register</h1> 
    <label for="username" class='input-group input-group-md'>
      <span class="w-40 justify-center">Username</span>
      <input class="w-60 px-3" type="text" name='username' placeholder="Choose your username"/>
    </label>
    <label for="email" class='input-group input-group-md'>
      <span class="w-40 justify-center">email</span>
      <input class="w-60 px-3" type="email" name='email' placeholder="email"/>
    </label>
    <label for="password" class='input-group input-group-md'>
      <span class="w-40 justify-center">Password</span>
      <input class="w-60 px-3" type='password' name="password" placeholder="Password"/>
    </label>
    <label for="passwordConfirm" class="input-group input-group-md">
      <span class="w-40 justify-center">Confirm password</span>
      <input class="w-60 px-3" type='password' name="passwordConfirm" placeholder="Confirm password"/>
    </label>
    <button type="submit" class="glass btn btn-primary w-1/2 place-self-center">Register</button>
    <a href="/" class="absolute btn btn-circle btn-sm top-0 right-0">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </a>
  </form>
</div>
