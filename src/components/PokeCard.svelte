<script>
  import axios from 'axios'

  export let pokeman
  
  console.log(pokeman)
</script>

<div class="card w-96 glass">
  <figure><img src="" alt="car!"/></figure>
  <div class="card-body">
    <h2 class="card-title">{pokeman.name}</h2>
    <p>{pokeman.url}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>