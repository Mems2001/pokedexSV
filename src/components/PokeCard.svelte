<script>
  import axios from 'axios'

  export let pokemanB
  let pokeman
  $:{
    pokeman = pokemanB
    // console.log(pokeman)
  }

  const loadPoke = async(url) => {
    try {
      const res = await axios.get(url)
      return res.data
    } catch (err) {
      throw new Error(err)
    }
  }

  const color = (type) => {
    switch (type) {
      case 'fire':
        return 'red-600'
      case 'grass':
        return 'green-700'
      case 'water':
        return 'cyan-800'
      case 'bug':
        return 'lime-700'
      case 'normal':
        return 'rose-900'
      case 'poison':
        return 'fuchsia-900'
      case 'electric':
        return 'amber-500'
      case 'ground':
        return 'yellow-800'
      case 'fairy':
        return 'pink-600'
      case 'fighting':
        return 'red-900'
      case 'psychic':
        return 'rose-600'
      case 'rock':
        return 'amber-950'
      case 'ice':
        return 'cyan-500'
      case 'ghost':
        return 'violet-600'
      case 'dragon':
        return 'violet-900'
      case 'dark':
        return 'zinc-950'
      case 'steel':
        return 'slate-500'
      case 'flying':
        return 'blue-400'
    }
  }

  const bgColor = (type) => {
    switch(type) {
      case 'fire':
        return 'bg-red-600'
      case 'grass':
        return 'bg-green-700'
      case 'water':
        return 'bg-cyan-800'
      case 'bug':
        return 'bg-lime-700'
      case 'normal':
        return 'bg-rose-900'
      case 'poison':
        return 'bg-fuchsia-900'
      case 'electric':
        return 'bg-amber-500'
      case 'ground':
        return 'bg-yellow-800'
      case 'fairy':
        return 'bg-pink-600'
      case 'fighting':
        return 'bg-red-900'
      case 'psychic':
        return 'bg-rose-600'
      case 'rock':
        return 'bg-amber-950'
      case 'ice':
        return 'bg-cyan-500'
      case 'ghost':
        return 'bg-violet-600'
      case 'dragon':
        return 'bg-violet-900'
      case 'dark':
        return 'bg-zinc-950'
      case 'steel':
        return 'bg-slate-500'
      case 'flying':
        return 'bg-blue-400'
    }
  }

  const ringColor = (type) => {
    if (type != 'undefined') {
      switch (type) {
      case 'fire':
        return 'ring-4 ring-inset ring-red-600'
      case 'grass':
        return 'ring-4 ring-inset ring-green-700'
      case 'water':
        return 'ring-4 ring-inset ring-cyan-800'
      case 'bug':
        return 'ring-4 ring-inset ring-lime-700'
      case 'normal':
        return 'ring-4 ring-inset ring-rose-900'
      case 'poison':
        return 'ring-4 ring-inset ring-fuchsia-900'
      case 'electric':
        return 'ring-4 ring-inset ring-amber-500'
      case 'ground':
        return 'ring-4 ring-inset ring-yellow-800'
      case 'fairy':
        return 'ring-4 ring-inset ring-pink-600'
      case 'fighting':
        return 'ring-4 ring-inset ring-red-900'
      case 'psychic':
        return 'ring-4 ring-inset ring-rose-600'
      case 'rock':
        return 'ring-4 ring-inset ring-amber-950'
      case 'ice':
        return 'ring-4 ring-inset ring-cyan-500'
      case 'ghost':
        return 'ring-4 ring-inset ring-violet-600'
      case 'dragon':
        return 'ring-4 ring-inset ring-violet-900'
      case 'dark':
        return 'ring-4 ring-inset ring-zinc-950'
      case 'steel':
        return 'ring-4 ring-inset ring-slate-500'
      case 'flying':
        return 'ring-4 ring-inset ring-blue-400'
      }
    } else {
      return 'ring-0'
    }
  }
  
  // console.log(pokeman)
</script>

{#await loadPoke(pokeman.url)}
  <a href="/pokedex" class={`card w-80 pt-3 glass flex flex-col items-center`}>
    <div class="w-44 h-44 mt-4 mask mask-squircle glass flex items-center justify-center">
    </div>
    <div class="p-5 pt-0 flex flex-col gap-y-3 items-center">
      <h2 class="card-title text-black">{pokeman.name}</h2>
      <div class="card-actions flex justify-center">
        
          <span class="badge badge-lg glass w-16"></span>
          <span class="badge badge-lg glass w-16"></span>
        
      </div>
      <div class="grid grid-cols-2 gap-x-4">
        
          <div class="flex justify-between gap-x-3 glass">
            <span class="w-12 h-5"></span>
            <span class="w-12 h-5"></span>
          </div>
          <div class="flex justify-between gap-x-3 glass">
            <span class="w-12 h-5"></span>
            <span class="w-12 h-5"></span>
          </div>
          <div class="flex justify-between gap-x-3 glass">
            <span class="w-12 h-5"></span>
            <span class="w-12 h-5"></span>
          </div>
          <div class="flex justify-between gap-x-3 glass">
            <span class="w-12 h-5"></span>
            <span class="w-12 h-5"></span>
          </div>
          <div class="flex justify-between gap-x-3 glass">
            <span class="w-12 h-5"></span>
            <span class="w-12 h-5"></span>
          </div>
          <div class="flex justify-between gap-x-3 glass">
            <span class="w-12 h-5"></span>
            <span class="w-12 h-5"></span>
          </div>
      
      </div>
    </div>
  </a>
{:then pokeman2}
<a href="/pokedex/pokemon/{pokeman2.name}" class={`card w-80 pt-3 glass flex flex-col items-center hover:text-black ${bgColor(`${pokeman2.types[0]?.type.name}`)} ${ringColor(`${pokeman2.types[1]?.type.name}`)}`}>
  <figure class="w-48">
      <img class="w-full" src={pokeman2.sprites.other['official-artwork'].front_default} alt={pokeman2.name}/>
  </figure>
  <div class="p-5 pt-0 flex flex-col gap-y-3 items-center">
    <h2 class="card-title">{pokeman2.name}</h2>
    <div class="card-actions flex justify-center">
      {#each pokeman2.types as type}
        <span class="badge badge-lg bg-{color(type.type.name)}">{type.type.name}</span>
      {/each}
    </div>
    <div class="grid grid-cols-2 gap-x-4">
      {#each pokeman2.stats as stat}
        <div class="flex justify-between gap-x-3">
          <span class="text-sm">{stat.stat.name}:</span>
          <span>{stat.base_stat}</span>
        </div>
      {/each}
    </div>
  </div>
</a>
{/await}

<style>
  a {
    transition: all 0.25s ease;
  }
  
  a:hover {
    transform: scale(1.05);
    transition: all 0.25s ease;
  }
</style>