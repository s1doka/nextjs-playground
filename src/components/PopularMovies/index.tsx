import MoviesList from "../MoviesList";
import {useQuery} from "react-query";
import {getPopularMovies} from "../../services/TMDB";
import Typography from "@material-ui/core/Typography";

function PopularMovies() {
	const {data, status} = useQuery("popularMovies", () => getPopularMovies());

	return <div>
		<Typography variant="h4" gutterBottom={true}>
			Popular movies
		</Typography>
		{status === "loading" &&
		<Typography variant="caption" gutterBottom={true}>
			Loading...
		</Typography>}
		{status === "success" && <MoviesList movies={data?.results} />}
	</div>;
}

export default PopularMovies;
