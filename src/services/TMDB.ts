import ky from "ky-universal";
import {APIQueryStrings, PopularMoviesResponse} from "../types/TMDB";
import {POPULAR_MOVIES_ENDPOINT} from "../configuration/env";

const headers = {
	"Authorization": `Bearer ${process.env.NEXT_PUBLIC_TMDB_AUTH_TOKEN}`,
};

async function getPopularMovies(
	params?: APIQueryStrings,
): Promise<PopularMoviesResponse> {
	try {
		return await ky.get(
			POPULAR_MOVIES_ENDPOINT,
			{headers, searchParams: params},
		).json();
	} catch (error) {
		console.log(error);
	}
}

function formatReleaseDate(releaseDate: string) {
	return new Intl.DateTimeFormat('en-US').format(new Date(releaseDate))
}

export {getPopularMovies, formatReleaseDate};
