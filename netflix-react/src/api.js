const API_KEY = '9193f05d6523cb02e094c0b53061e647';

const categories = [
    {
        name: 'trending',
        title: 'Em Alta',
        path: `/trending/all/week?language=pt-BR&api_key=${API_KEY}`,
        isLarge: true,
    },
    {
        name: 'originals',
        title: 'Originais Netflix',
        path: `/discover/tv?&with_networks=123&language=pt-BR&api_key=${API_KEY}`,
        isLarge: false,
    },
    {
        name: 'topRated',
        title: 'Populares',
        path: `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`,
        isLarge: false,
    },
    {
        name: 'action',
        title: 'Ação',
        path: `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`,
        isLarge: false,
    },
    {
        name: 'comedy',
        title: 'Comédia',
        path: `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`,
        isLarge: false,
    },
    {
        name: 'horror',
        title: 'Terror',
        path: `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`,
        isLarge: false,
    },
    {
        name: 'romance',
        title: 'Romance',
        path: `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`,
        isLarge: false,
    },
    {
        name: 'documentary',
        title: 'Documentários',
        path: `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`,
        isLarge: false,
    },
];

export const getMovies = async (path) => {
    try {
        let url = `https://api.themoviedb.org/3${path}`;
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log('error getMovies: ', error)
    }
};

export default categories;