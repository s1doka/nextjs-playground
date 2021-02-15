import ky from "ky-universal";
import {
	APIQueryStrings,
	KeywordsResponse,
	MovieCreditsResponse,
	MovieDetailResponse,
	MovieImagesResponse,
	PopularMoviesResponse,
	PopularTVShowsResponse,
	TrendingMediaResponse,
	TrendingMediaType,
	TrendingTimeWindow,
} from "../types/TMDB";
import {
	MOVIE_CREDITS_ENDPOINT,
	MOVIE_DETAIL_ENDPOINT,
	MOVIE_IMAGES_ENDPOINT,
	MOVIE_KEYWORDS_ENDPOINT,
	POPULAR_MOVIES_ENDPOINT,
	POPULAR_TV_SHOWS_ENDPOINT,
	TMDB_HTTP_HEADERS,
	TRENDING_MEDIA_ENDPOINT,
} from "../configuration/settings";

async function getPopularMovies(
	searchParams?: APIQueryStrings,
): Promise<PopularMoviesResponse> {
	return await ky.get(
		POPULAR_MOVIES_ENDPOINT,
		{headers: TMDB_HTTP_HEADERS, searchParams},
	).json();
}

async function getPopularTVShows(
	searchParams?: Omit<APIQueryStrings, "region">,
): Promise<PopularTVShowsResponse> {
	return ky.get(
		POPULAR_TV_SHOWS_ENDPOINT,
		{headers: TMDB_HTTP_HEADERS, searchParams},
	).json();
}

async function getTrendingMedia(
	mediaType: TrendingMediaType,
	timeWindow: TrendingTimeWindow,
): Promise<TrendingMediaResponse> {
	return ky.get(
		`${TRENDING_MEDIA_ENDPOINT}/${mediaType}/${timeWindow}`,
		{headers: TMDB_HTTP_HEADERS},
	).json();
}

async function getMovieDetail(id: string): Promise<MovieDetailResponse> {
	return ky.get(`${MOVIE_DETAIL_ENDPOINT}/${id}`, {headers: TMDB_HTTP_HEADERS}).json();
}

async function getMovieKeywords(id: string): Promise<KeywordsResponse> {
	return ky.get(
		`${MOVIE_KEYWORDS_ENDPOINT.replace("$id", id)}`,
		{headers: TMDB_HTTP_HEADERS},
	).json();
}

async function getMovieCredits(id: string): Promise<MovieCreditsResponse> {
	return ky.get(
		`${MOVIE_CREDITS_ENDPOINT.replace("$id", id)}`,
		{headers: TMDB_HTTP_HEADERS},
	).json();
}

async function getMovieImages(id: string): Promise<MovieImagesResponse> {
	return ky.get(
		`${MOVIE_IMAGES_ENDPOINT.replace("$id", id)}`,
		{headers: TMDB_HTTP_HEADERS},
	).json();
}

function formatReleaseDate(releaseDate: string): string {
	return new Intl.DateTimeFormat(
		"en",
		{timeZone: "UTC", day: "2-digit", month: "long", year: "numeric"},
	).format(new Date(releaseDate));
}

function formatRating(voteAverage: number): string {
	return `${voteAverage * 10}`;
}

function buildReleaseImagePath(releasePosterPath: string) {
	return `https://image.tmdb.org/t/p/w500${releasePosterPath}`;
}

export {
	buildReleaseImagePath,
	formatRating,
	formatReleaseDate,
	getMovieCredits,
	getMovieDetail,
	getMovieImages,
	getMovieKeywords,
	getPopularMovies,
	getPopularTVShows,
	getTrendingMedia,
};
