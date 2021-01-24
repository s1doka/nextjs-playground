import ky from "ky-universal";
import {
	APIQueryStrings,
	PopularMoviesResponse,
	PopularTVShowsResponse,
} from "../types/TMDB";
import {
	TMDB_HTTP_HEADERS,
	POPULAR_MOVIES_ENDPOINT,
	POPULAR_TV_SHOWS_ENDPOINT,
} from "../configuration/settings";

async function getPopularMovies(
	searchParams?: APIQueryStrings,
): Promise<PopularMoviesResponse> {
	return await ky.get(POPULAR_MOVIES_ENDPOINT, {headers: TMDB_HTTP_HEADERS, searchParams}).json();
}

async function getPopularTVShows(
	searchParams?: Omit<APIQueryStrings, "region">,
): Promise<PopularTVShowsResponse> {
	return ky.get(POPULAR_TV_SHOWS_ENDPOINT, {headers: TMDB_HTTP_HEADERS, searchParams}).json();
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
	getPopularMovies,
	getPopularTVShows,
};
