
<script>
    import PopularMovies from '../components/PopularMovies.svelte';
    import SearchMovies from '../components/SearchMovies.svelte';
    import { fly } from 'svelte/transition';
    export let data;
    const { popularMovies } = data
</script>

<section in:fly={{y:50, duration: 500, delay: 500}} out:fly={{duration: 500}}>
    <SearchMovies />
    <PopularMovies {popularMovies}/>
</section>

<style>
    @font-face {
        font-family: 'Poppins', sans-serif;
        src: url(https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Poppins:wght@300&display=swap);
    }

    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Popping', sans-serif;
    }

    :global(body) {
        margin: 0 10%;
    }

</style>