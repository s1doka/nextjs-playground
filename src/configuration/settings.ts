const TMDB_HTTP_HEADERS = {
	"Authorization": `Bearer ${process.env.NEXT_PUBLIC_TMDB_AUTH_TOKEN}`,
};
const TMDB_HOST = process.env.NEXT_PUBLIC_TMDB_API_HOST;
const POPULAR_MOVIES_ENDPOINT = `${TMDB_HOST}/movie/popular`;
const POPULAR_TV_SHOWS_ENDPOINT = `${TMDB_HOST}/tv/popular`;
const TRENDING_MEDIA_ENDPOINT = `${TMDB_HOST}/trending`;
const MOVIE_DETAIL_ENDPOINT = `${TMDB_HOST}/movie`;
const MOVIE_KEYWORDS_ENDPOINT = `${TMDB_HOST}/movie/$id/keywords`;

export {
	MOVIE_DETAIL_ENDPOINT,
	MOVIE_KEYWORDS_ENDPOINT,
	POPULAR_MOVIES_ENDPOINT,
	POPULAR_TV_SHOWS_ENDPOINT,
	TMDB_HTTP_HEADERS,
	TRENDING_MEDIA_ENDPOINT,
};
