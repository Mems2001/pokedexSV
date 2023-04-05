<script>
  import PokeCard from '../../components/PokeCard.svelte'

  export let data
  const {types , regions , pokemon} = data
  // console.log(types)
</script>

<section class="flex flex-col justify-evenly h-auto container mx-auto pt-5 gap-y-5">
  <div class="h-auto">
    <div class="form-control flex flex-row justify-evenly">
  
      <div class="input-group w-auto">
        <input type="text" placeholder="Pokémon's name…" class="input input-bordered" />
        <button class="btn btn-square">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
      </div>
  
      <div class="input-group w-auto">
        <select class="select select-bordered">
          <option disabled selected>Pokémon's type</option>
          {#each types as type}
            <option>{type.name}</option>
          {/each}
        </select>
        <!-- <button class="btn">Go</button> -->
      </div>
  
      <div class="input-group w-auto">
        <select class="select select-bordered">
          <option disabled selected>Region</option>
          {#each regions as region} 
            <option>{region.name}</option>
          {/each}
        </select>
        <!-- <button class="btn">Go</button> -->
      </div>
  
    </div>
  </div>
 
 <div class='flex flex-wrap gap-5'>
  {#each pokemon as pokeman}
    <PokeCard pokeman={pokeman}/>
  {/each}
 </div>
</section>