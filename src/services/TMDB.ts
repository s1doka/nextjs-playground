import ky from "ky-universal";
import {
	APIQueryStrings,
	MovieDetailResponse,
	PopularMoviesResponse,
	PopularTVShowsResponse,
	TrendingMediaResponse,
	TrendingMediaType,
	TrendingTimeWindow,
} from "../types/TMDB";
import {
	MOVIE_DETAIL_ENDPOINT,
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
	getMovieDetail,
	getPopularMovies,
	getPopularTVShows,
	getTrendingMedia,
};
