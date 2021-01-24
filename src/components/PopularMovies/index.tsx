import {useQuery} from "react-query";
import {getPopularMovies} from "../../services/TMDB";
import SectionTitle from "../SectionTitle";
import ReleasesList from "../ReleasesList";
import MovieCard from "../Card/MovieCard";
import CardSkeleton from "../CardSkeleton";

function PopularMovies() {
	const {data, status} = useQuery("popularMovies", () => getPopularMovies());

	return <div>
		<SectionTitle>
			Popular movies
		</SectionTitle>
		{status === "loading" &&
		<ReleasesList>
			<CardSkeleton />
			<CardSkeleton />
			<CardSkeleton />
			<CardSkeleton />
			<CardSkeleton />
		</ReleasesList>}
		{status === "error" &&
		<p>
			Something went wrong...
		</p>}
		{status === "success" &&
		<ReleasesList>
			{data.results.map((movie) => <MovieCard movie={movie} />)}
		</ReleasesList>}
	</div>;
}

export default PopularMovies;
