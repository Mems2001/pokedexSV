<script>
	
  export let data
  
</script>

<nav class="navbar fixed z-20 shadow-lg flex justify-between bg-gradient-to-t from-red-950 to-red-700">
  <div class="flex w-auto">
    <a href="/pokedex" class="btn btn-ghost normal-case text-xl w-64">
      <img class="w-auto" alt="Pokédex" src='src/routes/pokedex/logo.png'/>
    </a>
  </div>
  <p>Welcome {data.username}!</p>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/">Team</a></li>
      <li tabindex="0">
        <!-- <a>
          Parent
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a> -->
        <ul class="p-2 bg-base-100">
          <!-- <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li> -->
        </ul>
      </li>
      <li><a href="/">Logout</a></li>
    </ul>
  </div>
</nav>

<slot></slot>