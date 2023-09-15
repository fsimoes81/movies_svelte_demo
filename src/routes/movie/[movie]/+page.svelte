<script>
    import { fly } from 'svelte/transition';    
    export let data;
    const { movieDatails } = data
</script>

<div in:fly={{y:50, duration: 500, delay: 500}} out:fly={{duration: 500}} class="movie-detail">
    <div class="img-container">
        <img 
            src={'https://image.tmdb.org/t/p/original' + movieDatails.backdrop_path} 
            alt={movieDatails.title} 
        />
    </div>
    <div class="txt-container">
        <h1>{movieDatails.title}</h1>
        <p class="overview">{movieDatails.overview}</p>
        <p>
            <span>Release Date:</span>
            {movieDatails.release_date} <br />
            <span>Bugdet:</span> ${movieDatails.budget.toLocaleString('en-US')} <br />
            <span>Rating:</span>
            {movieDatails.vote_average} <br />
            {movieDatails.runtime}mins
        </p>
    </div>
</div>

<style>
    h1 {
        padding: 1rem 0rem 2rem;
    }

    p {
        padding: 1rem 0rem;
    }

    .img-container {
        width: 100%;
    }
    img {
        width: 100%;
        border-radius: 1rem;
    }

    .movie-detail {
        margin: 2rem 20%;
    }

    span {
        font-weight: bold;
    }
</style>