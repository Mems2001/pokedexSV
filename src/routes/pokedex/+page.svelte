<script>
  import Pagination from '../../components/Pagination.svelte';
  import PokeCard from '../../components/PokeCard.svelte'
	import TypeCard from '../../components/TypeCard.svelte';
  import {pokeInfo} from '../../stores/pokedexStore';
  import {searchedPokes , newStore , searchTerm} from '../../stores/searchStore';
  import {enhance} from '$app/forms'

  // $: {
  //   console.log($pokeInfo)
  // }

  export let data
  let pokemon
  let types
  let regions
  $: {
    pokemon = data.pokemon
    types = data.types
    regions = data.regions

    // console.log(pokemon)
    // console.log(regions)
  }

  let totalPoke
  let totalPages
  let curretPage = 1

  $:{
    totalPoke = pokemon.total.count
    // console.log(pages)
    totalPages = Math.ceil(totalPoke/pokemon.total.limit)
    // console.log(totalPages)
    curretPage = Math.ceil((pokemon.total.offset/pokemon.total.limit)+1)
    // console.log(`Curret page is ${curretPage}`)
  }

  // SEARCHBAR
  
  const handleSearch = ({data , cancel}) => {
    const searched = Object.fromEntries(data)
    searchTerm.set(searched.searchTerm)
    newStore(searched.searchTerm)
    cancel()
  }
  // $: console.log($searchedPokes)
  
</script>

{#if $pokeInfo === 'Pokémon'}
  <section class="flex flex-col justify-evenly items-center h-auto w-auto pt-5 gap-y-7 bg-fixed bg-cover mt-16 pb-16">
    
    <div class="h-auto w-full">
      <div class="form-control flex flex-row justify-evenly">
    
        <form method="post" action="?/setSearch" class="input-group w-auto" use:enhance={handleSearch}>
          <input type="text" placeholder="Pokémon's name…" name='searchTerm' class="input input-bordered bg-transparent">
          <button type="submit" class="btn btn-square glass">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </form>
    
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
    
    {#if $searchedPokes.length != 0 && $searchTerm != ''}
      <div class='flex flex-wrap gap-10 justify-evenly'>
        {#each $searchedPokes as pokeman}
          <PokeCard pokemanB={pokeman}/>
        {/each}
      </div>
    {:else}
      <div class='flex flex-wrap gap-10 justify-evenly'>
        {#each pokemon.pokemon as pokeman}
          <PokeCard pokemanB={pokeman}/>
        {/each}
      </div>
    {/if}

    <Pagination totalPages={totalPages} limit={pokemon.total.limit} currentPage={curretPage}/>
  </section>
{:else if $pokeInfo === 'Types'}
  <section class="flex flex-col items-center h-auto w-auto bg-fixed bg-cover pt-28">
    <div class="flex flex-wrap gap-7 w-4/5 justify-evenly">
      {#each types as type}
        <TypeCard type={type} />
      {/each}
    </div>
  </section>
{/if}

<style>
  section {
    background-image: url('https://th.bing.com/th/id/R.b30eee075e1aaa0906f41a013b4bef41?rik=ue%2f%2fC3P3Qr%2frFQ&riu=http%3a%2f%2fyesofcorsa.com%2fwp-content%2fuploads%2f2016%2f09%2fPokeball-Wallpaper-For-PC.png&ehk=ko4m677Kw32AakQ2XNOWcPbmBjENSwTRbngdWLWU9Xs%3d&risl=&pid=ImgRaw&r=0');
  }
</style>