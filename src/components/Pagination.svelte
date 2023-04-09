<script>
  export let totalPages
  export let limit
  export let currentPage
  
  const pages = []
  for (let i=1 ; i <= totalPages ; i++) {
    pages.push(i)
  }

</script>

<div class="btn-group flex flex-wrap">
  <a href='/pokedex?offset=0&limit={limit}' class="btn">First</a>
  {#each pages as page}
    <a href={`/pokedex?offset=${limit*(page-1)}&limit=${limit}`} class="btn">{currentPage}</a>
  {/each}
  <a href="/pokedex?offset={limit*(totalPages-1)}&limit={limit}" class="btn">Last</a>
</div>