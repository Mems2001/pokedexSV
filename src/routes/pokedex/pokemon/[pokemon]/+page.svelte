<script>
	import axios from 'axios';
  import {bgColor, color , fromColor , toColor} from '../../../../lib/color'
  import {handleEvolutions, handleVersions } from '../../../../lib/utils'
  import {page} from '$app/stores'

  export let data

  const loadEvos = async(name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const res = await axios.get(url)
    const evo = await res.data
    return evo
  }

  const loadMove = async(url) => {
    const res = await axios.get(url)
    const move = await res.data
    return move
  }

  let pokeman
  let evolution
  let spec
  let evos
  $:{
    pokeman = data.pokeman
    console.log(pokeman)
    evolution = data.chain
    // console.log(evolution)
    spec = data.specie
    // console.log(spec)
        
    if (evolution){
      evos = handleEvolutions(evolution.chain)
    }

    console.log(handleVersions(pokeman.moves))

  }
  // console.log($page.url.hash)

</script>

<section class="flex flex-col h-auto bg-cover bg-fixed mt-16 pb-16 flex items-center gap-y-10">
  <!-- POKEMON BASE INFO -->
  <div class=" h-auto w-auto rounded-t-3xl flex flex-col items-center relative glass mt-52 pb-10 px-12 gap-y-6">
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

    <h1 class="text-4xl capitalize">
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
            <a href="/pokedex/types/{type.type.name}" class="btn btn-ghost btn-sm h-10 px-5 rounded-full text-md uppercase bg-{color(type.type.name)}">{type.type.name}</a>
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
          <div class="w-72 flex justify-between text-lg">
            <span>{stat.stat.name}:</span>
            <span>{stat.base_stat}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- POKEMON EVOLUTIONS -->
  {#if evolution}
    {#if evolution.chain.evolves_to.length != 0}
      <h2 class="text-xl"><b>Evolution chain:</b></h2>
      <div class="flex items-center gap-x-10">
        {#await evos}
          <p>Waiting evolutions...</p>
        {:then evos2}
          {#each evos2 as e}
            <div class="flex flex-col gap-y-5">
              {#each e as f}
              <a href="/pokedex/pokemon/{f.name}" class="w-52 h-52 flex flex-col glass rounded-full justify-center items-center gap-y-2">
                {#await loadEvos(f.name)}
                <p>Loading {f.name}...</p>
                {:then x}
                  <h3 class="capitalize">{f.name}</h3>  
                    <figure class="w-20">
                      <img src={x.sprites.other['official-artwork'].front_default} alt=""/>
                    </figure>
                    {#each x.types as type}
                      <span class="badge badge-md rounded-full text-black {bgColor(type.type.name)}">{type.type.name}</span>
                    {/each}
                {/await}
                </a>
              {/each}
            </div>
          {/each}
        {/await}
      </div>
    {:else}
      <span class="text-xl">This pokémon does not evolves</span>
    {/if}
  {:else}
    <span class="text-xl">This pokémon does not evolves</span>
  {/if}

  <!-- MOVEMENTS -->
  <div class="glass flex flex-col items-center movements gap-y-5 pt-5">
    <h2 class="text-xl"><b>Movements:</b></h2>
    <div class="flex flex-row flex-wrap justify-center w-full py-2 gap-2">
      {#await handleVersions(pokeman.moves)}
      {:then versions}
        {#each versions as version}
          <a href={`#item-${version.name}`} class="btn btn-xs {$page.url.hash === `#item-${version.name}` ? 'bg-black' : ''}">{version.name}</a>
        {/each}
      {/await}
    </div>
  
    <div class="carousel w-full">
      {#await handleVersions(pokeman.moves)}
      {:then versions}
        {#each versions as version}
          <div id={`item-${version.name}`} class="carousel-item w-full flex flex-col pb-5 gap-y-3">

            <div class="flex flex-col w-full items-center gap-y-3">
              <h2><b>Learned by leveling:</b></h2>
              <div class='overflow-x-auto flex justify-center w-full'>
                <table class="table table-compact w-auto">
                  <thead>
                    <tr>
                      <th>Level</th>
                      <th>Name</th>
                      <th>Accuracy</th>
                      <th>Power</th>
                      <th>Damage class</th>
                      <th>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {#if $page.url.hash == `#item-${version.name}`}
                      {#each version.content.level as move}
                        {#await loadMove(move.move.move.url)}
                          <tr>
                            <th>?</th>
                            <td>Loading...</td>
                            <td>?</td>
                            <td>?</td>
                            <td>?</td>
                            <td>?</td>
                          </tr>
                        {:then move2}
                          <tr>
                            <th>{move.level}</th>
                            <td>{move2.name}</td>
                            <td>{move2.accuracy ?? ''}</td>
                            <td>{move2.power ?? ''}</td>
                            <td>{move2.damage_class.name ?? ''}</td>
                            <td class="flex justify-center"><a href="/pokedex/types/{move2.type.name}" class='badge {bgColor(move2.type.name)}'>{move2.type.name ?? ''}</a></td>
                          </tr>
                        {/await}
                      {/each}
                    {/if}
                  </tbody>
                </table>
              </div>
            </div>

            <div class="flex flex-col w-full items-center gap-y-3">
              <h2><b>Learned by machine:</b></h2>
              <div class='overflow-x-auto flex justify-center w-full'>
                <table class="table table-compact w-auto">
                  <thead>
                    <tr>
                      <th>Level</th>
                      <th>Name</th>
                      <th>Accuracy</th>
                      <th>Power</th>
                      <th>Damage class</th>
                      <th>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {#if $page.url.hash == `#item-${version.name}`}
                      {#each version.content.machine as move}
                        {#await loadMove(move.move.move.url)}
                          <tr>
                            <th>?</th>
                            <td>Loading...</td>
                            <td>?</td>
                            <td>?</td>
                            <td>?</td>
                            <td>?</td>
                          </tr>
                        {:then move2}
                          <tr>
                            <th>{move.level}</th>
                            <td>{move2.name}</td>
                            <td>{move2.accuracy ?? ''}</td>
                            <td>{move2.power ?? ''}</td>
                            <td>{move2.damage_class.name ?? ''}</td>
                            <td class="flex justify-center"><a href="/pokedex/types/{move2.type.name}" class='badge {bgColor(move2.type.name)}'>{move2.type.name ?? ''}</a></td>
                          </tr>
                        {/await}
                      {/each}
                    {/if}
                  </tbody>
                </table>
              </div>
            </div>

            <div class="flex flex-col w-full items-center gap-y-3">
              <h2><b>Learned by breeding:</b></h2>
              <div class='overflow-x-auto flex justify-center w-full'>
                <table class="table table-compact w-auto">
                  <thead>
                    <tr>
                      <th>Level</th>
                      <th>Name</th>
                      <th>Accuracy</th>
                      <th>Power</th>
                      <th>Damage class</th>
                      <th>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {#if $page.url.hash == `#item-${version.name}`}
                      {#each version.content.egg as move}
                        {#await loadMove(move.move.move.url)}
                          <tr>
                            <th>?</th>
                            <td>Loading...</td>
                            <td>?</td>
                            <td>?</td>
                            <td>?</td>
                            <td>?</td>
                          </tr>
                        {:then move2}
                          <tr>
                            <th>{move.level}</th>
                            <td>{move2.name}</td>
                            <td>{move2.accuracy ?? ''}</td>
                            <td>{move2.power ?? ''}</td>
                            <td>{move2.damage_class.name ?? ''}</td>
                            <td class="flex justify-center"><a href="/pokedex/types/{move2.type.name}" class='badge {bgColor(move2.type.name)}'>{move2.type.name ?? ''}</a></td>
                          </tr>
                        {/await}
                      {/each}
                    {/if}
                  </tbody>
                </table>
              </div>
            </div>

            <div class="flex flex-col w-full items-center gap-y-3">
              <h2><b>Learned by tutor:</b></h2>
              <div class='overflow-x-auto flex justify-center w-full'>
                <table class="table table-compact w-auto">
                  <thead>
                    <tr>
                      <th>Level</th>
                      <th>Name</th>
                      <th>Accuracy</th>
                      <th>Power</th>
                      <th>Damage class</th>
                      <th>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {#if $page.url.hash == `#item-${version.name}`}
                      {#each version.content.egg as move}
                        {#await loadMove(move.move.move.url)}
                          <tr>
                            <th>?</th>
                            <td>Loading...</td>
                            <td>?</td>
                            <td>?</td>
                            <td>?</td>
                            <td>?</td>
                          </tr>
                        {:then move2}
                          <tr>
                            <th>{move.level}</th>
                            <td>{move2.name}</td>
                            <td>{move2.accuracy ?? ''}</td>
                            <td>{move2.power ?? ''}</td>
                            <td>{move2.damage_class.name ?? ''}</td>
                            <td class="flex justify-center"><a href="/pokedex/types/{move2.type.name}" class='badge {bgColor(move2.type.name)}'>{move2.type.name ?? ''}</a></td>
                          </tr>
                        {/await}
                      {/each}
                    {/if}
                  </tbody>
                </table>
              </div>
            </div>
            
          </div>
        {/each}
      {/await}
  
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

  .movements {
    width: 794px
  }
</style>