<script>
  import PokeCard from '../../components/PokeCard.svelte'

  export let data
  const {types , regions , pokemon} = data
  // console.log(types)
</script>

  <section class="flex flex-col justify-evenly h-auto w-auto pt-5 gap-y-5 bg-fixed bg-cover mt-16">
    <div class="h-auto w-auto">
      <div class="form-control flex flex-row justify-evenly">
    
        <div class="input-group w-auto">
          <input type="text" placeholder="Pokémon's name…" class="input input-bordered bg-transparent" />
          <button class="btn btn-square glass">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>
    
        <!-- <div class="input-group w-auto"> -->
          <select class="select select-bordered w-auto max-w-xs glass">
            <option class="bg-neutral-900" disabled selected>Pokémon's type</option>
            {#each types as type}
              <option class="bg-neutral-900">{type.name}</option>
            {/each}
          </select>
          <!-- <button class="btn">Go</button> -->
        <!-- </div> -->
    
        <!-- <div class="input-group w-auto"> -->
          <select class="select select-bordered w-auto max-w-xs glass">
            <option class='bg-neutral-900' disabled selected>Region</option>
            {#each regions as region} 
              <option class="bg-neutral-900">{region.name}</option>
            {/each}
          </select>
          <!-- <button class="btn">Go</button> -->
        <!-- </div> -->
    
      </div>
    </div>
  
    <div class='flex flex-wrap gap-5 justify-evenly'>
      {#each pokemon as pokeman}
        <PokeCard pokeman={pokeman}/>
      {/each}
    </div>
  </section>

<style>
  section {
    background-image: url('https://th.bing.com/th/id/R.b30eee075e1aaa0906f41a013b4bef41?rik=ue%2f%2fC3P3Qr%2frFQ&riu=http%3a%2f%2fyesofcorsa.com%2fwp-content%2fuploads%2f2016%2f09%2fPokeball-Wallpaper-For-PC.png&ehk=ko4m677Kw32AakQ2XNOWcPbmBjENSwTRbngdWLWU9Xs%3d&risl=&pid=ImgRaw&r=0');
  }
</style>