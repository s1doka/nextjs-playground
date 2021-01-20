import {render} from "../../test-utils";

import MovieCard from "../../../src/components/Card/MovieCard";
import {Movie} from "../../../src/types/TMDB";
import {formatReleaseDate} from "../../../src/services/TMDB";

describe(
	"<MovieCard/>",
	() => {
		const movie: Movie = {
			"poster_path": "/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg",
			"adult": false,
			"overview": "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
			"release_date": "2016-08-03",
			"genre_ids": [14, 28, 80],
			"id": 297_761,
			"original_title": "Suicide Squad",
			"original_language": "en",
			"title": "Suicide Squad",
			"backdrop_path": "/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg",
			"popularity": 48.261451,
			"vote_count": 1_466,
			"video": false,
			"vote_average": 5.91,
		};

		test(
			"snapshot testing",
			() => {
				const {asFragment} = render(<MovieCard movie={movie} />);
				expect(asFragment()).toMatchSnapshot();
			},
		);

		test("should render the movie title and release date", () => {
			const { getByTestId}= render(<MovieCard movie={movie} />)

			expect(getByTestId(`movie-title-${movie.id}`)).toBeVisible()
			expect(getByTestId(`movie-title-${movie.id}`)).toHaveTextContent(movie.original_title)

			expect(getByTestId(`movie-release-date-${movie.id}`)).toBeVisible()
			expect(getByTestId(`movie-release-date-${movie.id}`)).toHaveTextContent(formatReleaseDate(movie.release_date))
		})
	},
);
