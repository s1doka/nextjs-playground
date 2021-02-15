const TMDB_HTTP_HEADERS = {
	"Authorization": `Bearer ${process.env.NEXT_PUBLIC_TMDB_AUTH_TOKEN}`,
};
const TMDB_HOST = process.env.NEXT_PUBLIC_TMDB_API_HOST;
const POPULAR_MOVIES_ENDPOINT = `${TMDB_HOST}/movie/popular`;
const POPULAR_TV_SHOWS_ENDPOINT = `${TMDB_HOST}/tv/popular`;
const TRENDING_MEDIA_ENDPOINT = `${TMDB_HOST}/trending`;
const MOVIE_DETAIL_ENDPOINT = `${TMDB_HOST}/movie`;
const MOVIE_KEYWORDS_ENDPOINT = `${TMDB_HOST}/movie/$id/keywords`;
const MOVIE_CREDITS_ENDPOINT = `${TMDB_HOST}/movie/$id/credits`;
const MOVIE_IMAGES_ENDPOINT = `${TMDB_HOST}/movie/$id/images`;
const MOVIE_RECOMMENDATIONS_ENDPOINT = `${TMDB_HOST}/movie/$id/recommendations`;

export {
	MOVIE_CREDITS_ENDPOINT,
	MOVIE_DETAIL_ENDPOINT,
	MOVIE_IMAGES_ENDPOINT,
	MOVIE_KEYWORDS_ENDPOINT,
	MOVIE_RECOMMENDATIONS_ENDPOINT,
	POPULAR_MOVIES_ENDPOINT,
	POPULAR_TV_SHOWS_ENDPOINT,
	TMDB_HTTP_HEADERS,
	TRENDING_MEDIA_ENDPOINT,
};
