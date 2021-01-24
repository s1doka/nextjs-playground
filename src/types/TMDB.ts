/**
 * Paginated response from the API.
 *
 * @typeParam T - Specify the type for the results list.
 */
export type PaginatedResponse<T> = {
	/*
   * The actual page.
   * */
	page: number;
	/*
   * Number of total results.
   * */
	total_results: number;
	/*
   * Number of total pages.
   * */
	total_pages: number;
	/*
   * List of results.
   * */
	results: Array<T>;
};

/**
 * Available query strings to filter results.
 */
export type APIQueryStrings = {
	/*
   * Pass a ISO 639-1 value to display translated data for the fields that support it.
   * */
	language: string;
	/*
   * Specify which page to query.
   * */
	page: number;
	/*
   * Specify a ISO 3166-1 code to filter release dates. Must be uppercase.
   * */
	region: string;
};

export type Movie = {
	poster_path: string | null;
	adult: boolean;
	overview: string;
	release_date: string;
	genre_ids: Array<number>;
	id: number;
	original_title: string;
	original_language: string;
	title: string;
	backdrop_path: string | null;
	popularity: number;
	vote_count: number;
	video: boolean;
	vote_average: number;
};

export type TVShow = {
	poster_path: string | null;
	popularity: number;
	id: number;
	backdrop_path: string | null;
	vote_average: number;
	overview: string;
	first_air_date: string;
	origin_country: Array<string>;
	genre_ids: Array<number>;
	original_language: string;
	vote_count: number;
	name: string;
	original_name: string;
};

export type TrendingMediaType = "all" | "movie" | "person" | "tv";

export type TrendingTimeWindow = "day" | "week";

export type PopularMoviesResponse = PaginatedResponse<Movie>;

export type PopularTVShowsResponse = PaginatedResponse<TVShow>;

export type TrendingMediaResponse = PaginatedResponse<Movie & TVShow>;
