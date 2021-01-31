import {useQuery} from "react-query";
import {getPopularMovies} from "../services/TMDB";
import {APIQueryStrings, PopularMoviesResponse} from "../types/TMDB";

function usePopularMovies(params?: APIQueryStrings) {
	return useQuery<PopularMoviesResponse, Error>(
		"popularMovies",
		() => getPopularMovies(params),
	);
}

export default usePopularMovies;
