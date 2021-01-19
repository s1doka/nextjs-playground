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

export type PopularMoviesResponse = PaginatedResponse<Movie>;
