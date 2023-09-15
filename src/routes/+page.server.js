export const load = async () => {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: import.meta.env.VITE_TMDB_TOKEN,
        },
    };

    const fetchPopularMovies = async () => {
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        const movieData = await res.json();
        return movieData.results;
    }

    return {
        popularMovies: fetchPopularMovies(),        
    }
}