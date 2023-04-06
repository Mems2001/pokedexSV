<script>
	// import axios from "axios";


  export let type

  console.log(type)

  const typeIcon = (name) => {
    switch(name) {
      case 'normal':
        return 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/7a/latest/20230109215220/Tipo_normal_icono_EpEc.png/60px-Tipo_normal_icono_EpEc.png'
      case 'fighting':
        return 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/e/ef/latest/20230109223528/Tipo_lucha_icono_EpEc.png/60px-Tipo_lucha_icono_EpEc.png'
      case 'flying':
        return 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/5f/latest/20230109223715/Tipo_volador_icono_EpEc.png/60px-Tipo_volador_icono_EpEc.png'
      case 'poison':
        return 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/90/latest/20230109223701/Tipo_veneno_icono_EpEc.png/60px-Tipo_veneno_icono_EpEc.png'
      case 'ground':
        return 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/e/e2/latest/20230109223645/Tipo_tierra_icono_EpEc.png/60px-Tipo_tierra_icono_EpEc.png'
      case 'rock':
        return 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/5c/latest/20230109223616/Tipo_roca_icono_EpEc.png/60px-Tipo_roca_icono_EpEc.png'
      case 'bug':
        return 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/4/4e/latest/20230109223327/Tipo_bicho_icono_EpEc.png/60px-Tipo_bicho_icono_EpEc.png'
      case 'ghost':
        return 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/96/latest/20230109223417/Tipo_fantasma_icono_EpEc.png/60px-Tipo_fantasma_icono_EpEc.png'
      case 'steel':
        return 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/aa/latest/20230109002124/Tipo_acero_icono_EpEc.png/60px-Tipo_acero_icono_EpEc.png'
      case 'fire':
        return 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/6/63/latest/20230109223435/Tipo_fuego_icono_EpEc.png/60px-Tipo_fuego_icono_EpEc.png'
      case 'water':
        return 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/76/latest/20230109223311/Tipo_agua_icono_EpEc.png/60px-Tipo_agua_icono_EpEc.png'
      case 'grass':
        return 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/bb/latest/20230109223544/Tipo_planta_icono_EpEc.png/60px-Tipo_planta_icono_EpEc.png'
      case 'electric':
        return 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/7a/latest/20230109223400/Tipo_el%C3%A9ctrico_icono_EpEc.png/60px-Tipo_el%C3%A9ctrico_icono_EpEc.png'
      case 'psychic':
        return 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/6/68/latest/20230109223559/Tipo_ps%C3%ADquico_icono_EpEc.png/60px-Tipo_ps%C3%ADquico_icono_EpEc.png'
      case 'ice':
        return 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/c/cf/latest/20230109223506/Tipo_hielo_icono_EpEc.png/60px-Tipo_hielo_icono_EpEc.png'
      case 'dragon':
        return 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/8/81/latest/20230109223341/Tipo_drag%C3%B3n_icono_EpEc.png/60px-Tipo_drag%C3%B3n_icono_EpEc.png'
      case 'dark':
        return 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/4/4e/latest/20230109223629/Tipo_siniestro_icono_EpEc.png/60px-Tipo_siniestro_icono_EpEc.png'
      case 'fairy':
        return 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/2/22/latest/20230109223451/Tipo_hada_icono_EpEc.png/60px-Tipo_hada_icono_EpEc.png'
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

  // const loadType = async(url) => {
  //   const res = await axios.get(url)
  //   const type = res.data
  //   return type
  // }
</script>

<!-- {#await loadType} -->
  <a href="/pokedex/types/{type.name}" class="card w-36 h-36 glass rounded-full flex items-center justify-center {bgColor(`${type?.name}`)}">
    <figure class="w-auto">
      <img src={typeIcon(`${type.name}`)} alt={`${type.name}`}/>
    </figure>
    <h1>{type.name}</h1>
  </a>
<!-- {:then type2}
  <div class="card glass">
    <h1>{type2.name}</h1>
  </div>
{/await} -->

<style>
  a {
    transition: all 0.25s ease;
  }
</style>