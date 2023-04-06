<script>
	import axios from 'axios';
  import {bgColor , ringColor} from '../../../../lib/color'

  export let data

  let type
  $:{
    type = data.type
  }

  const loadPoke = async(name) => {
    const url=`https://pokeapi.co/api/v2/pokemon/${name}`
    const res = await axios.get(url)
    const poke = await res.data
    return poke
  }
</script>

<section class="h-auto flex flex-col items-center pt-24 pb-16 gap-y-7">
    <!-- TYPE INFO   -->
  <div class="card flex flex-col items-center p-10 pt-0 gap-y-5 glass text-black">
    <div class="rounded-b-2xl w-full h-16 flex items-center justify-center {bgColor(`${type.name}`)}">     
      <h1 class="text-3xl text-white capitalize">
        {type.name}
      </h1>
    </div>
    <div class="flex flex-col">      
      <div class="grid grid-rows-3 grid-cols-2 grid-flow-col gap-y-3 gap-x-7">

        <div class='w-80 flex flex-col gap-y-2'>
          <h3>No damage to:</h3>
          <div class='flex gap-2 flex-wrap justify-between'>
            {#if type['damage_relations']['no_damage_to'].length != 0}
              {#each type['damage_relations']['no_damage_to'] as x}
                <a href='/pokedex/types/{x.name}' class="btn btn-ghost rounded-full btn-sm text-white {bgColor(`${x.name}`)}">{x.name}</a>
              {/each}
            {:else}
              <span class="btn rounded-full btn-sm text-white btn-disabled">NONE</span>
            {/if}
          </div>
        </div>
  
        <div class='w-80 flex flex-col gap-y-2'>
          <h3>Half damage to:</h3>
          <div class='flex gap-2 flex-wrap justify-between'>
            {#if type['damage_relations']['half_damage_to'].length != 0}
              {#each type['damage_relations']['half_damage_to'] as x}
                <a href='/pokedex/types/{x.name}' class="btn btn-ghost rounded-full btn-sm text-white {bgColor(`${x.name}`)}">{x.name}</a>
              {/each}
            {:else}
              <span class="btn rounded-full btn-sm text-white btn-disabled">NONE</span>
            {/if}
          </div>
        </div>
          
        <div class='w-80 flex flex-col gap-y-2'>
            <h3>Doble damage to:</h3>
            <div class='flex gap-2 flex-wrap'>
              {#if type['damage_relations']['double_damage_to'].length != 0}
                {#each type['damage_relations']['double_damage_to'] as x}
                <a href='/pokedex/types/{x.name}' class="btn btn-ghost rounded-full btn-sm text-white {bgColor(`${x.name}`)}">{x.name}</a>
                {/each}
              {:else}
                <span class="btn rounded-full btn-sm text-white btn-disabled">NONE</span>  
              {/if}
          </div>
        </div>
  
        <div class='w-80 flex flex-col gap-y-2'>
          <h3>No damage from:</h3>
          <div class='flex gap-2 flex-wrap'>
            {#if type['damage_relations']['no_damage_from'].length != 0}
              {#each type['damage_relations']['no_damage_from'] as x}
                <a href='/pokedex/types/{x.name}' class="btn btn-ghost rounded-full btn-sm text-white {bgColor(`${x.name}`)}">{x.name}</a>
              {/each}
            {:else}
              <span class="btn rounded-full btn-sm text-white btn-disabled">NONE</span>
              {/if}
            </div>
          </div>
          
        <div class='w-80 flex flex-col gap-y-2'>
          <h3>Half damage from:</h3>
          <div class='flex gap-2 flex-wrap'>
            {#if type['damage_relations']['half_damage_from'].length != 0}
              {#each type['damage_relations']['half_damage_from'] as x}
                <a href='/pokedex/types/{x.name}' class="btn btn-ghost rounded-full btn-sm text-white {bgColor(`${x.name}`)}">{x.name}</a>
              {/each}
            {:else}
              <span class="btn rounded-full btn-sm text-white btn-disabled">NONE</span>
            {/if}
          </div>
        </div>
  
        <div class='w-80 flex flex-col gap-y-2'>
          <h3>Dobule damage from:</h3>
          <div class='flex gap-2 flex-wrap justify-between'>
            {#if type['damage_relations']['double_damage_from'].length != 0}
              {#each type['damage_relations']['double_damage_from'] as x}
                <a href='/pokedex/types/{x.name}' class="btn btn-ghost rounded-full btn-sm text-white {bgColor(`${x.name}`)}">{x.name}</a>
              {/each}
            {:else}
              <span class="btn rounded-full btn-sm text-white btn-disabled">NONE</span>
            {/if}
          </div>
        </div>
  
      </div>
    </div>
  </div>

  <!-- RELATED POKEMON -->
  <div class="card w-4/5 glass flex flex-col flex-wrap p-10 gap-y-10 items-center">
    <h1 class="text-black text-xl">Pokémon related:</h1>
    <div class="flex flex-wrap gap-5 justify-evenly">
      {#each type?.pokemon as poke}
        {#await loadPoke(`${poke.pokemon.name}`)}
          <span class="card glass w-44 h-56 flex justify-center items-center">
            <p class="text-black">Loading...</p>
          </span>
        {:then pokeman}
          <a href="/pokedex/pokemon/{pokeman.name}" 
          class="x card w-44 h-56 flex flex-col glass items-center justify-evenly p-4 {bgColor(`${pokeman.types[0]?.type.name}`)} {ringColor(`${pokeman.types[1]?.type.name}`)}">
            <h2 class="text-black capitalize text-center">{poke.pokemon.name}</h2>
            <div>
                  <figure class="w-24">
                    <img class="w-full" src={pokeman.sprites.front_default} alt=''/>
                  </figure>
                  <div class="flex flex-col gap-y-1 items-center">
                    {#each pokeman.types as type}
                      <span class="badge {bgColor(`${type.type.name}`)}">{type.type.name}</span>
                    {/each}
                  </div> 
                </div>
              </a>
        {/await}
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    background-image: url('https://th.bing.com/th/id/R.b30eee075e1aaa0906f41a013b4bef41?rik=ue%2f%2fC3P3Qr%2frFQ&riu=http%3a%2f%2fyesofcorsa.com%2fwp-content%2fuploads%2f2016%2f09%2fPokeball-Wallpaper-For-PC.png&ehk=ko4m677Kw32AakQ2XNOWcPbmBjENSwTRbngdWLWU9Xs%3d&risl=&pid=ImgRaw&r=0');
    background-size: cover;
    background-attachment: fixed;
  }

  .x {
    transition: all 0.25s ease;
  }
</style>