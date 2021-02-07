import SectionTitle from "../SectionTitle";
import HorizontalScrollingList from "../HorizontalScrollingList";
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
		<HorizontalScrollingList>
			{data.results.map((movie) => <MovieCard movie={movie} />)}
		</HorizontalScrollingList>}
	</div>;
}

export default PopularMovies;
