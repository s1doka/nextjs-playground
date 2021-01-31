import SectionTitle from "../SectionTitle";
import ReleasesList from "../ReleasesList";
import MovieCard from "../Card/MovieCard";
import CardSkeletonList from "../CardSkeleton/CardSkeletonList";
import usePopularMovies from "../../hooks/usePopularMovies";

function PopularMovies() {
	const {data, status} = usePopularMovies();

	return <div>
		<SectionTitle>
			Popular movies
		</SectionTitle>
		{status === "loading" && <CardSkeletonList />}
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
