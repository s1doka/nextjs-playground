import {useQuery} from "react-query";
import {getPopularMovies} from "../../services/TMDB";
import Typography from "@material-ui/core/Typography";
import SectionTitle from "../SectionTitle";
import ReleasesList from "../ReleasesList";
import MovieCard from "../Card/MovieCard";

function PopularMovies() {
	const {data, status} = useQuery("popularMovies", () => getPopularMovies());

	// TODO - Create proper loading placeholder
	return <div>
		<SectionTitle>
			Popular movies
		</SectionTitle>
		{status === "loading" &&
		<Typography variant="caption" gutterBottom={true}>
			Loading...
		</Typography>}
		{status === "success" &&
		<ReleasesList>
			{data.results.map((movie) => <MovieCard movie={movie} />)}
		</ReleasesList>}
	</div>;
}

export default PopularMovies;
