<script>
  export let totalPages
  export let limit
  export let currentPage
  
  const pages = []
  for (let i=1 ; i <= totalPages ; i++) {
    pages.push(i)
  }

  $: minus_1 = currentPage-1
  $: minus_2 = currentPage-2
  $: plus_1 = currentPage+1
  $: plus_2 = currentPage+2

</script>

<div class="btn-group flex flex-wrap">
  <a href='/pokedex?offset=0&limit={limit}' class="btn">First</a>

    <a href={`/pokedex?offset=${limit*(minus_2-1)}&limit=${limit}`} class="btn {minus_2<=0 ? 'hidden' : ''}">{minus_2}</a>
    <a href={`/pokedex?offset=${limit*(minus_1-1)}&limit=${limit}`} class="btn {minus_1<=0 ? 'hidden' : ''}">{minus_1}</a>
    <a href={`/pokedex?offset=${limit*(currentPage-1)}&limit=${limit}`} class="btn btn-active">{currentPage}</a>
    <a href={`/pokedex?offset=${limit*(plus_1-1)}&limit=${limit}`} class="btn {plus_1>totalPages ? 'hidden' : ''}">{plus_1}</a>
    <a href={`/pokedex?offset=${limit*(plus_2-1)}&limit=${limit}`} class="btn {plus_2>totalPages ? 'hidden' : ''}">{plus_2}</a>
    
  <a href="/pokedex?offset={limit*(totalPages-1)}&limit={limit}" class="btn">Last</a>
</div>