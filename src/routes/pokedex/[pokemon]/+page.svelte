<script>
  export let data
  const {pokeman} = data

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

  const fromColor = (type) => {
    switch(type) {
      case 'fire':
        return 'from-red-600'
      case 'grass':
        return 'from-green-700'
      case 'water':
        return 'from-cyan-800'
      case 'bug':
        return 'from-lime-700'
      case 'normal':
        return 'from-rose-900'
      case 'poison':
        return 'from-fuchsia-900'
      case 'electric':
        return 'from-amber-500'
      case 'ground':
        return 'from-yellow-800'
      case 'fairy':
        return 'from-pink-600'
      case 'fighting':
        return 'from-red-900'
      case 'psychic':
        return 'from-rose-600'
      case 'rock':
        return 'from-amber-950'
      case 'ice':
        return 'from-cyan-500'
      case 'ghost':
        return 'from-violet-600'
      case 'dragon':
        return 'from-violet-900'
      case 'dark':
        return 'from-zinc-950'
      case 'steel':
        return 'from-slate-500'
      case 'flying':
        return 'from-blue-400'
    }
  }

  const toColor = (type) => {
    if (type != undefined){
      switch(type) {
        case 'fire':
          return 'to-red-600'
        case 'grass':
          return 'to-green-700'
        case 'water':
          return 'to-cyan-800'
        case 'bug':
          return 'to-lime-700'
        case 'normal':
          return 'to-rose-900'
        case 'poison':
          return 'to-fuchsia-900'
        case 'electric':
          return 'to-amber-500'
        case 'ground':
          return 'to-yellow-800'
        case 'fairy':
          return 'to-pink-600'
        case 'fighting':
          return 'to-red-900'
        case 'psychic':
          return 'to-rose-600'
        case 'rock':
          return 'to-amber-950'
        case 'ice':
          return 'to-cyan-500'
        case 'ghost':
          return 'to-violet-600'
        case 'dragon':
          return 'to-violet-900'
        case 'dark':
          return 'to-zinc-950'
        case 'steel':
          return 'to-slate-500'
        case 'flying':
          return 'to-blue-400'
      }
    } else {
      return ''
    }
  }
</script>

<section class="h-auto bg-cover bg-fixed mt-16 pb-16 flex justify-center">
  <div class=" h-auto w-3/5 rounded-t-3xl flex flex-col items-center relative glass mt-52 pb-10 px-12 gap-y-6">
    <div class="absolute w-64 -top-48 z-10">
      <img src={pokeman.sprites.other['official-artwork'].front_default} alt="none"/>
    </div>

    {#if pokeman.types[1]?.type.name}
      <div class='h-24 w-full rounded-b-3xl flex items-center justify-center bg-gradient-to-tr {fromColor(pokeman.types[0].type.name)} from-40% {toColor(pokeman.types[1]?.type.name)}'>
        <div class="shad w-48 h-8"></div>
      </div>
    {:else}
    <div class='h-24 w-full rounded-b-3xl flex items-center justify-center bg-{color(pokeman.types[0].type.name)}'>
      <div class="shad w-48 h-8"></div>
    </div>
    {/if}

    <h1 class="text-4xl">
      {pokeman.name}
    </h1>

    <div class="flex">
      <div class="flex flex-col items-center text-lg w-24">
        <span class="text-3xl">{pokeman.height}</span> 
        <span>Height</span> 
      </div>
      <div class="flex flex-col items-center text-lg w-24">
        <span class="text-3xl">{pokeman.weight}</span> 
        <span>Weight</span> 
      </div>
    </div>

    <div class="w-full flex justify-evenly">
      <div class="flex flex-col items-center gap-y-3">
        <h2 class="text-lg">Types:</h2>
        <div class="flex gap-x-5">
          {#each pokeman.types as type}
            <span class="badge text-md h-10 px-6 bg-{color(type.type.name)}">{type.type.name}</span>
          {/each}
        </div>
      </div>
      <div class="flex flex-col items-center gap-y-3">
        <h2 class="text-lg">Abilities:</h2>
        <div class="flex gap-x-5">
          {#each pokeman.abilities as ability}
            <span class="badge text-md h-10 px-6">{ability.ability.name}</span>
          {/each}
        </div>
      </div>
    </div>

    <div class="w-full badge h-auto flex flex-col items-center gap-y-5 p-5 px-10">
      <h2 class="text-xl">Stats:</h2>
      <div class="w-full grid grid-cols-2 gap-x-10">
        {#each pokeman.stats as stat}
          <div class="flex justify-between text-lg">
            <span>{stat.stat.name}:</span>
            <span>{stat.base_stat}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  section {
    background-image: url('https://th.bing.com/th/id/R.b41d20d73e9655540f512056bcbff8ad?rik=cBXCcetli%2beznQ&pid=ImgRaw&r=0');
  }

  .shad {
    background-color: black;
    border-radius: 50%;
    opacity: 50%;
  }
</style>