<script>
    import '../app.css'
</script>

   <div class="container">
       <h1 class="text-3xl font-bold underline">Search/Filter</h1>
       <input type="search" placeholder="Search a country or city..." class="input input-bordered input-primary w-full max-w-xs my-4"/>
   </div> 

<div class="card-weather">
    <slot />
</div>

<style>
    :global(body){
        display: grid;
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        place-content: center;
        margin: 0;
        min-height: 100vh;
    }

    :global(*, *::after, *::before){
        box-sizing: border-box;
    }

    :global(h1, h2, h3, h4, h5){
        margin: 0;
    }

    .container{
        margin-inline: auto;
        margin-bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card-weather{
        background-color: #95A5A6;
        aspect-ratio: 9 / 16;
        width: 400px;
        max-width: 100%;
        display: block;
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        position: relative;
    }
</style>

