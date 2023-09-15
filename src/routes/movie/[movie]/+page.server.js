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

    const fetchMovieDetails = async (id) => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
        const movieData = await res.json()
        return movieData
    }

    return {
        movieDatails: fetchMovieDetails(params.movie),        
    }
}