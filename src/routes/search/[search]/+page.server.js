export const prerender = 'auto';
/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch, params }) => {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: import.meta.env.VITE_TMDB_TOKEN,
        },
    };    

    const fetchMovieDetails = async (search) => {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, options);
        const movieData = await res.json()
        return movieData.results
    }

    return {
        movieSearch: fetchMovieDetails(params.search),
    }
}