import ky from "ky-universal";
import {
	APIQueryStrings,
	PopularMoviesResponse,
	PopularTVShowsResponse,
} from "../types/TMDB";
import {
	POPULAR_MOVIES_ENDPOINT,
	POPULAR_TV_SHOWS_ENDPOINT,
} from "../configuration/env";

const headers = {
	"Authorization": `Bearer ${process.env.NEXT_PUBLIC_TMDB_AUTH_TOKEN}`,
};

// TODO - Improve error handling for HTTP requests
async function getPopularMovies(
	searchParams?: APIQueryStrings,
): Promise<PopularMoviesResponse> {
	try {
		return await ky.get(POPULAR_MOVIES_ENDPOINT, {headers, searchParams}).json();
	} catch (error) {
		console.log(error);
	}
}

async function getPopularTVShows(
	searchParams?: Omit<APIQueryStrings, "region">,
): Promise<PopularTVShowsResponse> {
	try {
		return ky.get(POPULAR_TV_SHOWS_ENDPOINT, {headers, searchParams}).json();
	} catch (error) {
		console.log(error);
	}
}

function formatReleaseDate(releaseDate: string) {
	return new Intl.DateTimeFormat("en-US").format(new Date(releaseDate));
}

export {formatReleaseDate, getPopularMovies, getPopularTVShows};
