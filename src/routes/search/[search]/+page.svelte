<script>
    import MovieCard from '../../../components/MovieCard.svelte';
    export let data;
    const { movieSearch } = data
    console.log(movieSearch)
</script>

<div class="searched-movies">
    {#each movieSearch as movie }
        <MovieCard {movie} />
    {/each}
</div>

<style>
    .searched-movies {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-column-gap: 1rem;
        row-gap: 2rem;
        height: 20vh;
    }
</style>