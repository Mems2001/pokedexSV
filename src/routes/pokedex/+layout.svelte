<script>
  import {pokeInfo} from '../../stores/pokedexStore'
	
  export let data

  let info
  $:{
    // console.log(info)
    pokeInfo.set(info)
  }
  
</script>

<nav class="navbar fixed z-20 shadow-lg flex justify-between bg-gradient-to-t from-red-950 to-red-700">
  <div class="flex w-auto">
    <a href="/pokedex" class="btn btn-ghost normal-case text-xl w-64">
      <img class="w-auto" alt="Pokédex" src='https://entregable5-mems.netlify.app/img/logo.png'/>
    </a>
  </div>
  <p>Welcome {data.username}!</p>
  <p>Currently displaying {$pokeInfo}</p>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/pokedex">Team</a></li>
      <li>
        <form>
          <select class="bg-transparent" bind:value={info}>
            <option class="bg-black">Pokémon</option>
            <option class="bg-black">Types</option>
            <option class="bg-black">Regions</option>
          </select>
        </form>
      </li>
      <!-- <li tabindex="0">
        <a>
          Pokémon
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2 bg-base-100">
          <li><a>Types</a></li>
          <li><a>Regions</a></li>
        </ul>
      </li> -->
      <li>
        <form method="post" action="?/logout">
          <button type="submit">Logout</button>
        </form>
      </li>
    </ul>
  </div>
</nav>

<slot></slot>